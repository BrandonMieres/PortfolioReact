'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <motion.section
      key="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative px-4 py-6 md:px-8 md:py-8"
    >
      {/* Decorative Futuristic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-pink-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-1 h-1 md:w-2 md:h-2 bg-purple-400 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-10 md:h-20 bg-gradient-to-b from-purple-500 to-transparent"
          animate={{ height: [10, 20, 10], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="bg-black bg-opacity-90 backdrop-blur-xl rounded-2xl p-4 md:p-8 shadow-2xl border border-purple-500/50 relative z-10 overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-px rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-700/30 to-gray-700/0 animate-pulse"></div>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-gray-1000 to-gray-900 opacity-30"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 space-y-4 md:space-y-0">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative">
              RESUME
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h2>
          <motion.a
            href="/MyCV.pdf"
            download
            className="group flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
            <span className="relative z-10 text-sm md:text-base">Download CV</span>
          </motion.a>
        </div>

        {/* Education Section */}
        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full hidden md:block"></div>
            <div className="p-4 md:ml-6 md:p-6 rounded-xl bg-black border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-white text-center md:text-left">Higher Technician in Computer Network Systems Management</h4>
              <p className="text-gray-400 mt-2 flex justify-center md:justify-start items-center text-sm md:text-base">
                <span className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500 mr-2"></span>
                INS:Sapalomera Blanes | 2022 - 2025
              </p>
              <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-purple-500/20 to-transparent"></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full hidden md:block"></div>
            <div className="p-4 md:ml-6 md:p-6 rounded-xl bg-black border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <h4 className="text-lg md:text-xl font-bold text-white text-center md:text-left">Technician in Microcomputer Systems and Networks</h4>
              <p className="text-gray-400 mt-2 flex justify-center md:justify-start items-center text-sm md:text-base">
                <span className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500 mr-2"></span>
                INS:Freta Calella | 2020 - 2022
              </p>
              <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
