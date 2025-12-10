'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const experiences = [
  {
    title: 'Mobile Application Developer',
    company: 'PlayerUp',
    location: 'Oakland, USA',
    period: 'September 2024 - July 2025',
    responsibilities: [
      'Integration of REST APIs to enable communication between the frontend and external services',
      'Development of new screens and reusable components, prioritizing user experience',
      'Continuous testing and maintenance of existing features to ensure stability and performance',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Wanderar',
    location: 'Málaga, Spain',
    period: 'November 2023 - July 2024',
    responsibilities: [
      'Integration of REST APIs to enable communication between the frontend and external services',
      'Development of new screens and reusable components, prioritizing user experience',
      'Continuous testing and maintenance of existing features to ensure stability and performance',
    ],
  },
  {
    title: 'Logistics Coordinator',
    company: 'Encomiendas Centro',
    location: 'Buenos Aires, Argentina',
    period: 'July 2021 - September 2023',
    responsibilities: [],
  },
]

const internships = [
  {
    title: 'Data Analyst',
    company: 'Accenture',
    location: 'Málaga, Spain',
    period: 'March 2025 - June 2025',
    responsibilities: [],
  },
]

export default function Experience() {
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
      id="experience"
      className="py-20 bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/30"
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
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${getGradientColor(index)}/10 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gradient-to-br ${getGradientColor(index)} rounded-lg shadow-md`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${getGradientColor(index)} bg-clip-text text-transparent`}>
                    {exp.company}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {exp.location} • {exp.period}
                  </p>
                  {exp.responsibilities.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {internships.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12 mb-8"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                  {t('experience.internships')}
                </h3>
              </motion.div>
              {internships.map((intern, index) => (
                <motion.div
                  key={`${intern.company}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-accent-50/50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg shadow-md">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {intern.title}
                      </h3>
                      <p className="text-lg font-semibold mb-1 bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                        {intern.company}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {intern.location} • {intern.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

