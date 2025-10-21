'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  skills: string[]
}

interface SkillNode {
  id: string
  label: string
  category: 'ai' | 'cloud' | 'backend' | 'tools'
  color: string
  level: number // 1-5 proficiency level
}

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const skillsRef = useRef(null)
  const timelineRef = useRef(null)
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.3 })
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.2 })

  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'AI/ML Engineer',
      company: 'Synechron Inc, New York',
      description: 'Built data quality frameworks with Isolation Forest and LLM models. Developed an LLM prompt library framework to streamline generative AI use cases, improving operational efficiency and scalability.',
      skills: ['LLMs', 'Langchain', 'Data Quality', 'Prompt Engineering']
    },
    {
      year: '2023 Q4',
      title: 'Gen AI Internship',
      company: 'Synechron Inc, New York',
      description: 'Engineered RAG Langchain chatbot for RiskTech analysis of SEC filings powered by Chroma-DB and WizardLM. Leveraged PgVector and Pandas-AI for Zero Knowledge Proof with 80% accuracy.',
      skills: ['RAG', 'Chroma-DB', 'PgVector', 'WizardLM', 'Pandas-AI']
    },
    {
      year: '2023 Q2-Q3',
      title: 'Data Science / Gen AI Internship',
      company: 'Synechron Inc, New York',
      description: 'Developed GAN models (Real-ESRGAN, EDSR GAN) for OCR accuracy. Investigated LLMs (GPT, Llama, Falcon) with multi-modal approach increasing efficiency by 33%. Enhanced RAG accuracy by 45% using chunking strategies.',
      skills: ['GANs', 'OCR', 'LLM Research', 'Embeddings', 'bge-large']
    },
    {
      year: '2024',
      title: 'MS in Computer Science',
      company: 'Stevens Institute of Technology',
      description: 'GPA: 3.94/4.0 | Courses: Math Foundation of ML, Knowledge Discovery and Data Mining, Data Structures and Algorithms',
      skills: ['Machine Learning', 'Data Mining', 'Algorithms']
    },
    {
      year: '2021',
      title: 'Machine Learning Internship',
      company: 'Eamvey Technologies, India',
      description: 'Created sales prediction models using Linear regression and Perceptron, achieving 30% accuracy increase. Deployed on AWS SageMaker.',
      skills: ['Linear Regression', 'AWS SageMaker', 'Model Deployment']
    }
  ]

  const skills: SkillNode[] = [
    // AI/ML
    { id: 'langchain', label: 'Langchain', category: 'ai', color: '#0A84FF', level: 5 },
    { id: 'llm', label: 'LLMs', category: 'ai', color: '#0A84FF', level: 5 },
    { id: 'rag', label: 'RAG', category: 'ai', color: '#0A84FF', level: 5 },
    { id: 'gans', label: 'GANs', category: 'ai', color: '#0A84FF', level: 4 },
    { id: 'prompt-eng', label: 'Prompt Engineering', category: 'ai', color: '#0A84FF', level: 5 },
    { id: 'embeddings', label: 'Embeddings', category: 'ai', color: '#0A84FF', level: 4 },

    // Databases & Vector Stores
    { id: 'chromadb', label: 'Chroma-DB', category: 'backend', color: '#5AC8FA', level: 5 },
    { id: 'pgvector', label: 'PgVector', category: 'backend', color: '#5AC8FA', level: 4 },
    { id: 'neo4j', label: 'Neo4j', category: 'backend', color: '#5AC8FA', level: 4 },
    { id: 'postgres', label: 'PostgreSQL', category: 'backend', color: '#5AC8FA', level: 4 },
    { id: 'mongodb', label: 'MongoDB', category: 'backend', color: '#5AC8FA', level: 3 },

    // Cloud & Tools
    { id: 'aws', label: 'AWS', category: 'cloud', color: '#34C759', level: 4 },
    { id: 'sagemaker', label: 'SageMaker', category: 'cloud', color: '#34C759', level: 4 },
    { id: 'firebase', label: 'Firebase', category: 'cloud', color: '#34C759', level: 3 },
    { id: 'docker', label: 'Docker', category: 'tools', color: '#FF9500', level: 4 },
    { id: 'git', label: 'Git', category: 'tools', color: '#FF9500', level: 5 },
    { id: 'jupyter', label: 'Jupyter', category: 'tools', color: '#FF9500', level: 5 },

    // Programming
    { id: 'python', label: 'Python', category: 'backend', color: '#5AC8FA', level: 5 },
    { id: 'sql', label: 'SQL', category: 'backend', color: '#5AC8FA', level: 4 },
    { id: 'react', label: 'React', category: 'backend', color: '#5AC8FA', level: 4 },
    { id: 'typescript', label: 'TypeScript', category: 'backend', color: '#5AC8FA', level: 4 },
  ]

  const categoryInfo: Record<string, { title: string; description: string }> = {
    ai: {
      title: 'AI & Machine Learning',
      description: 'Expertise in LLMs, RAG systems, GANs, and prompt engineering for enterprise GenAI applications'
    },
    cloud: {
      title: 'Cloud Platforms',
      description: 'AWS deployment, Firebase hosting, and cloud-native ML model serving'
    },
    backend: {
      title: 'Backend & Databases',
      description: 'Vector databases (Chroma-DB, PgVector), graph databases (Neo4j), and traditional SQL/NoSQL'
    },
    tools: {
      title: 'DevOps & Tools',
      description: 'Docker containerization, Git version control, and ML pipeline orchestration'
    }
  }

  // Group skills by category
  const skillsByCategory = {
    ai: skills.filter(s => s.category === 'ai'),
    cloud: skills.filter(s => s.category === 'cloud'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
  }

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-gradient"
        >
          About Me
        </motion.h2>

        {/* Timeline */}
        <div ref={timelineRef} className="mb-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-12 text-light-primary"
          >
            Experience & Education
          </motion.h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative pl-12 border-l-2 border-accent-primary"
              >
                <motion.div
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-primary"
                  initial={{ scale: 0, boxShadow: '0 0 0px rgba(10, 132, 255, 0.5)' }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(10, 132, 255, 0.5)',
                      '0 0 20px rgba(10, 132, 255, 0.8)',
                      '0 0 0px rgba(10, 132, 255, 0.5)',
                    ],
                  }}
                  style={{
                    transition: 'box-shadow 2s ease-in-out infinite'
                  }}
                />
                <motion.div
                  className="glass-morphism p-6 rounded-2xl hover:shadow-card-hover transition-all duration-300 border-subtle"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: '0 20px 40px rgba(10, 132, 255, 0.3)'
                  }}
                >
                  <span className="text-accent-primary font-semibold text-sm">{item.year}</span>
                  <h4 className="text-xl font-semibold text-light-primary mt-2">{item.title}</h4>
                  <p className="text-accent-secondary mb-3">{item.company}</p>
                  <p className="text-accent-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-dark-elevated rounded-full text-xs text-accent-primary border border-accent"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills - Compact Interactive Pills */}
        <div ref={skillsRef}>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isSkillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8 text-light-primary"
          >
            Technical Skills
          </motion.h3>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['all', 'ai', 'backend', 'cloud', 'tools'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/50'
                    : 'glass-morphism text-accent-secondary hover:text-light-primary border border-accent/30'
                }`}
              >
                {category === 'all' ? 'All Skills' : categoryInfo[category as keyof typeof categoryInfo]?.title.split(' &')[0] || category}
              </motion.button>
            ))}
          </motion.div>

          {/* Compact Skills Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {skills
              .filter((skill) => activeCategory === 'all' || skill.category === activeCategory)
              .map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 10px 30px ${skill.color}60`
                  }}
                  onHoverStart={() => setHoveredSkill(skill.id)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
                  className="relative cursor-pointer group"
                >
                  {/* Skill Pill */}
                  <div
                    className="px-5 py-2.5 rounded-full glass-morphism border-2 transition-all duration-300 flex items-center gap-2"
                    style={{
                      borderColor: hoveredSkill === skill.id || selectedSkill === skill.id ? skill.color : `${skill.color}40`,
                      backgroundColor: selectedSkill === skill.id ? `${skill.color}20` : undefined
                    }}
                  >
                    {/* Proficiency Indicator Dot */}
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      animate={{
                        scale: hoveredSkill === skill.id ? [1, 1.4, 1] : 1,
                        boxShadow: hoveredSkill === skill.id
                          ? [`0 0 0px ${skill.color}`, `0 0 12px ${skill.color}`, `0 0 0px ${skill.color}`]
                          : `0 0 0px ${skill.color}`
                      }}
                      transition={{ duration: 0.8, repeat: hoveredSkill === skill.id ? Infinity : 0 }}
                    />

                    {/* Skill Name */}
                    <span
                      className="font-medium text-sm transition-colors duration-300"
                      style={{
                        color: hoveredSkill === skill.id || selectedSkill === skill.id ? skill.color : '#FFFFFF',
                        fontSize: `${0.75 + skill.level * 0.05}rem` // Slightly larger for higher proficiency
                      }}
                    >
                      {skill.label}
                    </span>

                    {/* Proficiency Level Stars (visible on hover) */}
                    <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                      {[...Array(skill.level)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredSkill === skill.id ? 1 : 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredSkill === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-dark-card rounded-lg shadow-xl border z-50 whitespace-nowrap"
                      style={{ borderColor: skill.color }}
                    >
                      <div className="text-xs text-accent-secondary mb-1">Proficiency</div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 bg-dark-elevated rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${skill.level * 20}%`,
                              backgroundColor: skill.color,
                              boxShadow: `0 0 8px ${skill.color}`
                            }}
                          />
                        </div>
                        <span className="text-xs font-semibold" style={{ color: skill.color }}>
                          {skill.level * 20}%
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </motion.div>

          {/* Category Legend (Optional - shown when All is selected) */}
          {activeCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 text-xs text-accent-secondary"
            >
              {Object.entries(categoryInfo).map(([category, info]) => {
                const color = skills.find(s => s.category === category)?.color || '#0A84FF'
                return (
                  <div key={category} className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{info.title}</span>
                  </div>
                )
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
