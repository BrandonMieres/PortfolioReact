import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Target, CheckCircle, Repeat, Headphones, Users, Heart, BookOpen, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

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
];

const CarouselControls = ({ currentIndex, total, onPrevious, onNext }) => (
  <div className="flex justify-center items-center gap-2 mt-4 md:gap-4">
    <button
      onClick={onPrevious}
      className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors text-white"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
    <span className="text-gray-300 text-sm md:text-base">
      {currentIndex + 1} / {total}
    </span>
    <button
      onClick={onNext}
      className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors text-white"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  </div>
);

export default function HHEP() {
  const [habitsIndex, setHabitsIndex] = useState(0);
  const [missionIndex, setMissionIndex] = useState(0);
  const [rocksIndex, setRocksIndex] = useState(0);

  const missionContent = [
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: 'My Purpose',
      content: 'To live an authentic and purposeful life, supporting the people I care about, closing the cycles I start, and advancing toward a fulfilling life centered on what truly matters.',
    },
    {
      icon: <Star className="w-6 h-6 text-pink-400" />,
      title: 'My Vision',
      content: 'My journey in life would be an epic story like Dungeons and Dragons, set in a magical world of swords and spells, striving to find the answer to why I am there.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-pink-400" />,
      title: 'My Values',
      content: 'Organization, continuous learning, and balance in different dimensions of life.',
    },
  ];

  const rocksContent = [
    {
      icon: <CheckCircle className="w-6 h-6 text-pink-400" />,
      title: 'Rocks',
      content: 'My family and close friends are the fundamental pillar of my life. Sharing quality time, creating meaningful memories, and providing mutual support are my top priorities, as they strengthen the bonds that define who I am.',
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: 'Pebbles',
      content: 'The activities that enrich my day-to-day life, such as spending time with acquaintances, enjoying a good conversation, participating in social events, or simply enjoying quiet moments at home, are important to maintain balance.',
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: 'Sand',
      content: 'The small daily distractions, such as checking social media, watching videos without a clear purpose, or procrastinating with minor tasks. Although they are part of the routine, I try to ensure they do not interfere with the time I dedicate to what really matters.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 px-4 py-6 md:space-y-8 md:px-6 md:py-8"
    >
      {/* 7 Habits Carousel */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          7 Habits of Highly Effective People
        </h2>
        <motion.div
          key={habitsIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center mb-4 gap-2 md:gap-4">
            {hhepHabits[habitsIndex].icon}
            <h3 className="text-lg md:text-xl font-semibold text-pink-300 text-center md:text-left">
              {hhepHabits[habitsIndex].name}
            </h3>
          </div>
          <p className="text-gray-300 text-sm md:text-base mb-4">{hhepHabits[habitsIndex].description}</p>
          <p className="text-gray-200 text-sm md:text-base">{hhepHabits[habitsIndex].moreInfo}</p>
        </motion.div>
        <CarouselControls
          currentIndex={habitsIndex}
          total={hhepHabits.length}
          onPrevious={() => setHabitsIndex((prev) => (prev - 1 + hhepHabits.length) % hhepHabits.length)}
          onNext={() => setHabitsIndex((prev) => (prev + 1) % hhepHabits.length)}
        />
      </div>

      {/* My Proactive Journey */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          My Proactive Journey
        </h2>
        <div className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <User className="w-10 h-10 md:w-12 md:h-12 text-pink-400 mx-auto md:mx-0" />
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-pink-300">How I Stopped Procrastinating and Started Acting</h3>
              <p className="text-gray-300 text-sm md:text-base">
                There was a time in my life when I realized I was always putting things off. I would say "I’ll do it tomorrow," but tomorrow never came. This procrastination was holding me back and making me feel like I was losing control of my life.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                It was then that I decided I no longer wanted to live waiting for the perfect moment. I knew that if I didn’t start now, I never would. So I began to face things as they came, one by one. No matter how small the step, I just wanted to move forward.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Over time, I realized that the key was not to wait for the "ideal moment," but simply to take action. It was a mental shift that allowed me to own my time and solve problems as they arose, rather than letting them pile up. Now, when something isn’t right, I prefer to do something, even if it’s small, rather than keep putting it off.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Carousel */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          My Mission Statement
        </h2>
        <motion.div
          key={missionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row items-start gap-4 bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md"
        >
          {missionContent[missionIndex].icon}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-pink-300">{missionContent[missionIndex].title}</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2">{missionContent[missionIndex].content}</p>
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
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          Rocks, Pebbles, and Sand
        </h2>
        <motion.div
          key={rocksIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row items-start gap-4 bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md"
        >
          {rocksContent[rocksIndex].icon}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-pink-300">{rocksContent[rocksIndex].title}</h3>
            <p className="text-gray-300 text-sm md:text-base mt-2">{rocksContent[rocksIndex].content}</p>
          </div>
        </motion.div>
        <CarouselControls
          currentIndex={rocksIndex}
          total={rocksContent.length}
          onPrevious={() => setRocksIndex((prev) => (prev - 1 + rocksContent.length) % rocksContent.length)}
          onNext={() => setRocksIndex((prev) => (prev + 1) % rocksContent.length)}
        />
      </div>

      {/* My Win-Win Experience */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          My Win-Win Experience
        </h2>
        <div className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-pink-400 mx-auto md:mx-0" />
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-pink-300">Resolving a Conflict in a Class Project</h3>
              <p className="text-gray-300 text-sm md:text-base">
                In a group class project, we faced a problem: we couldn’t agree on which approach to take. Some wanted to prioritize functionality and others design, which led us to waste time arguing without making progress.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Instead of letting the conflict hold us back, I proposed dividing the work strategically. I suggested that we first define a basic functional structure, and once established, those who wanted to focus on design could improve it without affecting the logic. This way, everyone could work on what interested them without compromising the final result.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Thanks to this, not only did we finish the project on time, but we also learned to leverage each other’s strengths instead of arguing over different approaches. Since then, I always try to find solutions where everyone benefits in team projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Empathetic Words That Made a Difference */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-pink-400 text-center md:text-left">
          Empathetic Words That Made a Difference
        </h2>
        <div className="bg-gradient-to-r from-purple-800 to-black bg-opacity-60 p-4 md:p-6 rounded-lg border border-purple-400 shadow-md">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mx-auto md:mx-0" />
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-pink-300">Words of Understanding</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2 italic">
                  "I understand how difficult this situation can be, and it’s completely normal to feel overwhelmed. Let’s talk together and we’ll get through it."
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-pink-300">Support for Growth</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2 italic">
                  "Making mistakes is totally normal; it’s part of the learning journey. What matters is how you get up and what you take from each experience. What do you think you could do today to turn a stumble into an opportunity?"
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-pink-300">Positive Perspective</h3>
                <p className="text-gray-300 text-sm md:text-base mt-2 italic">
                  "Sometimes, what seems like a step back today is actually the push we needed to discover something amazing. Every experience opens new doors and invites us to see life from another perspective. What step could you take today to focus on the positive?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
