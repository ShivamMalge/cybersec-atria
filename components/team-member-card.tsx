import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  imageSrc: string
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export default function TeamMemberCard({ name, role, bio, imageSrc, socialLinks }: TeamMemberCardProps) {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{name}</CardTitle>
        <CardDescription className="text-green-400 font-medium">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{bio}</p>
      </CardContent>
      {socialLinks && (
        <CardFooter className="flex gap-4">
          {socialLinks.github && (
            <Link href={socialLinks.github} className="text-gray-400 hover:text-green-400">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {socialLinks.linkedin && (
            <Link href={socialLinks.linkedin} className="text-gray-400 hover:text-green-400">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {socialLinks.twitter && (
            <Link href={socialLinks.twitter} className="text-gray-400 hover:text-green-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

