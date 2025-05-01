"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"

interface AnimatedShieldProps {
  size?: number
  color?: string
  pulseColor?: string
  interactive?: boolean
}

export default function AnimatedShield({
  size = 300,
  color = "#10b981",
  pulseColor = "#10b981",
  interactive = true,
}: AnimatedShieldProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Random animation trigger
  useEffect(() => {
    if (!interactive) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 8000)

    return () => clearInterval(interval)
  }, [interactive])

  return (
    <div
      className="relative"
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Pulsing circle behind shield */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: pulseColor,
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Shield icon */}
      <motion.div
        animate={
          isHovered || isAnimating
            ? {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Shield style={{ width: size, height: size, color }} className="relative z-10" />
      </motion.div>

      {/* Binary data flowing inside shield when hovered */}
      {(isHovered || isAnimating) && (
        <motion.div
          className="absolute inset-0 overflow-hidden flex items-center justify-center text-xs opacity-30 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="animate-pulse">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 20 }).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? "0" : "1"}</span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

