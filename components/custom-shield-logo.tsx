"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CustomShieldLogoProps {
  size?: number
  className?: string
  interactive?: boolean
  withPulse?: boolean
}

export default function CustomShieldLogo({
  size = 68,
  className = "",
  interactive = true,
  withPulse = false,
}: CustomShieldLogoProps) {
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
      className={`relative ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {withPulse && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(16, 185, 129, 0.3)",
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
      )}

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
        className="relative z-10"
      >
        <Image
          src="/images/shield-logo.png"
          alt="Cyber Security Shield"
          width={size}
          height={size}
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}

