import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  title: string
  description: string
  date: string
  time: string
  location: string
  type: "workshop" | "competition" | "seminar" | "meetup"
  link?: string
  isPast?: boolean
}

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  type,
  link,
  isPast = false,
}: EventCardProps) {
  const badgeColors = {
    workshop: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
    competition: "bg-red-500/20 text-red-400 hover:bg-red-500/30",
    seminar: "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30",
    meetup: "bg-green-500/20 text-green-400 hover:bg-green-500/30",
  }

  return (
    <Card
      className={`bg-gray-900/50 border-gray-800 transition-all duration-300 ${isPast ? "opacity-70" : "hover:border-green-500/50"}`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <Badge className={badgeColors[type]}>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-gray-400">
          <Calendar className="h-4 w-4 mr-2 text-green-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <Clock className="h-4 w-4 mr-2 text-green-400" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <MapPin className="h-4 w-4 mr-2 text-green-400" />
          <span>{location}</span>
        </div>
      </CardContent>
      {!isPast && link && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10">
            <Link href={link}>Register Now</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

