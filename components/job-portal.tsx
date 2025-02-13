"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    company: "AI Innovations",
    location: "New York, NY",
    type: "Internship",
  },
  {
    title: "Mobile App Developer",
    company: "AppWizards",
    location: "San Francisco, CA",
    type: "Contract",
  },
]

const JobPortal = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          Job Portal
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{job.company}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{job.location}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{job.type}</p>
              <Button variant="outline">Apply Now</Button>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}

export default JobPortal

