'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const EchoBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. Ask me about Kaarthik's experience, projects, or skills!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const quickQuestions = [
    "Tell me about Synechron experience",
    "What GenAI projects have you built?",
    "What are your key skills?",
    "Tell me about your education"
  ]

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('synechron') || lowerMessage.includes('work') || lowerMessage.includes('experience')) {
      return "Kaarthik is currently an AI/ML Engineer at Synechron Inc (NYC) since June 2024. He built data quality frameworks with Isolation Forest and LLM models, and developed an LLM prompt library framework. Previously, he did 2 internships there focusing on RAG systems with Chroma-DB, PgVector, GAN models for OCR, and achieved 45% RAG accuracy improvement."
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('built')) {
      return "Key projects: 1) Real-time ASR Conversational-AI RAG System with WhisperX and ChromaDB, 2) RAG Chatbot for SEC filings analysis (80% PII accuracy), 3) GAN Models for OCR (33% efficiency boost), 4) Credit Card Fraud Detection (99% accuracy), 5) Facial Recognition SaaS on Firebase (92.3% accuracy)."
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
      return "Skills: Langchain, LLMs, AWS, RAG systems, Chroma-DB, PgVector, Neo4j, Python, SQL, React, Django, Docker, Git. Specialized in GANs, transformers, and prompt engineering. Microsoft Certified Azure AI-900 and Google Cloud GenAI fundamentals."
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('stevens')) {
      return "MS in Computer Science from Stevens Institute of Technology (GPA: 3.94/4.0, May 2024). Courses: Math Foundation of ML, Knowledge Discovery, Data Mining, Algorithms. BE in CSE from Rajalakshmi Engineering College (CGPA: 3.47/4, June 2022)."
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('reach')) {
      return "You can reach Kaarthik at: kaarthiks24@gmail.com | +1 (609)-288-2889 | Charlotte, NC. Connect on GitHub: kaarthiks24 or LinkedIn: kaarthik-senthil-kumar. Open to full-time, contract, and remote opportunities!"
    }

    if (lowerMessage.includes('rag') || lowerMessage.includes('llm') || lowerMessage.includes('genai')) {
      return "Kaarthik specializes in GenAI with extensive experience in RAG systems, LLMs (GPT, Llama, Falcon, WizardLM), vector databases (Chroma-DB, PgVector), and Langchain. He's built production RAG chatbots for financial analysis and improved RAG accuracy by 45% using advanced chunking strategies."
    }

    return "I can tell you about Kaarthik's experience at Synechron, his GenAI projects, technical skills, education, or how to contact him. What would you like to know?"
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 800))

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputValue),
      sender: 'bot',
      timestamp: new Date()
    }

    setIsTyping(false)
    setMessages(prev => [...prev, botResponse])
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent-primary flex items-center justify-center text-2xl shadow-subtle-glow"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-50 w-96 h-[600px] glass-morphism rounded-2xl shadow-card-hover flex flex-col overflow-hidden border-accent"
          >
            {/* Header */}
            <div className="p-4 border-b border-dark-border bg-dark-card">
              <div className="flex items-center gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-light-primary">AI Assistant</h3>
                  <p className="text-xs text-accent-secondary">Ask about Kaarthik</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-accent-primary text-white'
                        : 'bg-dark-elevated border border-dark-border text-accent-secondary'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-accent-secondary/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-dark-elevated border border-dark-border p-3 rounded-xl">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-accent-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-accent-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-accent-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-accent-secondary mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-dark-elevated hover:bg-dark-elevated/80 border border-dark-border rounded-lg text-accent-primary transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-dark-border bg-dark-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-primary text-light-primary text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-accent-primary rounded-xl text-white hover:bg-accent-primary/90 transition-all disabled:opacity-50"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EchoBot
