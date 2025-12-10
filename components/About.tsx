'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-accent-50/30 to-secondary-50/30"
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
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed space-y-4"
          >
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

