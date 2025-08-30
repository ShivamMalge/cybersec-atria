"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import PremiumButton from "@/components/premium-button"
import CustomShieldLogo from "@/components/custom-shield-logo"
import { createPortal } from "react-dom"

interface ApplicationFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationFormModal({ isOpen, onClose }: ApplicationFormModalProps) {
  const [formStep, setFormStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormStep(1)
      onClose()
    }, 3000)
  }

  const nextStep = () => setFormStep((prev) => prev + 1)
  const prevStep = () => setFormStep((prev) => prev - 1)

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-auto bg-gray-900 rounded-xl border border-green-500/30 shadow-xl"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/50" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500/50" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-500/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-500/50" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>

            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <CustomShieldLogo size={42} className="mr-3" />
                <h2 className="text-2xl font-bold text-white">Club Application Form</h2>
              </div>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  >
                    <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-medium text-white mb-3">Application Submitted!</h3>
                  <p className="text-gray-400 text-center max-w-md">
                    Thank you for applying to join the Atria Cyber Security Club. We'll review your application and get
                    back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress indicator */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                            formStep >= step
                              ? "border-green-500 bg-green-500/20 text-green-400"
                              : "border-gray-700 bg-gray-800/50 text-gray-500"
                          }`}
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                    <div className="relative h-1 bg-gray-800 rounded-full">
                      <motion.div
                        className="absolute h-full bg-green-500 rounded-full"
                        initial={{ width: `${(formStep - 1) * 50}%` }}
                        animate={{ width: `${(formStep - 1) * 50}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-medium text-white mb-4">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">
                              First name <span className="text-red-500">*</span>
                            </Label>
                            <Input id="first-name" required className="bg-gray-800/50 border-gray-700" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">
                              Last name <span className="text-red-500">*</span>
                            </Label>
                            <Input id="last-name" required className="bg-gray-800/50 border-gray-700" />
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input id="email" type="email" required className="bg-gray-800/50 border-gray-700" />
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input id="phone" type="tel" className="bg-gray-800/50 border-gray-700" />
                        </div>

                        <div className="space-y-2 mb-6">
                          <Label>Gender</Label>
                          <RadioGroup defaultValue="male" className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="flex justify-end">
                          <PremiumButton onClick={nextStep} className="bg-green-500 hover:bg-green-600 text-white">
                            Next Step
                          </PremiumButton>
                        </div>
                      </motion.div>
                    )}

                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-medium text-white mb-4">Academic Information</h3>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="department">
                            Department <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger className="bg-gray-800/50 border-gray-700">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cs">Computer Science</SelectItem>
                              <SelectItem value="is">Information Science</SelectItem>
                              <SelectItem value="ec">Electronics & Communication</SelectItem>
                              <SelectItem value="me">Mechanical Engineering</SelectItem>
                              <SelectItem value="cv">Civil Engineering</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="year">
                            Year of Study <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger className="bg-gray-800/50 border-gray-700">
                              <SelectValue placeholder="Select your year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">First Year</SelectItem>
                              <SelectItem value="2">Second Year</SelectItem>
                              <SelectItem value="3">Third Year</SelectItem>
                              <SelectItem value="4">Fourth Year</SelectItem>
                              <SelectItem value="pg">Post Graduate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="usn">
                            University Seat Number (USN) <span className="text-red-500">*</span>
                          </Label>
                          <Input id="usn" required className="bg-gray-800/50 border-gray-700" />
                        </div>

                        <div className="space-y-2 mb-6">
                          <Label>Experience Level in Cybersecurity</Label>
                          <RadioGroup defaultValue="beginner" className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="beginner" id="beginner" />
                              <Label htmlFor="beginner">Beginner - New to cybersecurity</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="intermediate" id="intermediate" />
                              <Label htmlFor="intermediate">Intermediate - Some knowledge and experience</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="advanced" id="advanced" />
                              <Label htmlFor="advanced">Advanced - Significant experience in cybersecurity</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-gray-700 text-gray-300 hover:bg-gray-800"
                          >
                            Back
                          </Button>
                          <PremiumButton onClick={nextStep} className="bg-green-500 hover:bg-green-600 text-white">
                            Next Step
                          </PremiumButton>
                        </div>
                      </motion.div>
                    )}

                    {formStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-medium text-white mb-4">Interests & Motivation</h3>

                        <div className="space-y-2 mb-4">
                          <Label>Areas of Interest (Select all that apply)</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {[
                              "Network Security",
                              "Web Security",
                              "Cryptography",
                              "Ethical Hacking",
                              "Digital Forensics",
                              "Malware Analysis",
                              "Cloud Security",
                              "IoT Security",
                              "Mobile Security",
                              "Security Research",
                            ].map((interest) => (
                              <div key={interest} className="flex items-center space-x-2">
                                <Checkbox id={interest.toLowerCase().replace(/\s+/g, "-")} />
                                <Label htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}>{interest}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="motivation">
                            Why do you want to join the Cyber Security Club? <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="motivation"
                            required
                            rows={3}
                            className="bg-gray-800/50 border-gray-700 resize-none"
                            placeholder="Share your motivation and what you hope to gain from the club..."
                          />
                        </div>

                        <div className="space-y-2 mb-6">
                          <Label htmlFor="experience">Any previous cybersecurity experience or projects?</Label>
                          <Textarea
                            id="experience"
                            rows={3}
                            className="bg-gray-800/50 border-gray-700 resize-none"
                            placeholder="Describe any relevant experience, projects, or certifications..."
                          />
                        </div>

                        <div className="flex items-start space-x-2 mb-6">
                          <Checkbox id="terms" required />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="terms" className="text-sm text-gray-400">
                              I agree to the club's{" "}
                              <a href="#" className="text-green-400 hover:underline">
                                terms and conditions
                              </a>{" "}
                              and understand that my information will be handled according to the club's{" "}
                              <a href="#" className="text-green-400 hover:underline">
                                privacy policy
                              </a>
                              .
                            </Label>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-gray-700 text-gray-300 hover:bg-gray-800"
                          >
                            Back
                          </Button>
                          <PremiumButton
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white"
                            icon={<Send className="h-4 w-4" />}
                          >
                            Submit Application
                          </PremiumButton>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  // Render in a portal to escape any ancestor stacking contexts / overflow
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body)
  }

  return null
}

