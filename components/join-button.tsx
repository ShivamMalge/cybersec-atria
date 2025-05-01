"use client"

import type React from "react"

import { useState } from "react"
import PremiumButton from "@/components/premium-button"
import ApplicationFormModal from "@/components/application-form-modal"
import { Shield } from "lucide-react" // Using normal Shield icon instead of custom logo

interface JoinButtonProps {
  className?: string
  children?: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  icon?: React.ReactNode
}

export default function JoinButton({
  className = "",
  children = "Join The Club",
  variant = "default",
  size = "default",
  icon = <Shield className="h-4 w-4" />, // Changed to normal Shield icon
}: JoinButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <PremiumButton onClick={openModal} className={className} variant={variant} size={size} icon={icon}>
        {children}
      </PremiumButton>

      <ApplicationFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

