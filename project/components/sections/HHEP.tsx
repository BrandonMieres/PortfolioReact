import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Target, CheckCircle, Repeat, Headphones, Users, Heart } from 'lucide-react'

const hhepHabits = [
  { name: 'Be Proactive', description: 'Take responsibility for your reactions and behaviors.', moreInfo: 'This habit emphasizes taking control of your actions and attitudes, rather than reacting to external events.', icon: <User className="w-6 h-6 text-pink-400" /> },
  { name: 'Begin with the End in Mind', description: 'Define a clear vision of your desired outcomes.', moreInfo: 'This habit encourages you to set clear goals and understand your desired results before taking action.', icon: <Target className="w-6 h-6 text-pink-400" /> },
  { name: 'Put First Things First', description: 'Prioritize important tasks over urgent but less important ones.', moreInfo: 'This habit helps you focus on what matters most, organizing tasks based on their importance rather than urgency.', icon: <CheckCircle className="w-6 h-6 text-pink-400" /> },
  { name: 'Think Win-Win', description: 'Seek mutually beneficial solutions in relationships and business.', moreInfo: 'Win-Win thinking aims for solutions that benefit all parties, creating a sense of shared success.', icon: <Users className="w-6 h-6 text-pink-400" /> },
  { name: 'Seek First to Understand, Then to Be Understood', description: 'Listen actively before expressing your own point of view.', moreInfo: 'This habit promotes empathetic listening, allowing you to fully understand others before communicating your perspective.', icon: <Headphones className="w-6 h-6 text-pink-400" /> },
  { name: 'Synergize', description: 'Combine strengths through teamwork and collaboration.', moreInfo: 'Synergy is about working together to create better solutions than could be achieved individually.', icon: <Repeat className="w-6 h-6 text-pink-400" /> },
  { name: 'Sharpen the Saw', description: 'Renew yourself physically, mentally, emotionally, and spiritually.', moreInfo: 'This habit is about self-care and renewal, ensuring you maintain balance and health in all aspects of your life.', icon: <Heart className="w-6 h-6 text-pink-400" /> },
]

export default function HHEP() {
  const [expandedHabit, setExpandedHabit] = useState<number | null>(null)

  const toggleMoreInfo = (index: number) => {
    setExpandedHabit(prev => (prev === index ? null : index)) // Toggle the expanded view
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
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">7 Habits of Highly Effective People</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hhepHabits.map((habit, index) => (
            <motion.div
              key={habit.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-900 bg-opacity-50 p-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {habit.icon}
                <h3 className="text-xl font-semibold text-pink-300 ml-2">{habit.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{habit.description}</p>
              
              {/* Mostrar más información si el estado `expandedHabit` coincide con el índice */}
              {expandedHabit === index && (
                <p className="text-gray-200 mt-2">{habit.moreInfo}</p>
              )}

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
