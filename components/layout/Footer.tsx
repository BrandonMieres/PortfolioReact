'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2023 Brandon Mieres. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}