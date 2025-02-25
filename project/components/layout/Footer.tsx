'use client'

import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-lg py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 mb-4 md:mb-0 text-center md:text-left text-sm md:text-base">
          © 2023 Brandon Mieres. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:translate-y-[-4px] shadow-lg rounded-full p-2 hover:bg-white/10"
            aria-label="Github"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:translate-y-[-4px] shadow-lg rounded-full p-2 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:translate-y-[-4px] shadow-lg rounded-full p-2 hover:bg-white/10"
            aria-label="Mail"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  )
}
