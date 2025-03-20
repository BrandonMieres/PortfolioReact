import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Lock, Cloud } from 'lucide-react';
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

export default function About() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Toggle play/pause when clicking the video
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Update the current time of the video
  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  // Get the total duration of the video
  const handleDuration = (dur) => {
    setDuration(dur);
  };

  // Update the video position when moving the slider
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    playerRef.current.seekTo(seekTime, 'seconds');
    setCurrentTime(seekTime);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-6 px-4 py-6 md:space-y-8 md:px-6 md:py-8"
    >
      <div className="glass p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-gradient-to-r from-purple-400 to-pink-400">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/img/About.jpg"
              alt="Brandon Mieres"
              width={140}
              height={140}
              className="rounded-full border-4 border-purple-400 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 blur-xl"></div>
          </motion.div>

          <div className="flex-1 space-y-4 md:space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center md:text-left"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 leading-relaxed text-sm md:text-base"
            >
              I am a Higher Technician in Network Systems Management with one year of experience in the field. 
              My experience includes network administration, Linux/Unix systems, and troubleshooting network infrastructures. 
              I am passionate about optimizing and securing network systems to ensure flawless connectivity and performance.
            </motion.p>

            {/* Sections with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-400 flex items-center justify-center md:justify-start">
                <Wifi className="w-5 h-5 md:w-6 md:h-6 mr-2 text-pink-400" /> Why I chose this career
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                I chose this career because of my deep interest in how networks enable communication and drive technological progress. 
                The complexity and challenge of maintaining secure and efficient networks excite me, and I am motivated by the opportunity to solve real-world problems through technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-400 flex items-center justify-center md:justify-start">
                <Lock className="w-5 h-5 md:w-6 md:h-6 mr-2 text-pink-400" /> Future Goals
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                My future goals include advancing my expertise in network security, expanding my knowledge in cloud networking, 
                and becoming a network architect. I aspire to participate in impactful projects that shape the future of global network infrastructures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-purple-400 flex items-center justify-center md:justify-start">
                <Cloud className="w-5 h-5 md:w-6 md:h-6 mr-2 text-pink-400" /> My personal paradigm
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I believe in the importance of continuous learning, collaboration, and adaptability in a rapidly evolving tech industry. 
                My approach is based on finding innovative solutions, ensuring the security and reliability of networks, 
                and always striving for excellence in every task I undertake.
              </p>
            </motion.div>

            {/* Futuristic video section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative mt-6"
            >
              <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden border-2 border-purple-500 shadow-lg aspect-video cursor-pointer">
                <ReactPlayer
                  ref={playerRef}
                  url="https://youtu.be/vupsZwaSesE"
                  playing={isPlaying}
                  controls={false}
                  width="100%"
                  height="100%"
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                  onClick={togglePlay}
                />
                {/* Futuristic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-pink-900/50 opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                {/* Scanning effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1 animate-scan pointer-events-none"></div>
                {/* Glowing borders */}
                <div className="absolute inset-0 rounded-xl border border-cyan-400 opacity-50 blur-sm transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-2xl mx-auto mt-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={duration ? (currentTime / duration) * 100 : 0}
                  onChange={handleSeek}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #a855f7 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%)`,
                  }}
                />
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center mt-6"
            >
              <Link href="skills">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden py-2 px-4 md:py-4 md:px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base md:text-lg"
                >
                  <span className="relative z-10">EXPLORE MY SKILLS</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -inset-px rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
                  <span className="absolute inset-0 rounded-full border border-white border-opacity-30"></span>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-cyan-400 opacity-50 blur-md"></span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
