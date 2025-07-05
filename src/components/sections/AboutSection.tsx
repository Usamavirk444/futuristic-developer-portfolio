"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Globe, Server, Database, Zap } from "lucide-react"

export const AboutSection = () => {
  return (
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
                I'm a passionate full-stack developer with 6+ years of experience crafting digital experiences that push
                the boundaries of what's possible on the web. I specialize in building scalable, performant applications
                using cutting-edge technologies.
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

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
  )
}
