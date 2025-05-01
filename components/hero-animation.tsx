"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let dataStreams: DataStream[] = []
    let gridLines: GridLine[] = []
    let hexagons: Hexagon[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initElements()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      blinkRate: number
      blinkCounter: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.3 // Slower speed
        this.speedY = (Math.random() - 0.5) * 0.3 // Slower speed
        this.color = `rgba(0, ${Math.floor(Math.random() * 155) + 100}, 0, 1)`
        this.blinkRate = Math.floor(Math.random() * 100) + 20
        this.blinkCounter = 0
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Blinking effect
        this.blinkCounter++
        if (this.blinkCounter >= this.blinkRate) {
          this.opacity = this.opacity > 0.3 ? 0.1 : Math.random() * 0.5 + 0.3
          this.blinkCounter = 0
        }
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = this.color.replace("1)", `${this.opacity})`)
        ctx!.fill()
      }
    }

    class DataStream {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      width: number
      characters: string[]
      characterSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -100 // Start above the canvas
        this.length = Math.random() * 200 + 100
        this.speed = Math.random() * 2 + 1 // Slower speed
        this.opacity = Math.random() * 0.3 + 0.2
        this.width = Math.random() * 1.5 + 0.5
        this.characterSize = Math.floor(Math.random() * 12) + 8

        // Generate random binary characters
        this.characters = []
        const charCount = Math.floor(this.length / this.characterSize)
        for (let i = 0; i < charCount; i++) {
          this.characters.push(Math.random() > 0.5 ? "0" : "1")
        }
      }

      update() {
        this.y += this.speed

        // Remove when it goes off screen
        if (this.y > canvas.height + this.length) {
          return false
        }

        return true
      }

      draw() {
        // Draw line
        ctx!.beginPath()
        ctx!.moveTo(this.x, this.y)
        ctx!.lineTo(this.x, this.y + this.length)
        ctx!.strokeStyle = `rgba(0, 255, 0, ${this.opacity})`
        ctx!.lineWidth = this.width
        ctx!.stroke()

        // Draw characters
        ctx!.fillStyle = `rgba(0, 255, 0, ${this.opacity + 0.2})`
        ctx!.font = `${this.characterSize}px monospace`

        for (let i = 0; i < this.characters.length; i++) {
          const yPos = this.y + i * this.characterSize
          if (yPos > 0 && yPos < canvas.height) {
            ctx!.fillText(this.characters[i], this.x - this.characterSize / 4, yPos)
          }
        }
      }
    }

    class GridLine {
      isHorizontal: boolean
      position: number
      speed: number
      opacity: number
      width: number
      dashPattern: number[]

      constructor(isHorizontal: boolean) {
        this.isHorizontal = isHorizontal
        this.position = isHorizontal ? Math.random() * canvas.height : Math.random() * canvas.width
        this.speed = (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1)
        this.opacity = Math.random() * 0.2 + 0.1
        this.width = Math.random() > 0.8 ? 2 : 1
        this.dashPattern = Math.random() > 0.5 ? [5, 15] : Math.random() > 0.5 ? [10, 10] : []
      }

      update() {
        this.position += this.speed

        // Reset when it goes off screen
        if (this.isHorizontal) {
          if (this.position < 0 || this.position > canvas.height) {
            return false
          }
        } else {
          if (this.position < 0 || this.position > canvas.width) {
            return false
          }
        }

        return true
      }

      draw() {
        ctx!.beginPath()
        if (this.isHorizontal) {
          ctx!.moveTo(0, this.position)
          ctx!.lineTo(canvas.width, this.position)
        } else {
          ctx!.moveTo(this.position, 0)
          ctx!.lineTo(this.position, canvas.height)
        }

        ctx!.strokeStyle = `rgba(0, 255, 128, ${this.opacity})`
        ctx!.lineWidth = this.width

        if (this.dashPattern.length) {
          ctx!.setLineDash(this.dashPattern)
        } else {
          ctx!.setLineDash([])
        }

        ctx!.stroke()
        ctx!.setLineDash([])
      }
    }

    class Hexagon {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      pulseSpeed: number
      pulseDirection: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 20
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
        this.opacity = Math.random() * 0.2 + 0.1
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseDirection = 1
      }

      update() {
        this.rotation += this.rotationSpeed

        // Pulse opacity
        this.opacity += this.pulseSpeed * this.pulseDirection
        if (this.opacity > 0.3) {
          this.opacity = 0.3
          this.pulseDirection = -1
        } else if (this.opacity < 0.05) {
          this.opacity = 0.05
          this.pulseDirection = 1
        }

        return true
      }

      draw() {
        ctx!.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = this.rotation + (i * Math.PI) / 3
          const x = this.x + this.size * Math.cos(angle)
          const y = this.y + this.size * Math.sin(angle)

          if (i === 0) {
            ctx!.moveTo(x, y)
          } else {
            ctx!.lineTo(x, y)
          }
        }
        ctx!.closePath()
        ctx!.strokeStyle = `rgba(0, 255, 128, ${this.opacity})`
        ctx!.lineWidth = 1
        ctx!.stroke()
      }
    }

    // Initialize elements
    const initElements = () => {
      particles = []
      dataStreams = []
      gridLines = []
      hexagons = []

      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 120)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      // Initial data streams
      for (let i = 0; i < 5; i++) {
        dataStreams.push(new DataStream())
      }

      // Initial grid lines
      for (let i = 0; i < 8; i++) {
        gridLines.push(new GridLine(i % 2 === 0))
      }

      // Initial hexagons
      for (let i = 0; i < 5; i++) {
        hexagons.push(new Hexagon())
      }
    }

    // Draw connecting lines between particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)

            // Calculate opacity based on distance
            const opacity = 0.15 * (1 - distance / 150)
            ctx!.strokeStyle = `rgba(0, 255, 0, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw grid lines
      gridLines = gridLines.filter((line) => line.update())
      gridLines.forEach((line) => line.draw())

      // Occasionally add new grid line
      if (Math.random() < 0.02 && gridLines.length < 15) {
        gridLines.push(new GridLine(Math.random() > 0.5))
      }

      // Update and draw hexagons
      hexagons = hexagons.filter((hex) => hex.update())
      hexagons.forEach((hex) => hex.draw())

      // Occasionally add new hexagon
      if (Math.random() < 0.005 && hexagons.length < 8) {
        hexagons.push(new Hexagon())
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawConnections()

      // Update and draw data streams
      dataStreams = dataStreams.filter((stream) => stream.update())
      dataStreams.forEach((stream) => stream.draw())

      // Add occasional new data stream
      if (Math.random() < 0.02 && dataStreams.length < 15) {
        dataStreams.push(new DataStream())
      }

      // Add occasional horizontal scan line
      if (Math.random() < 0.008) {
        const y = Math.random() * canvas.height
        const speed = Math.random() * 3 + 5

        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(canvas.width, y)
        ctx!.strokeStyle = "rgba(0, 255, 0, 0.5)"
        ctx!.lineWidth = 2
        ctx!.stroke()
      }

      // Add occasional "security scan" circle
      if (Math.random() < 0.003) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 50 + 30

        ctx!.beginPath()
        ctx!.arc(x, y, radius, 0, Math.PI * 2)
        ctx!.strokeStyle = "rgba(0, 255, 0, 0.3)"
        ctx!.lineWidth = 2
        ctx!.stroke()

        // Add crosshair
        ctx!.beginPath()
        ctx!.moveTo(x - 15, y)
        ctx!.lineTo(x + 15, y)
        ctx!.moveTo(x, y - 15)
        ctx!.lineTo(x, y + 15)
        ctx!.strokeStyle = "rgba(0, 255, 0, 0.5)"
        ctx!.lineWidth = 1
        ctx!.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0.8 }}
        animate={{
          opacity: [0.8, 0.7, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </>
  )
}

