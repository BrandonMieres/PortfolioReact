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
    <>
      {/* Fondo topográfico separado */}
      <div className="bg-topographic"></div>

      {/* Capa de oscurecimiento */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-[-1]"></div>

      {/* Contenido principal */}
      <div className="relative min-h-screen">
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
      </div>

<style jsx global>{`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .bg-topographic {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    overflow: hidden; /* Evita que el contenido del pseudo-elemento se desborde */
  }

  .bg-topographic::before {
    content: '';
    position: absolute;
    top: -50%; /* Extendemos en todas direcciones */
    left: -50%;
    width: 200%; /* Duplicamos el tamaño para asegurar cobertura */
    height: 200%;
    background-image: url('/bg-topographic.svg');
    background-repeat: repeat; /* Hacer que la imagen se repita */
    background-size: 50%; /* Ajustamos el tamaño para que se vea bien al repetirse */
    animation: moveBackground 30s ease-in-out infinite alternate;
    z-index: -1;
  }

  @keyframes moveBackground {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-15%, -15%); /* Movimiento menos pronunciado para evitar espacios vacíos */
    }
  }
`}</style>
    </>
  )
}
