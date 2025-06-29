"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Zap,
  Terminal,
  Rocket,
  Star,
  ArrowDown,
  Send,
  MapPin,
  Calendar,
  User,
  Briefcase,
} from "lucide-react"

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
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    },
    {
      name: "Real-time Chat App",
      description: "WebSocket-based chat application with file sharing, emoji reactions, and group messaging.",
      technologies: ["Vue.js", "Socket.io", "Express", "MongoDB"],
    },
    {
      name: "AI Analytics Dashboard",
      description: "Data visualization platform with machine learning insights and predictive analytics.",
      technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "FastAPI"],
    },
    {
      name: "Microservices Architecture",
      description: "Scalable microservices system with API gateway, service discovery, and monitoring.",
      technologies: ["Docker", "Kubernetes", "Node.js", "Redis", "Prometheus"],
    },
    {
      name: "Mobile PWA",
      description: "Progressive web application with offline capabilities and push notifications.",
      technologies: ["React", "Service Workers", "IndexedDB", "Web Push"],
    },
    {
      name: "Blockchain DApp",
      description: "Decentralized application for smart contract interaction and cryptocurrency transactions.",
      technologies: ["Solidity", "Web3.js", "React", "MetaMask", "IPFS"],
    },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications serving 1M+ users. Architected microservices infrastructure and mentored junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built MVP from scratch using React and Node.js. Implemented CI/CD pipelines and reduced deployment time by 80%.",
    },
    {
      title: "Frontend Developer",
      company: "WebAgency",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications. Collaborated with designers to create pixel-perfect implementations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <ParticleSystem />
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10" />
        </motion.div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-purple-400"
              />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
          >
            <TypewriterEffect text="ALEX CHEN" delay={150} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            <TypewriterEffect text="Full Stack Developer & Digital Architect" delay={80} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Digital Craftsman</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with 6+ years of experience crafting digital experiences that
                  push the boundaries of what's possible on the web. I specialize in building scalable, performant
                  applications using cutting-edge technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey spans from pixel-perfect frontend interfaces to robust backend architectures, always with a
                  focus on clean code, optimal performance, and exceptional user experiences.
                </p>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </Card>
                <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
                  <div className="text-gray-400">Years Experience</div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Tech Arsenal</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "Frontend", count: "8+" },
                    { icon: Server, label: "Backend", count: "6+" },
                    { icon: Database, label: "Databases", count: "5+" },
                    { icon: Zap, label: "DevOps", count: "4+" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
                    >
                      <item.icon className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="font-semibold text-white">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.count} Technologies</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Constellation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interactive visualization of my technical expertise across different domains
            </p>
          </motion.div>

          <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-8">
            <SkillConstellation />
          </Card>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { category: "Frontend", color: "cyan", technologies: ["React", "Next.js", "Vue.js", "TypeScript"] },
              { category: "Backend", color: "green", technologies: ["Node.js", "Python", "Express", "FastAPI"] },
              { category: "Database", color: "purple", technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
              { category: "DevOps", color: "red", technologies: ["Docker", "AWS", "Kubernetes", "CI/CD"] },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-6 h-full">
                  <h3 className={`text-xl font-bold mb-4 text-${category.color}-400`}>{category.category}</h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech) => (
                      <div key={tech} className="flex items-center justify-between p-2 rounded bg-gray-800/50">
                        <span className="text-gray-300">{tech}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < 4 ? `text-${category.color}-400` : "text-gray-600"}`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Experience Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-8" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-green-400" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-6">
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-cyan-400 font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-purple-400 font-semibold mb-3">{exp.company}</h4>
                    <p className="text-gray-300">{exp.description}</p>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-black/20 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/20 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black/20 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">alex.chen@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, color: "text-white", href: "#" },
                    { icon: Linkedin, color: "text-blue-400", href: "#" },
                    { icon: Mail, color: "text-red-400", href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`p-3 rounded-full bg-black/40 border border-cyan-500/20 ${social.color} hover:bg-cyan-500/20 transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="text-gray-400 mb-4">© 2024 Alex Chen. Crafted with passion and cutting-edge technology.</p>
            <div className="flex justify-center space-x-2 text-sm text-gray-500">
              <span>Built with</span>
              <span className="text-cyan-400">Next.js</span>
              <span>•</span>
              <span className="text-purple-400">Framer Motion</span>
              <span>•</span>
              <span className="text-green-400">Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
