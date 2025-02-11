'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './layout/Navigation'
import About from './sections/About'
import Resume from './sections/Resume'
import Certificates from './sections/Certificates'
import Projects from './sections/Projects'
import HHEP from './sections/HHEP'
import Contact from './sections/Contact'
import Footer from './layout/Footer'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover bg-topographic">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrolled={isScrolled}
      />
      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
          >
            Brandon Mieres
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Higher Technician in Computer Network Systems Management
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {activeSection === 'about' && <About />}
          {activeSection === 'resume' && <Resume />}
          {activeSection === 'certificates' && <Certificates />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'hhep' && <HHEP />}
          {activeSection === 'contact' && <Contact />}
        </AnimatePresence>
      </main>

      <Footer />

      <style jsx>{`
        .bg-topographic {
          background-image: url('https://assets.codepen.io/319606/bg-topographic.svg');
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          animation: moveBackground 30s ease-in-out infinite alternate;
        }

        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -300px -300px;
          }
        }
      `}</style>
    </div>
  )
}
