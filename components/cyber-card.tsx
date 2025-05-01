"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CyberCardProps {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  hoverEffect?: boolean
  borderColor?: string
  cornerAccents?: boolean
}

export default function CyberCard({
  title,
  description,
  children,
  footer,
  className = "",
  hoverEffect = true,
  borderColor = "border-gray-800 hover:border-green-500/50",
  cornerAccents = true,
}: CyberCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={`bg-gray-900/50 ${borderColor} transition-all duration-300 h-full relative ${className}`}>
        {cornerAccents && (
          <>
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500/50" />

            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500/50" />

            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500/50" />

            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500/50" />
          </>
        )}

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

