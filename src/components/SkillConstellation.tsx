"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Server, Globe, Cloud } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Globe,
    color: "#00d4ff",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "Tailwind", level: 92, icon: "🎨" },
      { name: "SASS", level: 87, icon: "💄" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "#00ff88",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express", level: 88, icon: "🚀" },
      { name: "FastAPI", level: 82, icon: "⚡" },
      { name: "GraphQL", level: 80, icon: "📊" },
      { name: "REST APIs", level: 93, icon: "🔗" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "#8b5cf6",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Redis", level: 82, icon: "🔴" },
      { name: "Prisma", level: 87, icon: "💎" },
      { name: "MySQL", level: 83, icon: "🐬" },
      { name: "Supabase", level: 80, icon: "⚡" },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "#ff6b6b",
    skills: [
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Kubernetes", level: 75, icon: "⚙️" },
      { name: "CI/CD", level: 88, icon: "🔄" },
      { name: "Vercel", level: 92, icon: "▲" },
      { name: "Nginx", level: 78, icon: "🌐" },
    ],
  },
]

export const SkillConstellation = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredSkill) {
        setIsAnimating(true)
        setTimeout(() => {
          setSelectedCategory((prev) => (prev + 1) % skillCategories.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [hoveredSkill])

  const currentCategory = skillCategories[selectedCategory]

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Category Selector */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 bg-black/40 backdrop-blur-md rounded-2xl p-2 border border-cyan-500/20">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/50"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Constellation Display */}
      <div className="relative flex items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full max-w-4xl"
          >
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center backdrop-blur-md shadow-2xl"
                  style={{
                    borderColor: currentCategory.color,
                    backgroundColor: `${currentCategory.color}20`,
                    boxShadow: `0 0 40px ${currentCategory.color}40`,
                  }}
                >
                  <currentCategory.icon className="w-10 h-10" style={{ color: currentCategory.color }} />
                </div>

                {/* Pulsing Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border opacity-30"
                    style={{ borderColor: currentCategory.color }}
                    animate={{
                      scale: [1, 1.5 + i * 0.3],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Skill Nodes */}
            {currentCategory.skills.map((skill, index) => {
              const angle = index * 60 - 90 // Distribute in circle
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ x, y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  {/* Connection Line */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 origin-left h-0.5 opacity-30"
                    style={{
                      width: radius,
                      backgroundColor: currentCategory.color,
                      transform: `rotate(${angle + 90}deg) translateY(-50%)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  />

                  {/* Skill Node */}
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.3, z: 10 }}
                    animate={hoveredSkill === skill.name ? { scale: 1.2 } : {}}
                  >
                    {/* Skill Circle */}
                    <div
                      className="w-16 h-16 rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-md relative overflow-hidden"
                      style={{
                        borderColor: currentCategory.color,
                        backgroundColor: `${currentCategory.color}15`,
                        boxShadow:
                          hoveredSkill === skill.name
                            ? `0 0 30px ${currentCategory.color}60`
                            : `0 0 15px ${currentCategory.color}30`,
                      }}
                    >
                      {/* Progress Ring */}
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="28"
                          fill="none"
                          stroke={`${currentCategory.color}30`}
                          strokeWidth="2"
                        />
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="28"
                          fill="none"
                          stroke={currentCategory.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: skill.level / 100 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                          style={{
                            filter: `drop-shadow(0 0 6px ${currentCategory.color})`,
                          }}
                        />
                      </svg>

                      {/* Skill Icon */}
                      <div className="text-2xl mb-1 relative z-10">{skill.icon}</div>

                      {/* Skill Level */}
                      <div className="text-xs font-bold relative z-10" style={{ color: currentCategory.color }}>
                        {skill.level}%
                      </div>
                    </div>

                    {/* Skill Name Tooltip */}
                    <motion.div
                      className="border backdrop-blur-md absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap"
                      style={{
                        backgroundColor: `${currentCategory.color}20`,
                        borderColor: currentCategory.color,
                        color: currentCategory.color,
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        y: hoveredSkill === skill.name ? 0 : -10,
                      }}
                    >
                      {skill.name}
                      <div
                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                        style={{ backgroundColor: `${currentCategory.color}20` }}
                      />
                    </motion.div>

                    {/* Floating Particles around hovered skill */}
                    {hoveredSkill === skill.name && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ backgroundColor: currentCategory.color }}
                            animate={{
                              x: [0, Math.cos((i * 45 * Math.PI) / 180) * 30],
                              y: [0, Math.sin((i * 45 * Math.PI) / 180) * 30],
                              opacity: [1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Category Stats */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            className={`p-4 rounded-xl border backdrop-blur-md transition-all duration-300 ${
              selectedCategory === index ? "border-cyan-500/50 bg-cyan-500/10" : "border-gray-700/50 bg-black/20"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <category.icon className="w-5 h-5" style={{ color: category.color }} />
              <span className="font-medium text-white">{category.name}</span>
            </div>
            <div className="text-sm text-gray-400">{category.skills.length} Technologies</div>
            <div className="text-xs text-gray-500 mt-1">
              Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
