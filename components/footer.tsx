import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import CustomShieldLogo from "@/components/custom-shield-logo"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <CustomShieldLogo size={31} className="text-green-500" />
              <span className="font-bold text-xl tracking-tight text-green-400">ACSC</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Atria Cyber Security Club is dedicated to promoting cybersecurity awareness, education, and skills
              development among students at Atria Institute of Technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://github.com" className="text-gray-400 hover:text-green-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-green-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-green-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:info@atriacsc.edu" className="text-gray-400 hover:text-green-400">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {["Home", "About", "Projects", "Events", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-green-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Atria Institute of Technology</li>
              <li>ASKB Campus, Anandnagar</li>
              <li>Bengaluru - 560024</li>
              <li className="pt-2">
                <a href="mailto:info@atriacsc.edu" className="hover:text-green-400">
                  info@atriacsc.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Atria Cyber Security Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

