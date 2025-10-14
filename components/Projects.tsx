'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  metrics: string
  category: 'genai' | 'ml' | 'fullstack'
  period: string
  demoAvailable: boolean
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 })

  const projects: Project[] = [
    {
      id: 'asr-rag',
      title: 'Real-time ASR Conversational-AI RAG System',
      description: 'End-to-end solution with WhisperX OpenAI for voice-to-text, speaker diarization, ChromaDB for storage/retrieval, and OpenAI GPT for RAG chatbot. Built with Gradio frontend for seamless transcript access.',
      tech: ['WhisperX', 'OpenAI GPT', 'ChromaDB', 'RAG', 'Gradio', 'Speaker Diarization'],
      metrics: 'Real-time voice processing with multi-speaker recognition',
      category: 'genai',
      period: 'Jan 2024 - Mar 2024',
      demoAvailable: true
    },
    {
      id: 'rag-risktech',
      title: 'RAG Chatbot for RiskTech Analysis',
      description: 'Engineered Retrieval Augmented Generation Langchain chatbot for analyzing SEC 10K and 10Q filings. Powered by Chroma-DB and WizardLM for financial document analysis.',
      tech: ['Langchain', 'Chroma-DB', 'WizardLM', 'RAG', 'SEC Filings'],
      metrics: '80% accuracy in PII obfuscation using Zero Knowledge Proof',
      category: 'genai',
      period: 'Oct 2023 - Dec 2023',
      demoAvailable: false
    },
    {
      id: 'gan-ocr',
      title: 'GAN Models for OCR Enhancement',
      description: 'Developed Real-ESRGAN and EDSR GAN models to significantly improve OCR accuracy. Researched multi-modal LLM approaches with GPT, Llama, and Falcon models.',
      tech: ['Real-ESRGAN', 'EDSR GAN', 'OCR', 'Computer Vision', 'LLMs'],
      metrics: '33% efficiency increase, 45% RAG accuracy boost',
      category: 'ml',
      period: 'Jun 2023 - Sep 2023',
      demoAvailable: false
    },
    {
      id: 'fraud-detection',
      title: 'Credit Card Fraud Detection System',
      description: 'ML-based system to detect fraudulent transactions using SMOTE for data balancing. Achieved exceptional accuracy through KNN with rigorous parameter fine-tuning.',
      tech: ['K-Nearest Neighbors', 'SMOTE', 'Scikit-learn', 'Python', 'Data Balancing'],
      metrics: '99% accuracy using K-Nearest Neighbors',
      category: 'ml',
      period: 'Jan 2023 - May 2023',
      demoAvailable: false
    },
    {
      id: 'facial-recognition',
      title: 'Real-time Facial Recognition Security System',
      description: 'Multi-layered facial recognition for identity authentication using CNN and Haar-Cascade. Transformed into Firebase-hosted SaaS for offline verification challenges.',
      tech: ['CNN', 'Haar-Cascade', 'Tkinter', 'Firebase', 'Computer Vision'],
      metrics: '92.3% accuracy, deployed as SaaS',
      category: 'fullstack',
      period: 'Feb 2022 - May 2022',
      demoAvailable: false
    },
    {
      id: 'data-quality',
      title: 'LLM-Powered Data Quality Framework',
      description: 'Built data quality framework monitoring data at rest and in motion. Implemented Isolation Forest and LLM models for validation optimization and automated anomaly detection.',
      tech: ['LLMs', 'Isolation Forest', 'Data Pipeline', 'Monitoring', 'Automation'],
      metrics: 'Enhanced data reliability and traceability across pipelines',
      category: 'genai',
      period: '2024',
      demoAvailable: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'genai', label: 'GenAI & RAG' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div ref={projectsRef} className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient"
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-accent-primary text-white shadow-subtle-glow'
                  : 'glass-morphism text-accent-secondary border-subtle hover:border-accent'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.05,
                y: -15,
                rotateX: 5,
                boxShadow: '0 30px 60px rgba(10, 132, 255, 0.4)'
              }}
              className="glass-morphism rounded-2xl p-6 cursor-pointer relative overflow-hidden group transition-all duration-300 border-2 border-transparent hover:border-accent-primary"
              onClick={() => setSelectedProject(project.id)}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Animated Glow Background */}
              <motion.div
                className="absolute inset-0 opacity-0"
                animate={{
                  opacity: hoveredProject === project.id ? 0.15 : 0
                }}
                style={{
                  background: 'radial-gradient(circle at center, #0A84FF, transparent 70%)'
                }}
              />
              {/* Demo Badge */}
              {project.demoAvailable && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-success/20 border border-accent-success rounded-full text-xs text-accent-success font-medium">
                  Live Demo
                </div>
              )}

              <div className="relative z-10">
                <span className="text-accent-secondary text-xs font-medium">{project.period}</span>
                <h3 className="text-xl font-semibold text-light-primary mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-accent-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-4 p-3 bg-dark-elevated rounded-xl border border-dark-border">
                  <p className="text-xs text-accent-primary">📊 {project.metrics}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-base rounded-lg text-xs text-accent-secondary border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-dark-base rounded-lg text-xs text-accent-secondary border border-dark-border">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 rounded-xl font-medium border-accent text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-morphism rounded-2xl p-8 max-w-2xl w-full border-accent-glow"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    <span className="text-accent-secondary text-sm font-medium">{project.period}</span>
                    <h3 className="text-3xl font-bold mb-4 mt-2 text-light-primary">
                      {project.title}
                    </h3>
                    <p className="text-accent-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="bg-dark-elevated p-6 rounded-xl mb-6 border border-dark-border">
                      <h4 className="text-accent-primary font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-dark-card rounded-lg text-sm text-light-primary border border-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-dark-elevated p-6 rounded-xl mb-6 border border-dark-border">
                      <h4 className="text-accent-success font-semibold mb-2">Key Achievements</h4>
                      <p className="text-accent-secondary text-sm">{project.metrics}</p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full px-6 py-3 rounded-xl bg-accent-primary text-white hover:bg-accent-primary/90 transition-all font-medium"
                    >
                      Close
                    </button>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
