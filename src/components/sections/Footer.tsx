"use client"

import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-cyan-500/20 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-gray-400 mb-4">© 2024 Usama Virk. Crafted with passion and cutting-edge technology.</p>
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
  )
}
