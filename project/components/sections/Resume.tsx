'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Server, Shield, Wifi, Router, Cloud, Lock, Cpu } from 'lucide-react'

const skills = [
  { name: 'Networking (TCP/IP)', level: 90, icon: <Wifi className="w-6 h-6 text-purple-400" /> },
  { name: 'Linux Server Administration', level: 85, icon: <Server className="w-6 h-6 text-green-500" /> },
  { name: 'Windows Server Administration', level: 80, icon: <Server className="w-6 h-6 text-blue-500" /> },
  { name: 'Firewall Configuration', level: 85, icon: <Shield className="w-6 h-6 text-red-500" /> },
  { name: 'VPN Configuration', level: 80, icon: <Lock className="w-6 h-6 text-yellow-500" /> },
  { name: 'Network Security', level: 90, icon: <Shield className="w-6 h-6 text-red-400" /> },
  { name: 'DNS & DHCP Management', level: 80, icon: <Router className="w-6 h-6 text-indigo-500" /> },
  { name: 'Network Troubleshooting', level: 85, icon: <Cpu className="w-6 h-6 text-orange-400" /> },
  { name: 'Routing and Switching', level: 75, icon: <Router className="w-6 h-6 text-teal-500" /> },
  { name: 'Virtualization (VMware, Hyper-V)', level: 70, icon: <Cloud className="w-6 h-6 text-gray-400" /> },
]

export default function Resume() {
  return (
    <motion.section
      key="resume"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-pink-400">Resume</h2>
          <a
            href="/MyCV.pdf"
            download
            className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Education</h3>
            <ul className="space-y-2">
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Higher Technician in Computer Network Systems Management</h4>
                <p className="text-gray-400">INS:Sapalomera Blanes | 2022 - 2025</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Technician in Microcomputer Systems and Networks</h4>
                <p className="text-gray-400">INS:Freta Calella| 2020 - 2022</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Knowledge & Skills</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Network Configuration & Management</h4>
                <p className="text-gray-400">Extensive knowledge in configuring and managing both local and wide area networks (LAN/WAN).</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Firewall & VPN Configuration</h4>
                <p className="text-gray-400">Expertise in setting up and managing firewalls and VPNs for secure remote access and protection against cyber threats.</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Troubleshooting & Diagnostics</h4>
                <p className="text-gray-400">Skilled in identifying and resolving issues related to network connectivity, hardware malfunctions, and system errors.</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Server Administration</h4>
                <p className="text-gray-400">In-depth knowledge of managing and maintaining servers, including Windows and Linux-based systems.</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Virtualization Technologies</h4>
                <p className="text-gray-400">Experience in virtualization technologies like VMware and Hyper-V for efficient resource management and system scalability.</p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-pink-300">Network Security & Protocols</h4>
                <p className="text-gray-400">Proficient in securing networks, configuring security protocols, and ensuring compliance with security standards.</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {skill.icon}
                      <span className="ml-2 text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-pink-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
