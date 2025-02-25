'use client'

import React from 'react'
import { User, FileText, Award, Briefcase, Book, Phone } from 'lucide-react'

const navItems = [
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'resume', icon: FileText, label: 'Resume' },
  { id: 'certificates', icon: Award, label: 'Certificates' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'hhep', icon: Book, label: '7 HHEP' },
  { id: 'contact', icon: Phone, label: 'Contact' },
]

export default function Navigation({ activeSection, setActiveSection, isScrolled }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-opacity-90 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white scale-110 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-600'
                }`}
              >
                <item.icon className="w-6 h-6 transform transition-all duration-300" />
                <span className="hidden md:inline font-semibold text-lg">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
