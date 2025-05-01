"use client"

import { useEffect, useRef } from "react"

interface NetworkAnimationProps {
  color?: string
  nodeCount?: number
  connectionDistance?: number
  speed?: number
}

export default function NetworkAnimation({
  color = "rgba(0, 255, 128, 0.8)",
  nodeCount = 80,
  connectionDistance = 150,
  speed = 1,
}: NetworkAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let w: number, h: number

    // Node class to represent points in the network
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * speed
        this.vy = (Math.random() - 0.5) * speed
        this.radius = Math.random() * 2 + 1
      }

      update() {
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx = -this.vx
        if (this.y < 0 || this.y > h) this.vy = -this.vy
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx!.fillStyle = color
        ctx!.fill()
      }
    }

    // Initialize nodes
    let nodes: Node[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      w = canvas.width
      h = canvas.height

      // Reinitialize nodes on resize
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node())
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - distance / connectionDistance

            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = color.replace(")", `, ${opacity})`).replace("rgba", "rgba")
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx!.fillRect(0, 0, w, h)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Draw connections between nodes
      drawConnections()

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
  }, [color, nodeCount, connectionDistance, speed])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

