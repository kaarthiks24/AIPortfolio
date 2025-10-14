import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaarthik Senthil Kumar | AI/ML Engineer',
  description: 'AI/ML Engineer specializing in LLMs, RAG systems, and enterprise GenAI solutions. Currently at Synechron Inc, building intelligent systems with measurable impact.',
  keywords: 'Kaarthik Senthil Kumar, AI Engineer, ML Engineer, GenAI, LLM, RAG, Langchain, Python, AWS, Machine Learning, Synechron',
  authors: [{ name: 'Kaarthik Senthil Kumar' }],
  openGraph: {
    title: 'Kaarthik Senthil Kumar | AI/ML Engineer',
    description: 'Building the future with GenAI - Specializing in LLMs, RAG systems, and enterprise AI solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
