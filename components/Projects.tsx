'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    title: 'Alphabet Challenge',
    description:
      'A Flutter mobile game where players complete alphabet challenges. Uses Isar for local persistence of game statistics and progress.',
    tech: ['Flutter', 'Dart', 'Isar', 'Mobile Development'],
    github: 'https://github.com/ludmilaIa/alphabet_challenge',
    demo: '#',
  },
  {
    title: 'My Calendar',
    description:
      'A Flutter-based calendar application for managing events and schedules. Built with cross-platform mobile development best practices.',
    tech: ['Flutter', 'Dart', 'Mobile Development'],
    github: 'https://github.com/ludmilaIa/my-calendar',
    demo: '#',
  },
  {
    title: 'Laravel Filament',
    description:
      'A Laravel application built with Filament admin panel framework. Features modern admin interface and efficient backend management.',
    tech: ['Laravel', 'PHP', 'Filament', 'MySQL'],
    github: 'https://github.com/ludmilaIa/laravel-filament',
    demo: '#',
  },
  {
    title: 'Encomiendas Centro',
    description:
      'Logistics management system for package and shipment tracking. Full-stack application with comprehensive logistics features.',
    tech: ['React', 'React Router', 'Redux', 'Axios'],
    github: 'https://github.com/ludmilaIa/encomiendas_centro',
    demo: '#',
  },
  {
    title: 'Twisted Wonderland',
    description:
      'A static multi-page site built with vanilla web technologies. Organized sections, custom styling, and lightweight client-side behavior.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ludmilaIa/twisted-wonderland',
    demo: '#',
  },
  {
    title: 'BooksTracker',
    description:
      'A Vue 3 application for tracking books and reading progress. Built with Vite for fast development and a modern single-page app experience.',
    tech: ['Vue.js', 'Vite', 'JavaScript'],
    github: 'https://github.com/ludmilaIa/BooksTracker',
    demo: '#',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-primary-400 via-primary-500 to-primary-600',
      'from-accent-400 via-accent-500 to-accent-600',
      'from-secondary-400 via-secondary-500 to-secondary-600',
    ]
    return gradients[index % 3]
  }

  const getTagColor = (index: number) => {
    const colors = [
      'bg-primary-100 text-primary-700',
      'bg-accent-100 text-accent-700',
      'bg-secondary-100 text-secondary-700',
    ]
    return colors[index % 3]
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-br ${getGradientColor(index)}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 ${getTagColor(techIndex)} rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    {t('projects.viewCode')}
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

