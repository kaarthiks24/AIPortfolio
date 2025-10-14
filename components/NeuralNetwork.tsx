'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.Group>(null!)

  const particlesCount = 3000 // Increased particle count

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    const particlePositions: THREE.Vector3[] = []

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 15

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      particlePositions.push(new THREE.Vector3(x, y, z))
    }

    // Create connections between nearby particles
    const connections: [THREE.Vector3, THREE.Vector3][] = []
    const maxDistance = 2
    const maxConnections = 800 // Limit connections for performance

    for (let i = 0; i < Math.min(particlePositions.length, 150); i++) {
      let connectionCount = 0
      for (let j = i + 1; j < particlePositions.length && connectionCount < 5; j++) {
        const distance = particlePositions[i].distanceTo(particlePositions[j])
        if (distance < maxDistance && connections.length < maxConnections) {
          connections.push([particlePositions[i], particlePositions[j]])
          connectionCount++
        }
      }
    }

    return { positions, connections }
  }, [particlesCount])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 25
    }
    if (linesRef.current) {
      linesRef.current.rotation.x -= delta / 20
      linesRef.current.rotation.y -= delta / 25
    }
  })

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#0A84FF"
            size={0.025}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>

      {/* Connection Lines */}
      <group ref={linesRef} rotation={[0, 0, Math.PI / 4]}>
        {connections.map((connection, index) => (
          <Line
            key={index}
            points={connection}
            color="#5AC8FA"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        ))}
      </group>

      {/* Secondary particle layer for depth */}
      <group rotation={[Math.PI / 3, 0, 0]}>
        <Points positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#5AC8FA"
            size={0.015}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
    </>
  )
}

const NeuralNetwork = () => {
  return (
    <div className="w-full h-full opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#0A84FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#5AC8FA" />
        <NeuralParticles />
      </Canvas>
    </div>
  )
}

export default NeuralNetwork
