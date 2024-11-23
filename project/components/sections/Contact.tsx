'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">Contact</h2>
        <p className="text-gray-300 mb-4">Have a question or proposal? Don't hesitate to reach out:</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="text-pink-400" />
            <a href="mailto:brandon@example.com" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">brandon@example.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="text-pink-400" />
            <a href="https://www.linkedin.com/in/brandonmieres" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">linkedin.com/in/brandonmieres</a>
          </div>
          <div className="flex items-center space-x-3">
            <Github className="text-pink-400" />
            <a href="https://github.com/brandonmieres" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">github.com/brandonmieres</a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}