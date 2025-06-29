"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { SkillConstellation } from "@/components/SkillConstellation"
import { Star } from "lucide-react"

export const SkillsSection = () => {
  return (
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
  )
}
