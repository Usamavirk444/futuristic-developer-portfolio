"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ExternalLink, Code, Terminal, Calendar, User, Briefcase } from "lucide-react"
import {HeroSection} from "@/components/sections/HeroSection"
import {AboutSection} from "@/components/sections/AboutSection"
import {SkillsSection} from "@/components/sections/SkillsSection"
import {ProjectsSection} from "@/components/sections/ProjectsSection"
import {ExperienceSection} from "@/components/sections/ExperienceSection"
import {ContactSection} from "@/components/sections/ContactSection"
import {Footer} from "@/components/sections/Footer"

// Particle System Component
const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = ["#00d4ff", "#8b5cf6", "#00ff88"]

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = ((100 - distance) / 100) * 0.2
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}

// Typewriter Effect Component
const TypewriterEffect = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
      />
    </span>
  )
}

// Floating Navigation
const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", icon: User, label: "Home" },
    { id: "about", icon: Terminal, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "experience", icon: Calendar, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block p-3 rounded-xl mb-2 transition-all duration-300 group relative ${
              activeSection === item.id
                ? "bg-cyan-500/20 text-cyan-400"
                : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}

// Skill Constellation Component
const SkillConstellation = () => {
  const skills = [
    { name: "React", level: 95, category: "frontend", color: "#00d4ff" },
    { name: "Next.js", level: 90, category: "frontend", color: "#00d4ff" },
    { name: "TypeScript", level: 88, category: "frontend", color: "#00d4ff" },
    { name: "Node.js", level: 85, category: "backend", color: "#00ff88" },
    { name: "Python", level: 80, category: "backend", color: "#00ff88" },
    { name: "PostgreSQL", level: 82, category: "database", color: "#8b5cf6" },
    { name: "MongoDB", level: 78, category: "database", color: "#8b5cf6" },
    { name: "Docker", level: 75, category: "devops", color: "#ff6b6b" },
    { name: "AWS", level: 70, category: "devops", color: "#ff6b6b" },
  ]

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="absolute"
          style={{
            left: `${20 + (index % 3) * 30}%`,
            top: `${20 + Math.floor(index / 3) * 25}%`,
          }}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 360 }} className="relative group cursor-pointer">
            <div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
              style={{ borderColor: skill.color, backgroundColor: `${skill.color}20` }}
            >
              <span className="text-xs font-bold text-white">{skill.level}%</span>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 overflow-hidden h-full">
        <div className="relative overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <Code className="w-16 h-16 text-cyan-400" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4"
          >
            <Button
              size="sm"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Main Portfolio Component
export default function FuturisticPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <ParticleSystem />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
