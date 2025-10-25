'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()

  // Parallax effect for nav background
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Update active section based on scroll position
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Blog', href: '#blog', icon: '📝' },
    { name: 'Contact', href: '#contact', icon: '💬' }
  ]

  return (
    <>
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          style={{ opacity: scrolled ? 1 : navOpacity }}
          className={`transition-all duration-500 ${
            scrolled ? 'glass-morphism-strong' : ''
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05, rotateZ: [0, -2, 2, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ boxShadow: '0 0 30px rgba(10, 132, 255, 0.6)' }}
                  >
                    K
                  </motion.div>
                  {/* Floating particles around logo */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-glow"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-xl font-semibold text-gradient-premium hidden md:block">
                  Kaarthik Senthil Kumar
                </span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 relative group ${
                      activeSection === item.name.toLowerCase()
                        ? 'glass-morphism-strong text-accent-primary border-accent-glow'
                        : 'text-accent-secondary hover:text-light-primary hover:glass-morphism'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{item.icon}</span>
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-accent-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        background: 'radial-gradient(circle, rgba(10, 132, 255, 0.15) 0%, transparent 70%)'
                      }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-3 rounded-xl glass-morphism"
              >
                <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom border glow */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent"
          />
        )}
      </motion.nav>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  )
}

export default Navigation
