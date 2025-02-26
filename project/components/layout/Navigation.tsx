'use client'

import React, { useState } from 'react'
import { User, FileText, Award, Briefcase, Book, Phone, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'certificates', icon: Award, label: 'Certificates' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'hhep', icon: Book, label: '7 HHEP' },
  { id: 'contact', icon: Phone, label: 'Contact' },
]

export default function Navigation({ activeSection, setActiveSection, isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Botón de hamburguesa para móviles */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
      </button>

      {/* Sidebar con efecto de cristal para móviles */}
      <div
        className={`fixed top-0 left-0 h-full w-64 glass transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setIsMobileMenuOpen(false) // Cierra el menú al seleccionar una opción
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white scale-110 shadow-lg'
                  : 'text-gray-300 hover:text-cyan-400 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-600'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fondo oscurecido cuando la sidebar está abierta en móviles */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Navegación principal para pantallas grandes sin efecto de cristal */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          <ul className="hidden md:flex md:justify-center md:space-x-8 md:items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white scale-110 shadow-lg'
                      : 'text-gray-300 hover:text-cyan-400 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-600'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-semibold text-lg">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
