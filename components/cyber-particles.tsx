"use client"

import { useEffect, useRef } from "react"

interface CyberParticlesProps {
  color?: string
  particleCount?: number
  speed?: number
}

export default function CyberParticles({ color = "#0f0", particleCount = 100, speed = 1 }: CyberParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number, h: number

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = w
        if (this.x > w) this.x = 0
        if (this.y < 0) this.y = h
        if (this.y > h) this.y = 0

        // Randomly change direction occasionally
        if (Math.random() < 0.01) {
          this.speedX = (Math.random() - 0.5) * speed
          this.speedY = (Math.random() - 0.5) * speed
        }
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = color.replace(")", `, ${this.opacity})`).replace("#", "rgba(").replace("rgb", "rgba")
        ctx!.fill()
      }
    }

    // Initialize particles
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      w = canvas.width
      h = canvas.height

      // Reinitialize particles on resize
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Draw lines between particles that are close to each other
          if (distance < 100) {
            const opacity = 0.2 - distance / 500
            if (opacity > 0) {
              ctx!.beginPath()
              ctx!.moveTo(particles[i].x, particles[i].y)
              ctx!.lineTo(particles[j].x, particles[j].y)
              ctx!.strokeStyle = color.replace(")", `, ${opacity})`).replace("#", "rgba(").replace("rgb", "rgba")
              ctx!.lineWidth = 0.5
              ctx!.stroke()
            }
          }
        }
      }
    }

    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx!.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx!.fillRect(0, 0, w, h)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawLines()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Set up canvas and start animation
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, particleCount, speed])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

