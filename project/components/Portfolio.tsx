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
  const [currentCertificate, setCurrentCertificate] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePrevCertificate = () => {
    setCurrentCertificate((prev) => (prev === 0 ? 3 : prev - 1))
  }

  const handleNextCertificate = () => {
    setCurrentCertificate((prev) => (prev === 3 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-900 text-white font-sans">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrolled={isScrolled}
      />

      <main className="container mx-auto px-6 pt-24 pb-12">
        <header className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
          >
            Brandon Mieres
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Higher Technician in Computer Network Systems Management
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {activeSection === 'about' && <About />}
          {activeSection === 'resume' && <Resume />}
            {activeSection === 'certificates' && (
            <Certificates
              currentCertificate={currentCertificate}
              onPrev={handlePrevCertificate}
              onNext={handleNextCertificate}
            />
            )}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'hhep' && <HHEP />}
          {activeSection === 'contact' && <Contact />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}