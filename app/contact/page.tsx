"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import CodeRain from "@/components/code-rain"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Send, CheckCircle, Shield, Clock, Calendar } from "lucide-react"
import PageHeader from "@/components/page-header"
import PremiumButton from "@/components/premium-button"
import CyberCard from "@/components/cyber-card"
import JoinButton from "@/components/join-button"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <>
      <CodeRain speed={0.4} density={0.03} color="rgba(0, 255, 0, 0.5)" />

      {/* Hero Section */}
      <PageHeader title="Contact Us" description="Have questions or want to join our club? Get in touch with us." />

      {/* Contact Info Cards */}
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                details: ["Atria Institute of Technology", "ASKB Campus, Anandnagar", "Bengaluru - 560024"],
              },
              {
                icon: Mail,
                title: "Email Us",
                details: ["info@atriacsc.edu", "support@atriacsc.edu", "admin@atriacsc.edu"],
              },
              {
                icon: Phone,
                title: "Call Us",
                details: ["+91 80 1234 5678", "+91 98765 43210", "Monday-Friday, 9AM-5PM"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard title={item.title} className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 p-3 rounded-full bg-green-500/10 border border-green-500/30">
                      <item.icon className="h-8 w-8 text-green-400" />
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
                Get In Touch
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you have a question about our club, want to join us, or are interested in collaborating, we're
                here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-full border border-green-500/30">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Club Hours</h3>
                    <div className="space-y-2 text-gray-400">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-full border border-green-500/30">
                    <Calendar className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Meeting Schedule</h3>
                    <div className="space-y-2 text-gray-400">
                      <p>General Meetings: Every Tuesday, 4:00 PM</p>
                      <p>Technical Workshops: Every Thursday, 5:00 PM</p>
                      <p>Project Discussions: Every Saturday, 11:00 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-full border border-green-500/30">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Join Our Community</h3>
                    <p className="text-gray-400">
                      Become a part of our growing community of cybersecurity enthusiasts. Fill out the form to start
                      your journey with us.
                    </p>
                    <div className="mt-4 inline-block">
                      {" "}
                      {/* Added inline-block to fix button animation */}
                      <JoinButton
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-500/10"
                        size="sm"
                      >
                        Apply Now
                      </JoinButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CyberCard
                title="Send us a message"
                description="Fill out the form below and we'll get back to you as soon as possible."
                className="border-green-500/30"
              >
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-medium text-white">Message Sent!</h3>
                    <p className="text-gray-400 text-center mt-2">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" required className="bg-gray-800/50 border-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" required className="bg-gray-800/50 border-gray-700" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required className="bg-gray-800/50 border-gray-700" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="membership">Club Membership</SelectItem>
                          <SelectItem value="event">Event Information</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" required rows={5} className="bg-gray-800/50 border-gray-700 resize-none" />
                    </div>

                    <div className="inline-block w-full">
                      {" "}
                      {/* Added inline-block to fix button animation */}
                      <PremiumButton
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        icon={<Send className="h-4 w-4" />}
                      >
                        Send Message
                      </PremiumButton>
                    </div>
                  </form>
                )}
              </CyberCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-xl overflow-hidden h-96 border border-green-500/30 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/50 z-10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/50 z-10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/50 z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/50 z-10" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.0325155!2d77.5916326!3d13.0325155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bdb6ede1e5%3A0xdcf1c9d129a9e34f!2sATRIA%20INSTITUTE%20OF%20TECHNOLOGY%2C%20Anandnagar%2C%20Hebbal%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1648232642036!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atria Institute of Technology Map"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  )
}

