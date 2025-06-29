"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/TypewriterEffect"
import { Rocket, Download, ArrowDown } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
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
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Animated Rings */}
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

            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-cyan-400 to-purple-600 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full" />
              <Image
                src="/images/profile.jpg"
                alt="Usama Virk - Full Stack Developer"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full"
                priority
              />

              {/* Glowing overlay effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Floating particles around the image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
        >
          <TypewriterEffect text="USAMA VIRK" delay={150} />
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
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/20 transform hover:scale-105 transition-all duration-300 bg-transparent shadow-lg hover:shadow-purple-500/25"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <ArrowDown className="w-8 h-8 text-cyan-400 hover:text-cyan-300 transition-colors" />
        </motion.div>
      </div>
    </section>
  )
}
