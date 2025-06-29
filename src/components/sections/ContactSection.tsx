"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react"

export const ContactSection = () => {
  return (
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
                  <span className="text-gray-300">virkusama3@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Lahore, PAKISTAN</span>
                </div>
              </div>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Github, color: "text-white", href: "https://github.com/Usamavirk444" },
                  { icon: Linkedin, color: "text-blue-400", href: "https://www.linkedin.com/in/usama-virk/" },
                  { icon: Mail, color: "text-red-400", href: "mailto:virkusama3@gmail.com" },
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
  )
}
