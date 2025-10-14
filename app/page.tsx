import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import EchoBot from '@/components/EchoBot'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <EchoBot />
    </main>
  )
}
