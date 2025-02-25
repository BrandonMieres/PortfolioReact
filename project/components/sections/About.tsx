import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wifi, Lock, Cloud, Code, User, MessageCircle, CheckSquare, Briefcase, RotateCw, Globe } from 'lucide-react'
import { DiLinux, DiWindows, DiMysql, DiCloud9 } from 'react-icons/di'
import { useState } from 'react'

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-8"
    >
      <div className="glass p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-gradient-to-r from-purple-400 to-pink-400">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
         
          <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
          >
        <Image
          src="/img/About.jpg"
          alt="Brandon Mieres"
          width={200}
          height={200}
          className="rounded-full border-4 border-purple-400 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 blur-xl"></div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 leading-relaxed"
            >
              I'm a Higher Technician in Computer Network Systems Management with a year of experience in the field. 
              My expertise includes network administration, Linux/Unix systems, and troubleshooting network infrastructures. 
              I'm passionate about optimizing and securing network systems to ensure seamless connectivity and performance.
            </motion.p>

            {/* Secciones con iconos neón */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                <Wifi className="w-6 h-6 mr-2 text-pink-400" /> Why I chose this professional career
                </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I chose this career because of my deep interest in how networks enable communication and drive technological progress. 
                The complexity and challenge of maintaining secure and efficient networks excite me, and I’m driven by the opportunity to solve real-world problems through technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-pink-400" /> Future goals
                </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My future goals include advancing my expertise in network security, expanding my knowledge in cloud networking, 
                and ultimately becoming a network architect. I aspire to be part of impactful projects that shape the future of global network infrastructures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                <Cloud className="w-6 h-6 mr-2 text-pink-400" /> My personal paradigm
                </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the importance of continuous learning, collaboration, and adaptability in a fast-evolving tech industry. 
                My approach is based on finding innovative solutions, ensuring the security and reliability of networks, 
                and always striving for excellence in every task I undertake.
              </p>
            </motion.div>

            {/* Technical Skills Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                <Code className="w-6 h-6 mr-2 text-pink-400" /> Technical Skills
                </h3>
              <div className="glass p-4 rounded-xl">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="flex justify-between items-center w-full text-left text-gray-300 font-semibold text-lg hover:text-cyan-400 transition-colors"
                >
                  Technical Skills
                  <span>{activeIndex === 0 ? '▲' : '▼'}</span>
                </button>
                {activeIndex === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <table className="table-auto w-full text-gray-300">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Skill</th>
                          <th className="px-4 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <DiLinux className="w-6 h-6 mr-2 text-cyan-400" /> Linux Administration
                          </td>
                          <td className="px-4 py-2">
                            Managing Linux servers for network services and automation.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <DiWindows className="w-6 h-6 mr-2 text-cyan-400" /> Windows Administration
                          </td>
                          <td className="px-4 py-2">
                            Configuring and managing Windows environments and Active Directory.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <Globe className="w-6 h-6 mr-2 text-cyan-400" /> Network Administration
                          </td>
                          <td className="px-4 py-2">
                            Deploying and monitoring local and wide-area networks.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <DiMysql className="w-6 h-6 mr-2 text-cyan-400" /> Database Management
                          </td>
                          <td className="px-4 py-2">
                            Working with MySQL for database administration and queries.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <DiCloud9 className="w-6 h-6 mr-2 text-cyan-400" /> Cloud Networking
                          </td>
                          <td className="px-4 py-2">
                            Implementing and securing cloud-based network solutions.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Soft Skills Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                <User className="w-6 h-6 mr-2 text-pink-400" /> Soft Skills
                </h3>
              <div className="glass p-4 rounded-xl">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="flex justify-between items-center w-full text-left text-gray-300 font-semibold text-lg hover:text-cyan-400 transition-colors"
                >
                  Soft Skills
                  <span>{activeIndex === 1 ? '▲' : '▼'}</span>
                </button>
                {activeIndex === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <table className="table-auto w-full text-gray-300">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Skill</th>
                          <th className="px-4 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <MessageCircle className="w-6 h-6 mr-2 text-cyan-400" /> Communication
                          </td>
                          <td className="px-4 py-2">
                            Excellent communication skills for teamwork and client interaction.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <CheckSquare className="w-6 h-6 mr-2 text-cyan-400" /> Problem-Solving
                          </td>
                          <td className="px-4 py-2">
                            Efficient at troubleshooting and resolving technical issues.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <Briefcase className="w-6 h-6 mr-2 text-cyan-400" /> Leadership
                          </td>
                          <td className="px-4 py-2">
                            Leading teams and projects effectively under tight deadlines.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 flex items-center">
                            <RotateCw className="w-6 h-6 mr-2 text-cyan-400" /> Adaptability
                          </td>
                          <td className="px-4 py-2">
                            Flexible and adaptable to new tools, technologies, and work environments.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
