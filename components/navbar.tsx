"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Lock, Terminal, Wifi } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import CustomShieldLogo from "@/components/custom-shield-logo"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [securityStatus, setSecurityStatus] = useState("Secure")
  const [statusIcon, setStatusIcon] = useState(<Lock className="h-4 w-4 text-green-400" />)
  const pathname = usePathname()
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simulate security status changes
  useEffect(() => {
    const statuses = [
      { text: "Secure", icon: <Lock className="h-4 w-4 text-green-400" /> },
      { text: "Scanning", icon: <Terminal className="h-4 w-4 text-blue-400" /> },
      { text: "Protected", icon: <CustomShieldLogo size={24} className="text-green-400" /> },
      { text: "Monitoring", icon: <Wifi className="h-4 w-4 text-yellow-400" /> },
    ]

    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % statuses.length
      setSecurityStatus(statuses[index].text)
      setStatusIcon(statuses[index].icon)

      // Trigger a "scan" animation
      if (statusRef.current) {
        statusRef.current.classList.add("animate-pulse")
        setTimeout(() => {
          if (statusRef.current) {
            statusRef.current.classList.remove("animate-pulse")
          }
        }, 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="mr-0.5" // Further reduced margin to fix spacing
                >
                  <CustomShieldLogo size={54} />
                </motion.div>
                <motion.span className="font-bold text-xl tracking-tight text-green-400">ACSC</motion.span>
              </Link>
            </motion.div>

            {/* Security Status Indicator */}
            <div
              ref={statusRef}
              className="hidden md:flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full border border-green-500/30"
            >
              {statusIcon}
              <span className="text-xs text-green-400 font-mono">STATUS: {securityStatus}</span>
              <div
                className={`h-2 w-2 rounded-full ${
                  securityStatus === "Secure"
                    ? "bg-green-500"
                    : securityStatus === "Scanning"
                      ? "bg-blue-500"
                      : securityStatus === "Protected"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                }`}
              ></div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <motion.div key={link.name} whileHover={{ y: -3, scale: 1.05 }} whileTap={{ y: 0, scale: 0.95 }}>
                    <Link
                      href={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        pathname === link.path
                          ? "text-green-400 border-b-2 border-green-500"
                          : "text-gray-300 hover:text-green-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-green-400"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isOpen ? "close" : "open"}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-b border-green-500/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.path
                          ? "text-green-400 bg-gray-900"
                          : "text-gray-300 hover:bg-gray-800 hover:text-green-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Security Status in Mobile Menu */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                  className="mt-4 flex items-center space-x-2 px-3 py-2"
                >
                  {statusIcon}
                  <span className="text-xs text-green-400 font-mono">STATUS: {securityStatus}</span>
                  <div
                    className={`h-2 w-2 rounded-full ${
                      securityStatus === "Secure"
                        ? "bg-green-500"
                        : securityStatus === "Scanning"
                          ? "bg-blue-500"
                          : securityStatus === "Protected"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                    }`}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

