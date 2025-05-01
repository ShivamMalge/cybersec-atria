"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  type?: "button" | "submit" | "reset"
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <div className="inline-block">
      {" "}
      {/* Wrap in inline-block to fix animation issues */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
        {/* Removed glow animation div */}
        <Button
          onClick={onClick}
          className={`relative ${className}`}
          variant={variant}
          size={size}
          asChild={asChild}
          type={type}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  )
}

