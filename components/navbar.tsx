"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, MessageCircle, Users, Bug, Brain, Menu, X } from "lucide-react"
import type React from "react"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                Student Society
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem href="#" icon={<MessageCircle className="w-5 h-5" />} text="Ask & Clear Your Doubts" />
              <NavItem href="#" icon={<Users className="w-5 h-5" />} text="Join Tech Communities" />
              <NavItem href="#" icon={<Bug className="w-5 h-5" />} text="Debug & Improve Skills" />
              <NavItem href="#" icon={<Brain className="w-5 h-5" />} text="Learn AI" />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="#" icon={<MessageCircle className="w-5 h-5" />} text="Ask & Clear Your Doubts" />
            <MobileNavItem href="#" icon={<Users className="w-5 h-5" />} text="Join Tech Communities" />
            <MobileNavItem href="#" icon={<Bug className="w-5 h-5" />} text="Debug & Improve Skills" />
            <MobileNavItem href="#" icon={<Brain className="w-5 h-5" />} text="Learn AI" />
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <Link
    href={href}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
)

const MobileNavItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <Link
    href={href}
    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
)

export default Navbar

