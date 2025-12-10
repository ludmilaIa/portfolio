'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const education = [
  {
    institution: 'Digitech FP',
    location: 'Málaga, Spain',
    degree: 'Higher Technician in Cross-Platform Application Development',
    period: 'September 2023 - June 2025',
  },
  {
    institution: 'Educación IT',
    location: 'Buenos Aires, Argentina',
    degree: 'Higher Technician in Computer Systems Analysis',
    period: 'August 2021 - June 2022',
  },
]

const certificates = [
  {
    platform: 'Udemy',
    course: 'Curso completo de React',
  },
  {
    platform: 'Coursera',
    course: 'Certificado Google Cybersecurity Professional',
  },
]

export default function Education() {
  const { t } = useLanguage()

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-secondary-50/50 via-white to-accent-50/50"
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
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-6 text-center">
              {t('education.education')}
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${index === 0 ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} rounded-lg shadow-md`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className={`text-lg font-semibold mb-1 bg-gradient-to-r ${index === 0 ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} bg-clip-text text-transparent`}>
                        {edu.institution}
                      </p>
                      <p className="text-gray-600">
                        {edu.location} • {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 text-center">
              {t('education.certificates')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={`${cert.platform}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border ${index === 0 ? 'border-primary-100' : 'border-accent-100'}`}
                >
                  <p className="font-bold text-gray-900 mb-2">{cert.platform}</p>
                  <p className="text-gray-700">{cert.course}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

