'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Blog', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism border-b border-dark-border' : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-semibold text-gradient-accent cursor-pointer"
        >
          Kaarthik SK
        </motion.div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="text-accent-secondary hover:text-light-primary transition-colors duration-300 relative group font-medium"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
