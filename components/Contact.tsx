'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  { icon: Mail, href: 'mailto:ludmilaa.iavarone@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ludmila-iavarone-luiz', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/ludmilaIa', label: 'GitHub' },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all backdrop-blur-sm shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-primary-100"
        >
          <p>© {new Date().getFullYear()} Ludmila Iavarone Luiz. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

