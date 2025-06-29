"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"

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

export const ProjectsSection = () => {
  return (
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
  )
}
