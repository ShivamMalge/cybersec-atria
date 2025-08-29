"use client"
import { Lock, Server, Database, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import SectionHeading from "@/components/section-heading"
import UICard from "@/components/ui-card"
import CustomShieldLogo from "@/components/custom-shield-logo"

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our Club"
        description="Learn about our mission, vision, and the team behind Atria Cyber Security Club."
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
                Our Mission
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At Atria Cyber Security Club, our mission is to foster a community of cybersecurity enthusiasts who are
                passionate about learning, sharing knowledge, and developing skills in the field of information
                security.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                We aim to bridge the gap between theoretical knowledge and practical application by providing hands-on
                experience through workshops, competitions, and real-world projects.
              </p>
              <p className="text-gray-300 text-lg">
                Our goal is to prepare students for the challenges of the cybersecurity industry and to create awareness
                about the importance of digital security in today's interconnected world.
              </p>
            </motion.div>
            <motion.div
              className="relative h-80 md:h-96 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black rounded-xl border border-green-500/30 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <CustomShieldLogo size={120} className="text-green-400" />
                </motion.div>

                {/* Animated circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`circle-${i}`}
                    className="absolute rounded-full border border-green-500/30"
                    style={{
                      width: `${(i + 1) * 100}px`,
                      height: `${(i + 1) * 100}px`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}

                {/* Binary data flowing in background */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={`binary-${i}`}
                      className="absolute whitespace-nowrap text-green-500 font-mono text-xs"
                      style={{
                        top: `${i * 10}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `translateX(-${Math.random() * 100}%)`,
                      }}
                    >
                      {Array.from({ length: 20 })
                        .map((_, j) => (Math.random() > 0.5 ? "0" : "1"))
                        .join("")}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our History"
            description="The journey of Atria Cyber Security Club from its inception to where we are today."
          />

          <div className="space-y-12">
            {[
              {
                year: "2022",
                label: "Foundation Year",
                description:
                  "The club was founded by a group of passionate students and faculty members with the aim of promoting cybersecurity awareness and education at Atria Institute of Technology.",
              },
              {
                year: "2023",
                label: "Growth Phase",
                description:
                  "The club expanded its activities to include regular workshops, guest lectures, and participation in national-level CTF competitions, gaining recognition within the cybersecurity community.",
              },
              {
                year: "2024",
                label: "Expansion Year",
                description:
                  "We established partnerships with industry leaders and organized our first inter-college cybersecurity symposium, attracting participants from across the state.",
              },
              {
                year: "2025",
                label: "Present Day",
                description:
                  "Today, we continue to grow with a focus on research, innovation, and preparing our members for the evolving challenges in the cybersecurity landscape.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1">
                  <div className="text-center md:text-right">
                    <motion.h3 className="text-2xl font-bold text-green-400" whileHover={{ scale: 1.05 }}>
                      {item.year}
                    </motion.h3>
                    <p className="text-gray-400">{item.label}</p>
                  </div>
                </div>
                <motion.div
                  className="hidden md:block w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"
                  whileInView={{
                    scaleX: [0, 1],
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <div className="md:col-span-1">
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Focus Areas"
            description="We specialize in various domains of cybersecurity to provide comprehensive knowledge and skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Network Security",
                description:
                  "Protecting network infrastructure and connections from unauthorized access, misuse, and modifications.",
              },
              {
                icon: Server,
                title: "Web Security",
                description:
                  "Identifying and mitigating vulnerabilities in web applications and services to prevent attacks.",
              },
              {
                icon: Database,
                title: "Data Protection",
                description:
                  "Implementing strategies and techniques to secure sensitive data from breaches and unauthorized access.",
              },
              {
                icon: Cpu,
                title: "System Security",
                description: "Securing operating systems and hardware from threats, vulnerabilities, and attacks.",
              },
              {
                icon: Globe,
                title: "Cloud Security",
                description: "Ensuring the security of cloud-based systems, applications, and infrastructure.",
              },
              {
                icon: CustomShieldLogo,
                title: "Ethical Hacking",
                description:
                  "Learning offensive security techniques to identify and fix vulnerabilities before malicious hackers can exploit them.",
                isCustom: true,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UICard title={item.title} className="h-full">
                  <div>
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-4"
                    >
                      {"isCustom" in item ? (
                        <div className="-mt-6">
                          <CustomShieldLogo size={86} className="text-green-400" />
                        </div>
                      ) : (
                        <item.icon className="h-12 w-12 text-green-400" />
                      )}
                    </motion.div>
                    <p className={`text-gray-400 ${"isCustom" in item ? "-mt-4" : ""}`}>{item.description}</p>
                  </div>
                </UICard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

