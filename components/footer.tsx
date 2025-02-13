import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Student Society. All rights reserved.</p>
            <p className="text-sm mt-2">&ldquo;Empowering students to build their future&ldquo; - P. Raj</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

