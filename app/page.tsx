import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Languages from '@/components/Languages'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}

