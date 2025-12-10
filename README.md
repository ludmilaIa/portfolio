# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern, colorful UI design
- 🌍 Multilingual support (ES/EN) with language switcher
- 📄 CV download button in PDF format
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 💼 Sections: Hero, About, Skills, Languages, Experience, Education, Projects, Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description text

2. **About Section** (`components/About.tsx`):
   - Replace the placeholder text with your own story

3. **Skills Section** (`components/Skills.tsx`):
   - Update the `skills` array with your own skills and proficiency levels

4. **Projects Section** (`components/Projects.tsx`):
   - Replace the `projects` array with your actual projects
   - Update GitHub and demo links

5. **Contact Section** (`components/Contact.tsx`):
   - Update social media links in the `socialLinks` array
   - Change email address

6. **CV Download**:
   - Add your CV PDF file to the `public` folder as `cv.pdf`
   - The download button will automatically link to it

7. **Languages**:
   - All translations are in `contexts/LanguageContext.tsx`
   - Add or modify translations in the `translations` object

8. **Metadata** (`app/layout.tsx`):
   - Update the title and description in the metadata object

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

MIT

