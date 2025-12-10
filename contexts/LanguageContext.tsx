'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      education: 'Educación',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrolladora Junior enfocada en crear aplicaciones multiplataforma y soluciones innovadoras',
      viewWork: 'Ver Mi Trabajo',
      getInTouch: 'Contáctame',
    },
    about: {
      title: 'Sobre Mí',
      description1: 'Desarrolladora apasionada enfocada en crear aplicaciones multiplataforma y soluciones innovadoras. Disfruto enfrentando desafíos y resolviendo problemas complejos. Soy detallista, paciente y tengo excelentes habilidades de trabajo en equipo.',
      description2: 'Actualmente continúo aprendiendo de forma independiente para mantenerme actualizada y seguir creciendo como profesional. Con experiencia en desarrollo móvil, integración de APIs y tecnologías full-stack, doy vida a las ideas a través de código limpio y diseño cuidadoso.',
    },
    skills: {
      title: 'Habilidades',
    },
    languages: {
      title: 'Idiomas',
      spanish: 'Español',
      english: 'Inglés',
      native: 'Nativo',
      intermediate: 'Intermedio',
    },
    experience: {
      title: 'Experiencia',
      internships: 'Prácticas',
    },
    education: {
      title: 'Educación y Certificados',
      education: 'Educación',
      certificates: 'Cursos y Certificados',
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Ver Código',
      demo: 'Demo',
    },
    contact: {
      title: 'Contáctame',
      description: 'Siempre estoy abierta a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    },
    cv: {
      download: 'Descargar CV en PDF',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Junior Developer focused on creating cross-platform applications and innovative solutions',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      description1: 'Passionate developer focused on creating cross-platform applications and innovative solutions. I enjoy taking on challenges and solving complex problems. I am detail-oriented, patient, and have excellent teamwork skills.',
      description2: 'I am currently continuing to learn independently to stay up to date and keep growing as a professional. With experience in mobile development, API integration, and full-stack technologies, I bring ideas to life through clean code and thoughtful design.',
    },
    skills: {
      title: 'Skills',
    },
    languages: {
      title: 'Languages',
      spanish: 'Spanish',
      english: 'English',
      native: 'Native',
      intermediate: 'Intermediate',
    },
    experience: {
      title: 'Experience',
      internships: 'Internships',
    },
    education: {
      title: 'Education & Certificates',
      education: 'Education',
      certificates: 'Courses & Certificates',
    },
    projects: {
      title: 'Projects',
      viewCode: 'View Code',
      demo: 'Demo',
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    },
    cv: {
      download: 'Download CV in PDF format',
    },
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

