'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const AIAvatar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative"
        onHoverStart={() => {
          setIsHovered(true)
          setShowMessage(true)
        }}
        onHoverEnd={() => {
          setIsHovered(false)
          setTimeout(() => setShowMessage(false), 300)
        }}
      >
        {/* Avatar Container */}
        <motion.div
          className="w-32 h-32 rounded-full glass-morphism neon-border-cyan flex items-center justify-center cursor-pointer relative overflow-hidden"
          animate={{
            boxShadow: isHovered
              ? ['0 0 20px #00FFFF', '0 0 40px #00FFFF', '0 0 20px #00FFFF']
              : '0 0 20px #00FFFF',
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {/* Animated Rings */}
          <motion.div
            className="absolute inset-0 border-2 border-neon-magenta rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-neon-green rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Avatar Symbol */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-6xl text-gradient"
          >
            🤖
          </motion.div>
        </motion.div>

        {/* Holographic Message */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-64 glass-morphism neon-border-cyan rounded-lg p-4"
          >
            <p className="text-sm text-neon-cyan">
              Welcome to my AI Nexus. I&apos;m a GenAI engineer specializing in cloud-deployed
              models and interactive systems. Explore my work!
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-dark-card border-r border-b border-neon-cyan" />
          </motion.div>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-sm text-gray-400"
      >
        Hover over AI Avatar
      </motion.p>
    </div>
  )
}

export default AIAvatar
