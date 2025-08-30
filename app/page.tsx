"use client"
import { useEffect, useState } from "react"
import { Code, Users, Cpu, Zap, ArrowRight, Lock, Database, Server, Shield } from "lucide-react"
import { motion } from "framer-motion"
import TypingEffect from "@/components/typing-effect"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import EventCard from "@/components/event-card"
import SectionHeading from "@/components/section-heading"
import JoinButton from "@/components/join-button"
import PremiumButton from "@/components/premium-button"
import CustomShieldLogo from "@/components/custom-shield-logo"

export default function Home() {
  // Avoid SSR/client mismatch: render random-dependent visuals only after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0" />

        {/* Hero Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <HeroAnimation />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  <span className="block text-white">Atria</span>
                  <motion.span className="block text-green-400 mt-1">Cyber Security Club</motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl text-gray-300 max-w-3xl"
              >
                <TypingEffect
                  text="Defending the digital frontier through knowledge, skills, and innovation."
                  speed={30}
                  className="mb-2"
                />
                <p className="mt-2">Join us to explore the world of cybersecurity at Atria Institute of Technology.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <div className="inline-block order-1 self-center sm:self-auto">
                  <PremiumButton
                    href="/about"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Learn More
                  </PremiumButton>
                </div>

                <div className="inline-block w-full sm:w-auto">
                  <div className="flex justify-center sm:justify-start">
                    <JoinButton variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 w-full sm:w-auto">
                      Join The Club
                    </JoinButton>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:flex justify-center items-center relative"
            >
              <div className="relative w-96 h-96">
                {/* Animated hexagon grid */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`hex-${i}`}
                      className="absolute w-32 h-32"
                      style={{
                        top: `${Math.sin((i * Math.PI) / 3) * 120 + 160}px`,
                        left: `${Math.cos((i * Math.PI) / 3) * 120 + 160}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.7, 0] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                          stroke="rgba(0, 255, 128, 0.5)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Central shield */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <CustomShieldLogo size={234} withPulse={true} />
                </motion.div>

                {/* Binary data flowing around shield (client-only to prevent hydration mismatch) */}
                {mounted && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={`binary-${i}`}
                        className="absolute whitespace-nowrap text-green-500/40 font-mono text-xs"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: [0, Math.random() * 50 - 25],
                          y: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: Math.random() * 2,
                        }}
                      >
                        {Array.from({ length: 8 })
                          .map(() => (Math.random() > 0.5 ? "0" : "1"))
                          .join("")}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Orbiting security icons - using normal Shield icon */}
                {[
                  { icon: Lock, delay: 0 },
                  { icon: Database, delay: 2 },
                  { icon: Server, delay: 4 },
                  { icon: Shield, delay: 6 },
                ].map((item, index) => (
                  <motion.div
                    key={`icon-${index}`}
                    className="absolute w-12 h-12 flex items-center justify-center bg-black/50 rounded-full border border-green-500/30"
                    initial={{
                      x: 160,
                      y: 160,
                    }}
                    animate={{
                      x: [
                        160 + Math.cos((index * Math.PI) / 2) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + Math.PI / 4) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + Math.PI / 2) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + (3 * Math.PI) / 4) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + Math.PI) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + (5 * Math.PI) / 4) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + (6 * Math.PI) / 4) * 140,
                        160 + Math.cos((index * Math.PI) / 2 + (7 * Math.PI) / 4) * 140,
                        160 + Math.cos((index * Math.PI) / 2) * 140,
                      ],
                      y: [
                        160 + Math.sin((index * Math.PI) / 2) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + Math.PI / 4) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + Math.PI / 2) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + (3 * Math.PI) / 4) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + Math.PI) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + (5 * Math.PI) / 4) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + (6 * Math.PI) / 4) * 140,
                        160 + Math.sin((index * Math.PI) / 2 + (7 * Math.PI) / 4) * 140,
                        160 + Math.sin((index * Math.PI) / 2) * 140,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      delay: item.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <item.icon className="h-6 w-6 text-green-400" />
                  </motion.div>
                ))}

                {/* Binary data particles (client-only to prevent hydration mismatch) */}
                {mounted && (
                  <>
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute text-xs font-mono text-green-500/70"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          delay: Math.random() * 5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      >
                        {Math.random() > 0.5 ? "0" : "1"}
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            description="Empowering students with cybersecurity knowledge and skills through various activities and initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CustomShieldLogo,
                title: "Security Training",
                description:
                  "Comprehensive training sessions on various cybersecurity topics, from basics to advanced techniques.",
                isCustom: true,
              },
              {
                icon: Code,
                title: "CTF Competitions",
                description:
                  "Regular Capture The Flag competitions to test and improve your hacking and defense skills.",
              },
              {
                icon: Users,
                title: "Networking",
                description:
                  "Connect with industry professionals and like-minded students interested in cybersecurity.",
              },
              {
                icon: Cpu,
                title: "Hands-on Labs",
                description:
                  "Practical labs and workshops to gain real-world experience with security tools and techniques.",
              },
              {
                icon: Zap,
                title: "Hackathons",
                description: "Participate in cybersecurity hackathons to solve real-world security challenges.",
              },
              {
                icon: CustomShieldLogo,
                title: "Security Research",
                description: "Opportunities to engage in cybersecurity research projects and publish your findings.",
                isCustom: true,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.isCustom ? (
                  <FeatureCard
                    icon={CustomShieldLogo}
                    title={feature.title}
                    description={feature.description}
                    isCustomIcon={true}
                  />
                ) : (
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <SectionHeading
              title="Upcoming Events"
              description="Join us for our upcoming cybersecurity events and activities."
              align="left"
              className="mb-0"
            />
            <div className="hidden md:block">
              <PremiumButton
                href="/events"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View All Events
              </PremiumButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Seminar",
                description: "2010 Flash crash , Spoofing and Cyber Security in Financial Sector ",
                date: "May 7, 2025",
                time: "9:30 AM - 12:30 PM",
                location: "Coming Soon",
                type: "seminar",
                link: "/events/network-security-workshop",
              },
            
              {
                title: "Tech Seminar-II",
                description: "MLSecOps and DevSecOps",
                date: "May 4, 2025",
                time: "9:30 AM - 12:30 PM",
                location: "Coming Soon",
                type: "seminar",
                link: "/events/network-security-workshop",
              },
              {
                title: "Flagship Event",
                description: "Comig Soon",
                date: "June 25, 2025",
                time: "2:00 PM - 6:00 PM",
                location: "Coming Soon",
                type: "competition",
                link: "/events/network-security-workshop",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  type={event.type as any}
                  link={event.link}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center md:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <PremiumButton
              href="/events"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View All Events
            </PremiumButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-px bg-green-500/10"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: 0,
                    right: 0,
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                    left: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="md:flex md:items-center md:justify-between relative z-10">
              <div className="md:max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to join our community?</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Become a member of Atria Cyber Security Club and start your journey in the exciting world of
                  cybersecurity.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center md:block w-full md:w-auto">
                <JoinButton
                  className="w-auto bg-green-500 hover:bg-green-600 text-white"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Join Now
                </JoinButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

