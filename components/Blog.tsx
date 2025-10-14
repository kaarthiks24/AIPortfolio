'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  color: string
}

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Agentic AI for Businesses',
      excerpt: 'A deep dive into creating intelligent AI agents that can handle complex business workflows using RAG and LLMs...',
      date: 'Oct 2024',
      readTime: '8 min read',
      category: 'GenAI',
      color: '#00FFFF'
    },
    {
      id: '2',
      title: 'Cloud GenAI Interview Questions',
      excerpt: 'Comprehensive guide to preparing for GenAI engineering interviews, covering LLMs, vector databases, and cloud deployments...',
      date: 'Sep 2024',
      readTime: '12 min read',
      category: 'Career',
      color: '#FF00FF'
    },
    {
      id: '3',
      title: 'Optimizing RAG Systems for Production',
      excerpt: 'Best practices for deploying retrieval-augmented generation systems at scale with performance benchmarks...',
      date: 'Aug 2024',
      readTime: '10 min read',
      category: 'GenAI',
      color: '#00FFFF'
    },
    {
      id: '4',
      title: 'Multi-Cloud ML Deployment Strategies',
      excerpt: 'How to architect ML pipelines that work seamlessly across Azure, AWS, and GCP with cost optimization...',
      date: 'Jul 2024',
      readTime: '15 min read',
      category: 'Cloud',
      color: '#39FF14'
    }
  ]

  return (
    <section id="blog" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-gradient"
        >
          Insights & Articles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
              className="glass-morphism rounded-lg p-6 cursor-pointer group relative overflow-hidden"
              style={{
                border: `1px solid ${post.color}20`,
              }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPost === post.id ? 0.1 : 0 }}
                style={{ backgroundColor: post.color }}
              />

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: `${post.color}20`,
                      color: post.color,
                      border: `1px solid ${post.color}`,
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-3 group-hover:neon-text-cyan transition-all"
                  style={{ color: post.color }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    ⏱ {post.readTime}
                  </span>
                  <motion.span
                    className="text-sm font-semibold"
                    style={{ color: post.color }}
                    animate={{ x: hoveredPost === post.id ? 5 : 0 }}
                  >
                    Read more →
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* AI-Powered Comment System Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-morphism neon-border-magenta rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4 neon-text-magenta">
            💬 AI-Powered Discussions
          </h3>
          <p className="text-gray-300 mb-4">
            Each blog post features an intelligent comment system powered by GenAI.
            Ask questions about the content, and get instant AI-generated answers
            based on the article context!
          </p>
          <div className="bg-dark-elevated rounded-lg p-4">
            <p className="text-sm text-neon-cyan mb-2">
              Example: &quot;How does RAG compare to fine-tuning for domain-specific tasks?&quot;
            </p>
            <p className="text-sm text-gray-400">
              AI Response: Based on the article, RAG offers better flexibility for
              frequently updating knowledge while fine-tuning excels at task-specific
              performance...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
