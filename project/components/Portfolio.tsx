'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
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
      {/* Fuentes modernas */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Fondo topográfico dinámico */}
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
              className="typing text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Brandon Mieres
            </motion.h1>
            <motion.p
              className="typing text-xl text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              Higher Technician in Computer Network Systems Management
            </motion.p>
          </header>

          <AnimatePresence mode="wait">
            {activeSection === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {activeSection === 'resume' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {activeSection === 'certificates' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Certificates />
              </motion.div>
            )}
            {activeSection === 'projects' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {activeSection === 'hhep' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <HHEP />
              </motion.div>
            )}
            {activeSection === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>

      {/* Estilos globales */}
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Exo', sans-serif;
        }

        .bg-topographic {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -2;
          overflow: hidden;
        }

        .bg-topographic::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url('/bg-topographic.svg');
          background-repeat: repeat;
          background-size: 50%;
          animation: moveBackground 60s ease-in-out infinite alternate;
          z-index: -1;
        }

        @keyframes moveBackground {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-5%, -5%);
          }
        }

        /* Animación de escritura */
        .typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(20, end) forwards;
        }

        .typing::after {
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: 2px;
          height: 1em;
          background-color: #00ff9d;
          animation: blink 0.7s infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
