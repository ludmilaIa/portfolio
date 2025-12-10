'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const languages = [
  { nameKey: 'spanish', levelKey: 'native' },
  { nameKey: 'english', levelKey: 'intermediate' },
]

export default function Languages() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-gradient-to-br from-secondary-50/50 via-white to-accent-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
            {t('languages.title')}
          </h2>
        </motion.div>
        <div className="flex justify-center gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                index === 0
                  ? 'bg-gradient-to-r from-primary-100 to-primary-50'
                  : 'bg-gradient-to-r from-accent-100 to-accent-50'
              }`}
            >
              <Globe className={`w-6 h-6 ${index === 0 ? 'text-primary-600' : 'text-accent-600'}`} />
              <div>
                <p className="font-semibold text-gray-900">{t(`languages.${lang.nameKey}`)}</p>
                <p className="text-sm text-gray-600 uppercase">{t(`languages.${lang.levelKey}`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

