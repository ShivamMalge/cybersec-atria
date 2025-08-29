"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PageHeader from "@/components/page-header"
import AnimatedButton from "@/components/animated-button"
import CyberBadge from "@/components/cyber-badge"
import JoinButton from "@/components/join-button"

const projects = [
  {
    id: 1,
    title: "Text2Bat",
    description:
      "text2bat is a customizable Python tool designed to help web penetration testers convert normal text commands into batch (BAT) scripts efficiently. This tool offers an interactive interface for users to select various operations and generate BAT scripts quickly, making it a valuable addition to the toolkit of any pentester.",
    image: "/Project1.jpg",
    tags: ["PenTesing", "Web Security", "Python"],
    github: "https://github.com/Dev-0618/text2bat",
    
  },
  {
    id: 2,
    title: "EvilTwin-ESP8266",
    description: "ESP-EVTwin is an educational project that allows you to deauthenticate a target WiFi access point and create an Evil-Twin AP to capture passwords with verification against the original access point. You can perform both attacks simultaneously. This tool is designed for educational purposes only; please ensure that you comply with local regulations before using it.",
    image: "/project2.jpg",
    tags: ["deauth", "Python", "IoT"],
    github: "https://github.com/Dev-0618/EvilTwin-ESP8266",
  },
  {
    id: 3,
    title: "BLE-Spammer",
    description: "This project involves using an Arduino UNO Mini paired with an HM-10 module to implement a Bluetooth Low Energy (BLE) spammer. The setup is designed to send continuous BLE advertisements, simulating multiple Bluetooth devices. This can be useful for testing BLE-based systems, network behavior under heavy loads, or exploring BLE communication. also this is a base prototype of how FLIPPER-ZERO BLE SPAMMER works",
    image: "/project3.png",
    tags: ["Arduino", "HM-10", "BLE"],
    github: "https://github.com/Dev-0618/BLE-Spammer",
    demo: "https://demo.example.com",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Explore the innovative cybersecurity projects developed by our club members."
      />

      {/* Projects Grid */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <CyberBadge key={tag}>{tag}</CyberBadge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <AnimatedButton
                      variant="outline"
                      size="sm"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                      asChild
                    >
                      <Link href={project.github} className="flex items-center">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </AnimatedButton>
                    {project.demo && (
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                        asChild
                      >
                        <Link href={project.demo} className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                        </Link>
                      </AnimatedButton>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-black rounded-2xl p-8 md:p-12 border border-green-500/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute h-1 w-1 rounded-full bg-green-500/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>

            <div className="md:flex md:items-center md:justify-between relative z-10">
              <div className="md:max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Want to contribute?</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Have an idea for a cybersecurity project? Join our club and turn your ideas into reality with the
                  support of like-minded peers and mentors.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center md:block w-full md:w-auto">
                <JoinButton
                  className="w-auto bg-green-500 hover:bg-green-600 text-white"
                  icon={<Shield className="h-4 w-4" />}
                >
                  Get Started
                </JoinButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

