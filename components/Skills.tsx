'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Flutter/Dart', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Django', level: 75 },
  { name: 'Laravel PHP', level: 70 },
  { name: 'Java', level: 70 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'SQL', level: 80 },
  { name: 'Ionic', level: 75 },
  { name: 'REST APIs', level: 85 },
  { name: 'Docker', level: 70 },
]

'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const skills = [
  { name: 'Flutter/Dart', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Django', level: 75 },
  { name: 'Laravel PHP', level: 70 },
  { name: 'Java', level: 70 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'SQL', level: 80 },
  { name: 'Ionic', level: 75 },
  { name: 'REST APIs', level: 85 },
  { name: 'Docker', level: 70 },
]

export default function Skills() {
  const { t } = useLanguage()

  const getGradientColor = (index: number) => {
    const colors = [
      'from-primary-500 to-primary-600',
      'from-accent-500 to-accent-600',
      'from-secondary-500 to-secondary-600',
    ]
    return colors[index % 3]
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-white via-primary-50/50 to-accent-50/50"
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
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`bg-gradient-to-r ${getGradientColor(index)} h-3 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

