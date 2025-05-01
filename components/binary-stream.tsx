"use client"

import { useEffect, useRef } from "react"

interface BinaryStreamProps {
  color?: string
  speed?: number
  density?: number
}

export default function BinaryStream({ color = "#0f0", speed = 1, density = 0.05 }: BinaryStreamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number, h: number

    // Stream class
    class Stream {
      x: number
      y: number
      value: string
      speed: number
      fontSize: number

      constructor(x: number) {
        this.x = x
        this.y = Math.random() * h - h
        this.value = Math.random() > 0.5 ? "0" : "1"
        this.speed = Math.random() * 5 + 1 * speed
        this.fontSize = Math.floor(Math.random() * 16) + 10
      }

      update() {
        this.y += this.speed

        // Reset when it goes off screen
        if (this.y > h) {
          this.y = -20
          this.value = Math.random() > 0.5 ? "0" : "1"
        }

        // Randomly change value
        if (Math.random() < 0.1) {
          this.value = Math.random() > 0.5 ? "0" : "1"
        }
      }

      draw() {
        ctx!.fillStyle = color
        ctx!.font = `${this.fontSize}px monospace`
        ctx!.fillText(this.value, this.x, this.y)
      }
    }

    // Initialize streams
    let streams: Stream[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      w = canvas.width
      h = canvas.height

      // Calculate number of streams based on canvas width and density
      const streamCount = Math.floor(w * density)
      const spacing = w / streamCount

      // Reinitialize streams on resize
      streams = []
      for (let i = 0; i < streamCount; i++) {
        streams.push(new Stream(i * spacing))
      }
    }

    const animate = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx!.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx!.fillRect(0, 0, w, h)

      // Update and draw streams
      streams.forEach((stream) => {
        stream.update()
        stream.draw()
      })

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
  }, [color, speed, density])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

