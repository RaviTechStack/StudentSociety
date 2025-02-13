"use client"

import { motion } from "framer-motion"
import { Code, BookOpen, FileText, Rocket } from "lucide-react"

const features = [
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: "Learn 10+ Programming Languages",
    description: "Master popular languages like Python, JavaScript, Java, and more.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "Real-Time Online Compiler",
    description: "Practice coding with our interactive online compiler.",
  },
  {
    icon: <FileText className="w-12 h-12 text-yellow-500" />,
    title: "Practice Papers & Interview Preparation",
    description: "Prepare for technical interviews with our comprehensive resources.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-red-500" />,
    title: "Career Roadmaps",
    description: "Follow structured learning paths for various tech careers.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

