"use client"

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const certificates = [
  { name: 'Cloud Foundations - AWS', year: 2023, image: '/img/cloud foundation.png' },
  { name: 'Cloud Operations - AWS', year: 2023, image: '/img/cloud operation.png' },
  { name: 'Data Engineering - AWS', year: 2023, image: '/img/dataENG.png' },
  { name: 'Introduction to Cloud - Semester 1', year: 2022, image: '/img/S1.png' },
  { name: 'Introduction to Cloud - Semester 2', year: 2022, image: '/img/S2.png' },
  { name: 'Introduction to Linux', year: 2021, image: '/img/hack2.png' },
  { name: 'Linux Personalization', year: 2021, image: '/img/hack1.png' },
]

export default function Certificates() {
  const [currentCertificate, setCurrentCertificate] = useState(0)

  const onPrev = () => {
    setCurrentCertificate((prev) => (prev > 0 ? prev - 1 : certificates.length - 1))
  }

  const onNext = () => {
    setCurrentCertificate((prev) => (prev < certificates.length - 1 ? prev + 1 : 0))
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
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">Certificates</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-300 ease-in-out"
              initial={false}
              animate={{ x: `-${currentCertificate * 100}%` }}
            >
              {certificates.map((cert, index) => (
                <div key={cert.name} className="w-full flex-shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={600}
                    height={400}
                    className="rounded-lg mx-auto"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-pink-300">{cert.name}</h3>
                    <p className="text-gray-400">Year obtained: {cert.year}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={onPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentCertificate ? 'bg-pink-500' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentCertificate(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

