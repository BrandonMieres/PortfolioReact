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
        This habit emphasizes taking{' '}
        <span className="text-purple-500">control</span> of your{' '}
        <span className="text-purple-500">actions</span> and{' '}
        <span className="text-purple-500">attitudes</span>, rather than{' '}
        <span className="text-purple-500">reacting</span> to external events.
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
        This habit encourages you to <span className="text-purple-500">set</span> clear{' '}
        <span className="text-purple-500">goals</span> and understand your{' '}
        <span className="text-purple-500">desired results</span> before taking{' '}
        <span className="text-purple-500">action</span>.
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
        This habit helps you <span className="text-purple-500">focus</span> on what matters{' '}
        <span className="text-purple-500">most</span>, organizing tasks based on their{' '}
        <span className="text-purple-500">importance</span> rather than <span className="text-purple-500">urgency</span>.
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
        <span className="text-purple-500">Win-Win</span> thinking aims for <span className="text-purple-500">solutions</span> that benefit{' '}
        all parties, creating a sense of shared <span className="text-purple-500">success</span>.
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
        This habit promotes <span className="text-purple-500">empathetic</span> listening, allowing you to fully{' '}
        <span className="text-purple-500">understand</span> others before communicating your{' '}
        <span className="text-purple-500">perspective</span>.
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
        Synergy is about <span className="text-purple-500">working together</span> to create better{' '}
        <span className="text-purple-500">solutions</span> than could be achieved{' '}
        <span className="text-purple-500">individually</span>.
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
        This habit is about <span className="text-purple-500">self-care</span> and <span className="text-purple-500">renewal</span>, ensuring you maintain{' '}
        <span className="text-purple-500">balance</span> and <span className="text-purple-500">health</span> in all aspects of your life.
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
              className="bg-purple-900 bg-opacity-50 p-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
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
