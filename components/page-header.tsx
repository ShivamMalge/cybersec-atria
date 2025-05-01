"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string | ReactNode
  className?: string
}

export default function PageHeader({ title, description, className = "" }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-black z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Horizontal lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-px bg-green-500/20"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Vertical lines */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute w-px bg-green-500/20"
            style={{
              left: `${10 + i * 15}%`,
              top: 0,
              bottom: 0,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
          />
        ))}

        {/* Corner brackets */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-green-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-green-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-green-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-green-500/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.div
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

