"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const certificates = [
  { name: "Cloud Foundations - AWS", year: 2023, image: "/img/cloud foundation.png" },
  { name: "Cloud Operations - AWS", year: 2023, image: "/img/cloud operation.png" },
  { name: "Data Engineering - AWS", year: 2023, image: "/img/dataENG.png" },
  { name: "Introduction to Cloud - Semester 1", year: 2022, image: "/img/S1.png" },
  { name: "Introduction to Cloud - Semester 2", year: 2022, image: "/img/S2.png" },
  { name: "Introduction to Linux", year: 2021, image: "/img/hack2.png" },
  { name: "Linux Personalization", year: 2021, image: "/img/hack1.png" },
];

export default function Certificates() {
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const onPrev = () => {
    setCurrentCertificate((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
  };

  const onNext = () => {
    setCurrentCertificate((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="glass p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          My Certificates
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              initial={false}
              animate={{ x: `-${currentCertificate * 100}%` }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="w-full flex-shrink-0 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="relative group">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={600}
                      height={400}
                      className="rounded-lg mx-auto transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-lg bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 text-center"
                  >
                    <h3 className="text-2xl font-semibold text-cyan-300 drop-shadow-md">
                      {cert.name}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Year obtained: {cert.year}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={onPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-purple-600 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-purple-600 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentCertificate
                  ? "bg-cyan-500 scale-125 shadow-lg"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentCertificate(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
