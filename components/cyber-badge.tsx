"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface CyberBadgeProps {
  children: ReactNode
  variant?: "default" | "outline" | "secondary" | "destructive"
  className?: string
  animated?: boolean
}

export default function CyberBadge({
  children,
  variant = "default",
  className = "",
  animated = true,
}: CyberBadgeProps) {
  const baseClasses = "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30"

  if (!animated) {
    return (
      <Badge variant={variant} className={`${baseClasses} ${className}`}>
        {children}
      </Badge>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Badge variant={variant} className={`${baseClasses} ${className}`}>
        <motion.span animate={{ opacity: [1, 0.8, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          {children}
        </motion.span>
      </Badge>
    </motion.div>
  )
}

