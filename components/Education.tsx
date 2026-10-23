'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
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

const certificateKeys = ['udemyBigData', 'udemy', 'coursera']

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
              {certificateKeys.map((certKey, index) => {
                const platform = t(`education.certificatesList.${certKey}.platform`)
                const course = t(`education.certificatesList.${certKey}.course`)
                const gradients = [
                  'from-primary-500 via-primary-400 to-primary-600',
                  'from-accent-500 via-accent-400 to-accent-600',
                  'from-secondary-500 via-secondary-400 to-secondary-600',
                ]
                const iconColors = [
                  'from-primary-500 to-primary-600',
                  'from-accent-500 to-accent-600',
                  'from-secondary-500 to-secondary-600',
                ]
                const gradient = gradients[index % gradients.length]
                const iconColor = iconColors[index % iconColors.length]
                const badgeColors = [
                  'bg-primary-100 text-primary-700',
                  'bg-accent-100 text-accent-700',
                  'bg-secondary-100 text-secondary-700',
                ]
                const badgeColor = badgeColors[index % badgeColors.length]
                
                return (
                  <motion.div
                    key={certKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${iconColor} rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className={`font-bold text-lg bg-gradient-to-r ${iconColor} bg-clip-text text-transparent`}>
                              {platform}
                            </p>
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${badgeColor}`}>
                              Verified
                            </span>
                          </div>
                          <p className="text-gray-800 font-medium leading-relaxed">
                            {course}
                          </p>
                        </div>
                      </div>
                      
                      {/* Decorative line */}
                      <div className={`h-1 bg-gradient-to-r ${gradient} rounded-full mb-4`}></div>
                      
                      {/* Footer with icon */}
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Award className="w-4 h-4" />
                          <span>Certificate</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

