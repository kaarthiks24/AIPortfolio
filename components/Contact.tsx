'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { once: false, amount: 0.2 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitStatus('success')

    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: 'https://github.com/kaarthiks24', color: '#0A84FF' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/kaarthik-senthil-kumar/', color: '#5AC8FA' },
    { name: 'Email', icon: '✉️', url: 'mailto:kaarthiks24@gmail.com', color: '#34C759' },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div ref={contactRef} className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(10, 132, 255, 0.3)' }}
            className="glass-morphism rounded-2xl p-8 border-subtle"
          >
            <h3 className="text-2xl font-semibold mb-6 text-light-primary">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-accent-secondary">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-primary text-light-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-accent-secondary">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-primary text-light-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-accent-secondary">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-primary text-light-primary resize-none transition-colors"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-accent-primary rounded-xl text-white font-medium hover:bg-accent-primary/90 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Connect Section */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(90, 200, 250, 0.3)' }}
              className="glass-morphism rounded-2xl p-8 border-subtle"
            >
              <h3 className="text-2xl font-semibold mb-6 text-light-primary">
                Connect with Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      boxShadow: `0 10px 30px ${link.color}40`
                    }}
                    className="flex items-center gap-4 p-4 bg-dark-elevated rounded-xl transition-all hover:shadow-card border-2 border-dark-border hover:border-[${link.color}] group"
                  >
                    <div className="text-3xl">{link.icon}</div>
                    <div className="flex-1">
                      <div
                        className="font-medium"
                        style={{ color: link.color }}
                      >
                        {link.name}
                      </div>
                      <div className="text-accent-secondary text-sm">
                        {link.name === 'Email' ? 'kaarthiks24@gmail.com' : `@kaarthiks24`}
                      </div>
                    </div>
                    <div className="text-accent-secondary group-hover:text-accent-primary transition-colors">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(52, 199, 89, 0.3)' }}
              className="glass-morphism rounded-2xl p-8 border-subtle"
            >
              <h3 className="text-xl font-semibold mb-4 text-light-primary">
                📍 Location & Availability
              </h3>
              <div className="space-y-3 text-accent-secondary">
                <p className="flex items-center gap-2">
                  <span>🌍</span> Charlotte, North Carolina
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span> kaarthiks24@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> +1 (609)-288-2889
                </p>
                <p className="flex items-center gap-2">
                  <span>💼</span> Open to: Full-time, Contract, Remote
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(255, 149, 0, 0.3)' }}
              className="glass-morphism rounded-2xl p-8 border-subtle"
            >
              <h3 className="text-xl font-semibold mb-4 text-light-primary">
                ⚡ Quick Facts
              </h3>
              <div className="space-y-3 text-accent-secondary text-sm">
                <p>🎓 MS in Computer Science - Stevens Institute (3.94 GPA)</p>
                <p>💼 AI/ML Engineer at Synechron Inc</p>
                <p>🏆 Microsoft Certified: Azure AI-900</p>
                <p>📝 Published researcher (arXiv)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent mb-8" />
          <p className="text-accent-secondary text-sm mb-4">
            Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-gradient font-semibold text-lg">
            Kaarthik Senthil Kumar © 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
