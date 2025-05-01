"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string | ReactNode
  align?: "left" | "center" | "right"
  className?: string
}

export default function SectionHeading({ title, description, align = "center", className = "" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-16 ${alignmentClasses[align]} ${className}`}
    >
      <div className="inline-block">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative">
          {title}
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-green-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </h2>
      </div>
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto"
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  )
}

