"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Terminal, Code, Briefcase, Calendar, Mail } from "lucide-react"

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", icon: User, label: "Home" },
    { id: "about", icon: Terminal, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Calendar, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    // Set initial active section
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Immediately update active section for better UX
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-2 shadow-2xl">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block p-3 rounded-xl mb-2 transition-all duration-300 group relative ${
              activeSection === item.id
                ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-400 shadow-lg shadow-cyan-500/25"
                : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5" />

            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Tooltip */}
            <motion.span
              className="absolute left-full ml-3 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-cyan-500/20 shadow-lg"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {item.label}
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/90 border-l border-b border-cyan-500/20 rotate-45" />
            </motion.span>
          </motion.button>
        ))}

        {/* Progress indicator */}
        <div className="mt-4 pt-4 border-t border-cyan-500/20">
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                width: `${((navItems.findIndex((item) => item.id === activeSection) + 1) / navItems.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-2 text-center">
            {navItems.findIndex((item) => item.id === activeSection) + 1} / {navItems.length}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
