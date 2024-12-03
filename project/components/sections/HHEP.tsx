// **Imports y dependencias**
import { motion } from 'framer-motion' // Animaciones
import { useState } from 'react' // Hook de estado
import { User, Target, CheckCircle, Repeat, Headphones, Users, Heart } from 'lucide-react' // Iconos

// **Constante que contiene los hábitos**
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

// **Componente principal**
export default function HHEP() {
  // **Hook de estado para controlar la expansión**
  const [expandedHabit, setExpandedHabit] = useState<number | null>(null)

  // **Función para alternar la vista de más información**
  const toggleMoreInfo = (index: number) => {
    setExpandedHabit(prev => (prev === index ? null : index)) 
  }

  return (
    // **Sección animada con Framer Motion**
    <motion.section
      initial={{ opacity: 0, x: -100 }} // Animación inicial
      animate={{ opacity: 1, x: 0 }} // Animación en pantalla
      exit={{ opacity: 0, x: 100 }} // Animación al salir
      transition={{ duration: 0.5 }} // Transición suave
      className="space-y-8"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">
          7 Habits of Highly Effective People
        </h2>
        
        {/* **Grid de tarjetas con animación** */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hhepHabits.map((habit, index) => (
            <motion.div
              key={habit.name}
              initial={{ opacity: 0, y: 50 }} // Animación de entrada
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-6 rounded-lg border border-purple-400 shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {habit.icon}
                <h3 className="text-xl font-semibold text-pink-300 ml-2">
                  {habit.name}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{habit.description}</p>
              
              {/* **Mostrar más información si el hábito está expandido** */}
              {expandedHabit === index && (
                <p className="text-gray-200 mt-2">{habit.moreInfo}</p>
              )}

              {/* **Botón para alternar más información** */}
              <button
                onClick={() => toggleMoreInfo(index)}
                className="text-pink-400 hover:text-pink-300 transition-all duration-200"
              >
                {expandedHabit === index ? 'Show less' : 'Learn more...'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
