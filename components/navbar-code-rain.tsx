"use client"

import { useEffect, useRef } from "react"

interface NavbarCodeRainProps {
  color?: string
  speed?: number
  density?: number
  height?: number
}

export default function NavbarCodeRain({
  color = "rgba(0, 255, 0, 0.7)",
  speed = 0.5, // Reduced speed from 1.5 to 0.5
  density = 0.08,
  height = 80,
}: NavbarCodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number
    const h = height
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 12
    let columns: number[]
    let drops: number[]
    let scanLine = -50 // Position of horizontal scan line
    const scanLineDirection = 1 // Direction of scan line movement

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = h
      w = canvas.width

      // Calculate number of columns based on canvas width and font size
      const columnCount = Math.floor(w / fontSize)

      // Initialize columns and drops arrays
      columns = Array(columnCount).fill(0)
      drops = Array(columnCount).fill(1)
    }

    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        // Choose a random character
        const text = characters[Math.floor(Math.random() * characters.length)]

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Randomly reset the drop position to top with some probability
        if (drops[i] * fontSize > h && Math.random() > 1 - density * 0.1) {
          drops[i] = 0
        }

        // Move the drop down (slower speed)
        drops[i] += speed * 0.3
      }

      // Draw horizontal scan line
      scanLine += scanLineDirection * 1 // Slower scan line
      if (scanLine > h + 50) {
        scanLine = -50
      }

      if (scanLine >= 0 && scanLine <= h) {
        ctx.beginPath()
        ctx.moveTo(0, scanLine)
        ctx.lineTo(w, scanLine)
        ctx.strokeStyle = "rgba(0, 255, 128, 0.7)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Occasionally draw a "data packet" effect (less frequent)
      if (Math.random() < 0.02) {
        const x = Math.random() * w
        const y = Math.random() * h
        const size = Math.random() * 4 + 2

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 255, 128, 0.8)"
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    // Set up canvas and start animation
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    draw()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, speed, density, height])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-16 z-40 pointer-events-none"
      style={{ height: `${height}px` }}
    />
  )
}

