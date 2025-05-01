"use client"

import { useEffect, useRef } from "react"

interface CodeRainProps {
  speed?: number
  density?: number
  color?: string
}

export default function CodeRain({ speed = 1, density = 0.05, color = "#0f0" }: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number, h: number
    let columns: number[]
    let drops: number[]
    const fontSize = 14
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      w = canvas.width
      h = canvas.height

      // Calculate number of columns based on canvas width and font size
      const columnCount = Math.floor(w / fontSize)

      // Initialize columns and drops arrays
      columns = Array(columnCount).fill(0)
      drops = Array(columnCount).fill(1)
    }

    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
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

        // Move the drop down
        drops[i] += speed * 0.5
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
  }, [speed, density, color])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

