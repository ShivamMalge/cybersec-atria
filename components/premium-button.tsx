"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface PremiumButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  type?: "button" | "submit" | "reset"
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export default function PremiumButton({
  children,
  href,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  icon,
  iconPosition = "right",
}: PremiumButtonProps) {
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  )

  const buttonElement = (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative group">
      {/* Removed glow effect div */}
      <Button
        onClick={onClick}
        className={`relative ${className} flex items-center justify-center`}
        variant={variant}
        size={size}
        type={type}
      >
        {buttonContent}
      </Button>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    )
  }

  return buttonElement
}

