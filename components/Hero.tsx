'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import NeuralNetwork from './NeuralNetwork'
import Image from 'next/image'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {mounted && <NeuralNetwork />}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base/60 via-dark-base/40 to-dark-base z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-glow"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Profile Picture */}
              <motion.div
                className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent-primary relative animate-glow-ring"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Kaarthik Senthil Kumar"
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient animate-shimmer bg-gradient-to-r from-white via-accent-primary to-white bg-[length:200%_100%]">
              Kaarthik Senthil Kumar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-accent-primary text-xl mb-6 font-semibold"
          >
            AI/ML Engineer
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-light mb-8 text-accent-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building the future with{' '}
            <motion.span
              className="text-gradient-accent font-semibold"
              animate={{
                textShadow: [
                  '0 0 20px rgba(10, 132, 255, 0.5)',
                  '0 0 40px rgba(10, 132, 255, 0.8)',
                  '0 0 20px rgba(10, 132, 255, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              GenAI
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-accent-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Specializing in LLMs, RAG systems, and enterprise AI solutions.
            Currently at Synechron Inc, crafting intelligent systems that deliver measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(10, 132, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-primary rounded-xl text-white font-semibold hover:bg-accent-primary/90 transition-all duration-300 shadow-subtle-glow animate-pulse-glow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, borderColor: 'rgba(10, 132, 255, 1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-morphism border-accent rounded-xl text-accent-primary font-semibold hover:bg-accent-primary/10 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'GPA', value: '3.94/4.0', icon: '🎓' },
            { label: 'Projects', value: '6+', icon: '🚀' },
            { label: 'Experience', value: '3+ Years', icon: '💼' },
            { label: 'Certifications', value: '3+', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-morphism rounded-2xl p-6 border-subtle hover:border-accent transition-all cursor-pointer"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-accent-primary mb-1">{stat.value}</div>
              <div className="text-sm text-accent-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent-primary/70 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-2.5 bg-accent-primary rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
