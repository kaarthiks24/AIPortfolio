'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY} = useScroll()

  // Smooth spring-based scroll progress for Apple-like feel
  const scrollProgress = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Active section tracking
      const sections = ['home', 'about', 'projects', 'blog', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Blog', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-morphism border-b border-dark-border' : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with subtle interaction */}
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
          className="text-2xl font-semibold text-gradient-accent cursor-pointer"
        >
          Kaarthik SK
        </motion.div>

        {/* Nav items with improved micro-interactions */}
        <div className="flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{
                scale: 0.95,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }
              }}
              className={`relative group font-medium transition-colors duration-300 ${
                activeSection === item.toLowerCase()
                  ? 'text-accent-primary'
                  : 'text-accent-secondary hover:text-light-primary'
              }`}
            >
              {item}

              {/* Active indicator with smooth animation */}
              {activeSection === item.toLowerCase() && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}

              {/* Hover underline with spring physics */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-accent-primary/50"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll progress indicator - Nothing Phone style */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent"
          style={{
            scaleX: useTransform(scrollProgress, [0, document.body.scrollHeight - window.innerHeight], [0, 1]),
            transformOrigin: "left"
          }}
        />
      )}
    </motion.nav>
  )
}

export default Navigation
