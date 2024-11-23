import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Website Cloner',
    description:
      'A project that allows efficient cloning of websites while ensuring that all original functionalities are preserved.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/BrandonMieres',
    image: '/img/portfolio3.png',
  },
  {
    title: 'Translation Program',
    description:
      'Development of software that automatically translates texts using translation APIs.',
    tech: ['Python', 'Flask', 'Google Translate API'],
    link: 'https://github.com/BrandonMieres',
    image: '/img/portfolio5.png',
  },
  {
    title: 'Business Management Program',
    description:
      'An integrated system for managing business resources, including inventory and invoicing.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/BrandonMieres',
    image: '/img/portfolio4.png',
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-semibold mb-6 text-pink-400">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300 group"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-400 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-800 rounded-full text-xs font-medium text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-pink-400 hover:text-purple-400 transition-colors duration-300"
              >
                View project <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
