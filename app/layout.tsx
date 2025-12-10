import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import LanguageProviderWrapper from '@/components/LanguageProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Ludmila Iavarone Luiz',
  description: 'Junior Developer focused on creating cross-platform applications and innovative solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProviderWrapper>
          <Navbar />
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  )
}

