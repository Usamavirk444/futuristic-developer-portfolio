"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code } from "lucide-react"

interface Project {
  name: string
  description: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
