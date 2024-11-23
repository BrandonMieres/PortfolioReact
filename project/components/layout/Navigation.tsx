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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : ''}`}>
      <div className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-pink-600 text-white scale-110'
                    : 'text-gray-300 hover:text-white hover:bg-purple-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}