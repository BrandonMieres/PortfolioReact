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
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/img/About.jpg" // Ruta correcta desde la carpeta public
            alt="Brandon Mieres"
            width={200}
            height={200}
            className="rounded-full border-4 border-purple-500"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-pink-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a Higher Technician in Computer Network Systems Management with a year of experience in the field. 
              My expertise includes network administration, Linux/Unix systems, and troubleshooting network infrastructures. 
              I'm passionate about optimizing and securing network systems to ensure seamless connectivity and performance.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                  <Wifi className="w-6 h-6 mr-2 text-pink-400" /> Why I chose this professional career
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I chose this career because of my deep interest in how networks enable communication and drive technological progress. 
                  The complexity and challenge of maintaining secure and efficient networks excite me, and I’m driven by the opportunity to solve real-world problems through technology.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-pink-400" /> Future goals
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My future goals include advancing my expertise in network security, expanding my knowledge in cloud networking, 
                  and ultimately becoming a network architect. I aspire to be part of impactful projects that shape the future of global network infrastructures.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                  <Cloud className="w-6 h-6 mr-2 text-pink-400" /> My personal paradigm
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the importance of continuous learning, collaboration, and adaptability in a fast-evolving tech industry. 
                  My approach is based on finding innovative solutions, ensuring the security and reliability of networks, 
                  and always striving for excellence in every task I undertake.
                </p>
              </div>

              {/* Technical Skills Accordion */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-pink-400" /> Technical Skills
                </h3>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl border border-purple-500">
                  <button
                    onClick={() => toggleAccordion(0)}
                    className="flex justify-between items-center w-full text-left text-gray-300 font-semibold text-lg"
                  >
                    Technical Skills
                    <span>{activeIndex === 0 ? '▲' : '▼'}</span>
                  </button>
                  {activeIndex === 0 && (
                    <div className="mt-4">
                      <table className="text-black table-auto w-full text-gray-300">
                        <thead>
                          <tr>
                            <th className="px-4 py-2">Skill</th>
                            <th className="px-4 py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <DiLinux className="w-6 h-6 mr-2" /> Linux Administration
                            </td>
                            <td className="px-4 py-2">
                              Managing Linux servers for network services and automation.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <DiWindows className="w-6 h-6 mr-2" /> Windows Administration
                            </td>
                            <td className="px-4 py-2">
                              Configuring and managing Windows environments and Active Directory.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <Globe className="w-6 h-6 mr-2" /> Network Administration
                            </td>
                            <td className="px-4 py-2">
                              Deploying and monitoring local and wide-area networks.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <DiMysql className="w-6 h-6 mr-2" /> Database Management
                            </td>
                            <td className="px-4 py-2">
                              Working with MySQL for database administration and queries.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <DiCloud9 className="w-6 h-6 mr-2" /> Cloud Networking
                            </td>
                            <td className="px-4 py-2">
                              Implementing and securing cloud-based network solutions.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* Soft Skills Accordion */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 flex items-center">
                  <User className="w-6 h-6 mr-2 text-pink-400" /> Soft Skills
                </h3>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl border border-purple-500">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="flex justify-between items-center w-full text-left text-gray-300 font-semibold text-lg"
                  >
                    Soft Skills
                    <span>{activeIndex === 1 ? '▲' : '▼'}</span>
                  </button>
                  {activeIndex === 1 && (
                    <div className="mt-4">
                      <table className="table-auto w-full">
                        <thead>
                          <tr>
                            <th className="px-4 py-2">Skill</th>
                            <th className="px-4 py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <MessageCircle className="w-6 h-6 mr-2" /> Communication
                            </td>
                            <td className="px-4 py-2">
                              Excellent communication skills for teamwork and client interaction.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <CheckSquare className="w-6 h-6 mr-2" /> Problem-Solving
                            </td>
                            <td className="px-4 py-2">
                              Efficient at troubleshooting and resolving technical issues.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <Briefcase className="w-6 h-6 mr-2" /> Leadership
                            </td>
                            <td className="px-4 py-2">
                              Leading teams and projects effectively under tight deadlines.
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 flex items-center">
                              <RotateCw className="w-6 h-6 mr-2" /> Adaptability
                            </td>
                            <td className="px-4 py-2">
                              Flexible and adaptable to new tools, technologies, and work environments.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
