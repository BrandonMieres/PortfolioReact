'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Shield, Wifi, Router, Cloud, Lock, Cpu, Users, 
  MessageCircle, CheckSquare, Briefcase, RotateCw, ArrowLeft 
} from 'lucide-react';

// Hard Skills
const hardSkills = [
  { name: 'Networking (TCP/IP)', icon: <Wifi className="w-5 h-5 md:w-6 md:h-6 text-purple-400" /> },
  { name: 'Linux Server Administration', icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> },
  { name: 'Windows Server Administration', icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-blue-500" /> },
  { name: 'Firewall Configuration', icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-500" /> },
  { name: 'VPN Configuration', icon: <Lock className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" /> },
  { name: 'Network Security', icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-400" /> },
  { name: 'DNS & DHCP Management', icon: <Router className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" /> },
  { name: 'Network Troubleshooting', icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-orange-400" /> },
  { name: 'Routing and Switching', icon: <Router className="w-5 h-5 md:w-6 md:h-6 text-teal-500" /> },
  { name: 'Virtualization (VMware, Hyper-V)', icon: <Cloud className="w-5 h-5 md:w-6 md:h-6 text-gray-400" /> },
];

// Soft Skills
const softSkills = [
  { name: 'Communication', icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400" /> },
  { name: 'Problem-Solving', icon: <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> },
  { name: 'Leadership', icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-500" /> },
  { name: 'Adaptability', icon: <RotateCw className="w-5 h-5 md:w-6 md:h-6 text-red-500" /> },
  { name: 'Teamwork', icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" /> },
  { name: 'Creativity', icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-pink-500" /> },
];

export default function Resume() {
  const [activeSubSection, setActiveSubSection] = useState('skills');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          {/* Botón para volver a Portfolio */}
          <motion.button
            onClick={() => window.history.back()}
            className="group flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
            <span className="relative z-10 text-sm md:text-base">Back to Portfolio</span>
          </motion.button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex mb-4 md:mb-6 space-x-1 bg-black p-1 rounded-full justify-center flex-wrap gap-2 md:gap-0">
          {['skills', 'knowledge'].map((section) => (
            <motion.button
              key={section}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeSubSection === section
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveSubSection(section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[16rem] md:min-h-80"
          >
            {activeSubSection === 'skills' && (
              <motion.div
                className="space-y-6 md:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Hard Skills */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Hard Skills</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {hardSkills.map((skill) => (
                      <motion.div key={skill.name} variants={itemVariants} className="group">
                        <div className="p-4 rounded-xl bg-black border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                          <div className="flex items-center">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="mr-2 md:mr-3"
                            >
                              {skill.icon}
                            </motion.div>
                            <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Soft Skills</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {softSkills.map((skill) => (
                      <motion.div key={skill.name} variants={itemVariants} className="group">
                        <div className="p-4 rounded-xl bg-black border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                          <div className="flex items-center">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                              className="mr-2 md:mr-3"
                            >
                              {skill.icon}
                            </motion.div>
                            <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSubSection === 'knowledge' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
              >
                {[
                  {
                    title: 'Network Configuration & Management',
                    desc: 'Extensive knowledge in configuring and managing both local and wide area networks (LAN/WAN).',
                    icon: <Wifi className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />,
                  },
                  {
                    title: 'Firewall & VPN Configuration',
                    desc: 'Expertise in setting up and managing firewalls and VPNs for secure remote access and protection against cyber threats.',
                    icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />,
                  },
                  {
                    title: 'Troubleshooting & Diagnostics',
                    desc: 'Skilled in identifying and resolving issues related to network connectivity, hardware malfunctions, and system errors.',
                    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />,
                  },
                  {
                    title: 'Server Administration',
                    desc: 'In-depth knowledge of managing and maintaining servers, including Windows and Linux-based systems.',
                    icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
                  },
                  {
                    title: 'Virtualization Technologies',
                    desc: 'Experience in virtualization technologies like VMware and Hyper-V for efficient resource management and system scalability.',
                    icon: <Cloud className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />,
                  },
                  {
                    title: 'Network Security & Protocols',
                    desc: 'Proficient in securing networks, configuring security protocols, and ensuring compliance with security standards.',
                    icon: <Lock className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="p-4 md:p-6 rounded-xl bg-black border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 h-full group hover:bg-black">
                      <motion.div
                        className="mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-purple-900/30 inline-block"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-pink-300 transition-all duration-300 text-center md:text-left">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
