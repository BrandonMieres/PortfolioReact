import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Target, CheckCircle, Repeat, Headphones, Users, Heart, BookOpen, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const hhepHabits = [
  { 
    name: 'Be Proactive', 
    description: (
      <>
        Take <span className="text-purple-500">responsibility</span> for your{' '}
        <span className="text-purple-500">reactions</span> and{' '}
        <span className="text-purple-500">behaviors</span>.
      </>
    ), 
    moreInfo: (
      <>
        I apply this habit by always trying to take control of my actions. When something goes wrong, I try to understand what I could have done differently, rather than blaming external factors.
      </>
    ), 
    icon: <User className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Begin with the End in Mind', 
    description: (
      <>
        <span className="text-purple-500">Define</span> a clear vision of your{' '}
        <span className="text-purple-500">desired outcomes</span>.
      </>
    ), 
    moreInfo: (
      <>
        Before starting any project or task, I always take a moment to visualize the end result I want to achieve. This helps me stay focused and motivated to reach that goal, whether it's a professional task or a personal achievement.
      </>
    ), 
    icon: <Target className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Put First Things First', 
    description: (
      <>
        <span className="text-purple-500">Prioritize</span> important tasks over urgent but{' '}
        <span className="text-purple-500">less important</span> ones.
      </>
    ), 
    moreInfo: (
      <>
        I apply this habit by carefully prioritizing my day. I always focus on what will bring the most value in the long term, rather than being overwhelmed by tasks that seem urgent but are not as important.
      </>
    ), 
    icon: <CheckCircle className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Think Win-Win', 
    description: (
      <>
        Seek mutually beneficial <span className="text-purple-500">solutions</span> in{' '}
        <span className="text-purple-500">relationships</span> and <span className="text-purple-500">business</span>.
      </>
    ), 
    moreInfo: (
      <>
        I use this habit to approach both personal and professional relationships with a mindset of collaboration. I always look for ways that both sides can benefit from any agreement or partnership, rather than focusing on individual gain.
      </>
    ), 
    icon: <Users className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Seek First to Understand, Then to Be Understood', 
    description: (
      <>
        <span className="text-purple-500">Listen</span> actively before expressing your own{' '}
        <span className="text-purple-500">point of view</span>.
      </>
    ), 
    moreInfo: (
      <>
        In my personal life, I strive to listen fully before jumping to conclusions. This habit helps me better understand others' perspectives and respond with empathy, which strengthens my relationships.
      </>
    ), 
    icon: <Headphones className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Synergize', 
    description: (
      <>
        <span className="text-purple-500">Combine</span> strengths through teamwork and{' '}
        <span className="text-purple-500">collaboration</span>.
      </>
    ), 
    moreInfo: (
      <>
        In my work and personal life, I often look for opportunities to collaborate with others. I recognize that by combining our strengths, we can achieve much better results than if we work alone.
      </>
    ), 
    icon: <Repeat className="w-6 h-6 text-pink-400" /> 
  },
  
  { 
    name: 'Sharpen the Saw', 
    description: (
      <>
        <span className="text-purple-500">Renew</span> yourself physically, mentally, emotionally, and{' '}
        <span className="text-purple-500">spiritually</span>.
      </>
    ), 
    moreInfo: (
      <>
        I make sure to take time for myself regularly. Whether it's through exercise, reading, or spending time with loved ones, I focus on keeping my mind and body in balance to be at my best every day.
      </>
    ), 
    icon: <Heart className="w-6 h-6 text-pink-400" /> 
  },
]

const CarouselControls = ({ currentIndex, total, onPrevious, onNext }) => (
  <div className="flex justify-center items-center gap-4 mt-4">
    <button
      onClick={onPrevious}
      className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <span className="text-gray-300">
      {currentIndex + 1} / {total}
    </span>
    <button
      onClick={onNext}
      className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
)

export default function HHEP() {
  // State for each carousel
  const [habitsIndex, setHabitsIndex] = useState(0)
  const [missionIndex, setMissionIndex] = useState(0)
  const [rocksIndex, setRocksIndex] = useState(0)

  // Mission statement content
  const missionContent = [
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "My Purpose",
      content: "To live an authentic and purposeful life, supporting the people I care about, closing the cycles I start, and advancing toward a fulfilling life centered on what truly matters."
    },
    {
      icon: <Star className="w-6 h-6 text-pink-400" />,
      title: "My Vision",
      content: "My journey in life would be an epic story like Dungeons and Dragons, set in a magical world of swords and spells, striving to find the answer to why I am there."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-pink-400" />,
      title: "My Values",
      content: "Organization, continuous learning, and balance in different dimensions of life."
    }
  ]

  // Rocks, Pebbles, and Sand content
  const rocksContent = [
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-400" />,
      title: "Rocks",
      content: "My family and close friends are the fundamental pillar of my life. Sharing quality time, creating meaningful memories, and providing mutual support are my top priorities, as they strengthen the bonds that define who I am."
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: "Pebbles",
      content: "The activities that enrich my day-to-day life, such as spending time with acquaintances, enjoying a good conversation, participating in social events, or simply enjoying quiet moments at home, are important to maintain balance."
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "Sand",
      content: "The small daily distractions, such as checking social media, watching videos without a clear purpose, or procrastinating with minor tasks. Although they are part of the routine, I try to ensure they do not interfere with the time I dedicate to what really matters."
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* 7 Habits Carousel */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">
          7 Habits of Highly Effective People
        </h2>
        
        <motion.div
          key={habitsIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-6 rounded-lg border border-purple-400 shadow-md"
        >
          <div className="flex items-center mb-4">
            {hhepHabits[habitsIndex].icon}
            <h3 className="text-xl font-semibold text-pink-300 ml-2">
              {hhepHabits[habitsIndex].name}
            </h3>
          </div>
          <p className="text-gray-300 mb-4">{hhepHabits[habitsIndex].description}</p>
          <p className="text-gray-200">{hhepHabits[habitsIndex].moreInfo}</p>
        </motion.div>

        <CarouselControls
          currentIndex={habitsIndex}
          total={hhepHabits.length}
          onPrevious={() => setHabitsIndex((prev) => (prev - 1 + hhepHabits.length) % hhepHabits.length)}
          onNext={() => setHabitsIndex((prev) => (prev + 1) % hhepHabits.length)}
        />
      </div>

      {/* Mission Statement Carousel */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">
          My Mission Statement
        </h2>

        <motion.div
          key={missionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-4 bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-6 rounded-lg border border-purple-400 shadow-md"
        >
          {missionContent[missionIndex].icon}
          <div>
            <h3 className="text-xl font-semibold text-pink-300">{missionContent[missionIndex].title}</h3>
            <p className="text-gray-300 mt-2">{missionContent[missionIndex].content}</p>
          </div>
        </motion.div>

        <CarouselControls
          currentIndex={missionIndex}
          total={missionContent.length}
          onPrevious={() => setMissionIndex((prev) => (prev - 1 + missionContent.length) % missionContent.length)}
          onNext={() => setMissionIndex((prev) => (prev + 1) % missionContent.length)}
        />
      </div>

      {/* Rocks, Pebbles, and Sand Carousel */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">
          Rocks, Pebbles, and Sand
        </h2>

        <motion.div
          key={rocksIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-4 bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-6 rounded-lg border border-purple-400 shadow-md"
        >
          {rocksContent[rocksIndex].icon}
          <div>
            <h3 className="text-xl font-semibold text-pink-300">{rocksContent[rocksIndex].title}</h3>
            <p className="text-gray-300 mt-2">{rocksContent[rocksIndex].content}</p>
          </div>
        </motion.div>

        <CarouselControls
          currentIndex={rocksIndex}
          total={rocksContent.length}
          onPrevious={() => setRocksIndex((prev) => (prev - 1 + rocksContent.length) % rocksContent.length)}
          onNext={() => setRocksIndex((prev) => (prev + 1) % rocksContent.length)}
        />
      </div>
{/* Win-Win Situation Container */}
<div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
  <h2 className="text-3xl font-semibold mb-6 text-pink-400">
    My Win-Win Experience
  </h2>

  <div className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-6 rounded-lg border border-purple-400 shadow-md">
    <div className="flex items-start gap-4">
      <Users className="w-6 h-6 text-pink-400" />
      <div>
        <h3 className="text-xl font-semibold text-pink-300">Resolving a Conflict in a Class Project</h3>
        <p className="text-gray-300 mt-2">
          In a group class project, we faced a problem: we couldn't agree on which approach to take. Some wanted to prioritize functionality and others design, which led us to waste time arguing without making progress.
        </p>
        <p className="text-gray-300 mt-2">
          Instead of letting the conflict hold us back, I proposed dividing the work strategically. I suggested that we first define a basic functional structure, and once established, those who wanted to focus on design could improve it without affecting the logic. This way, everyone could work on what interested them without compromising the final result.
        </p>
        <p className="text-gray-300 mt-2">
          Thanks to this, not only did we finish the project on time, but we also learned to leverage each other's strengths instead of arguing over different approaches. Since then, I always try to find solutions where everyone benefits in team projects.
        </p>
      </div>
    </div>
  </div>
</div>


    </motion.section>
  )
}
