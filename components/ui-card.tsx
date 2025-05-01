"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface UICardProps {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function UICard({
  title,
  description,
  children,
  footer,
  className = "",
  hoverEffect = true,
}: UICardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card
        className={`bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full ${className}`}
      >
        <CardHeader>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          {description && <CardDescription className="text-gray-400">{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  )
}

