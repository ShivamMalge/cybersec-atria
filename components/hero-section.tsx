"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"
import BinaryStream from "@/components/binary-stream"
import TypingEffect from "@/components/typing-effect"
import AnimatedShield from "@/components/animated-shield"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      {/* Binary streams in background */}
      <BinaryStream color="rgba(0, 255, 0, 0.3)" speed={1.5} density={0.02} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="text-center md:text-left md:max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-white">Atria</span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mt-1"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                style={{ backgroundSize: "200%" }}
              >
                Cyber Security Club
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl"
          >
            <TypingEffect
              text="Defending the digital frontier through knowledge, skills, and innovation."
              speed={30}
              className="mb-2"
            />
            <p className="mt-2">Join us to explore the world of cybersecurity at Atria Institute of Technology.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
              >
                <Link href="/contact">
                  Join The Club <Shield className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated shield logo in background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 -bottom-20 md:right-20 md:bottom-0 z-0"
      >
        <AnimatedShield size={300} color="#10b981" pulseColor="#10b981" />
      </motion.div>
    </div>
  )
}

