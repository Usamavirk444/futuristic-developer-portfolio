"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

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

export const ExperienceSection = () => {
  return (
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
  )
}
