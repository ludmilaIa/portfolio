'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | string[]
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
      certificatesList: {
        udemy: {
          platform: 'Udemy',
          course: 'Curso completo de React',
        },
        coursera: {
          platform: 'Coursera',
          course: 'Certificado Google Cybersecurity Professional',
        },
      },
    },
    projects: {
      title: 'Proyectos',
      viewCode: 'Ver Código',
      demo: 'Demo',
      features: 'Características',
      myCalendar: {
        description: 'Aplicación de calendario desarrollada con Flutter para gestionar eventos y horarios. Construida siguiendo las mejores prácticas de desarrollo móvil multiplataforma.',
        features: ['Gestión de eventos', 'Interfaz intuitiva', 'Sincronización multiplataforma', 'Notificaciones'],
      },
      laravelFilament: {
        description: 'Aplicación Laravel construida con el framework de panel de administración Filament. Cuenta con una interfaz de administración moderna y gestión eficiente del backend.',
        features: ['Panel de administración', 'Gestión de datos', 'Interfaz moderna', 'Backend eficiente'],
      },
      encomiendas: {
        description: 'Sistema de gestión logística para seguimiento de paquetes y envíos. Aplicación full-stack con características logísticas completas.',
        features: ['Seguimiento de envíos', 'Gestión de paquetes', 'Dashboard interactivo', 'Integración de APIs'],
      },
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
      certificatesList: {
        udemy: {
          platform: 'Udemy',
          course: 'Complete React Course',
        },
        coursera: {
          platform: 'Coursera',
          course: 'Google Cybersecurity Professional Certificate',
        },
      },
    },
    projects: {
      title: 'Projects',
      viewCode: 'View Code',
      demo: 'Demo',
      features: 'Features',
      myCalendar: {
        description: 'A Flutter-based calendar application for managing events and schedules. Built with cross-platform mobile development best practices, featuring an intuitive interface and seamless synchronization.',
        features: ['Event Management', 'Intuitive Interface', 'Cross-platform Sync', 'Notifications'],
      },
      laravelFilament: {
        description: 'A Laravel application built with Filament admin panel framework. Features a modern admin interface and efficient backend management with comprehensive data handling capabilities.',
        features: ['Admin Panel', 'Data Management', 'Modern Interface', 'Efficient Backend'],
      },
      encomiendas: {
        description: 'Logistics management system for package and shipment tracking. Full-stack application with comprehensive logistics features including real-time tracking and interactive dashboards.',
        features: ['Shipment Tracking', 'Package Management', 'Interactive Dashboard', 'API Integration'],
      },
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

  const t = (key: string): string | string[] => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    // If value is an array, return it as is (for features)
    if (Array.isArray(value)) {
      return value
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

