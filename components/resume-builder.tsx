"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const ResumeBuilder = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Build Your ATS-Friendly Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Create a professional, ATS-optimized resume in minutes with our easy-to-use builder.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
              Build Your Resume Now
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-white w-screen md:w-full dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <FileText className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-4">Resume Preview</h3>
              <div className="bg-gray-200 dark:bg-gray-600 h-64 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ResumeBuilder

