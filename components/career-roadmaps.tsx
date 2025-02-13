"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const roadmaps = [
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: "Web Development",
    description: "Learn frontend and backend technologies to become a full-stack developer.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-green-500" />,
    title: "App Development",
    description: "Master mobile app development for Android, iOS, and cross-platform frameworks.",
  },
  {
    icon: <Database className="w-12 h-12 text-purple-500" />,
    title: "AI & Data Science",
    description: "Dive into machine learning, data analysis, and artificial intelligence.",
  },
]

const CareerRoadmaps = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          Career Roadmaps
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">{roadmap.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">{roadmap.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{roadmap.description}</p>
              <div className="flex justify-center">
                <Button variant="outline">Explore Roadmap</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerRoadmaps

