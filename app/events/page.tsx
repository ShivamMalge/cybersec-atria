"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import EventCard from "@/components/event-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import AnimatedButton from "@/components/animated-button"

// Event data
const allEvents = [
  {
    id: 1,
    title: "Peer-Peer Mentorship",
    description: "This was an initiative to transfer the knowledege of Cyber Security among students",
    date: "October 12, 2024",
    time: "2:30 PM - 5:00 PM",
    location: "Respective Classes",
    type: "mentorship",
  },
 
  {
    id: 3,
    title: "CTF Competition",
    description: "Test your skills in our monthly Capture The Flag competition with exciting prizes.",
    date: "February 10, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Room no, 416, ISE dept",
    type: "competition",
  },
  {
    id: 4,
    title: "What The Phish?",
    description: "IAn event based on Phishing",
    date: "February 10, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "Room no, 416, ISE dept",
    type: "competition",
    link: "/events/career-panel",
  },
  {
    id: 5,
    title: "Flagship Event",
    description: "Comig Soon",
    date: "June 25, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Coming Soon",
    type: "competition",
    link: "/events/network-security-workshop",
  },
  {
    id: 6,
    title: "HACKTRACE-OSINT",
    description: "A competition and exploration based on OSINT",
    date: "March 13, 2025",
    time: "10:00 PM - 1:30 PM",
    location: "Room 418, ISE dept",
    type: "competition",
  },
  {
    id: 7,
    title: "Industry connect with Jithu Joseph",
    description: "Tech Talk about carrer in  AI , cybersecurity in today's world",
    date: "April 25, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Voyger, AU",
    type: "seminar",
  },
  {
    id: 8,
    title: "Tech Seminar",
    description: "2010 Flash crash , Spoofing and Cyber Security in Financial Sector ",
    date: "May 7, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Coming Soon",
    type: "seminar",
    link: "/events/network-security-workshop",
  },

  {
    id: 9,
    title: "Tech Seminar-II",
    description: "MLSecOps and DevSecOps",
    date: "May 4, 2025",
    time: "9:30 AM - 12:30 PM",
    location: "Coming Soon",
    type: "seminar",
    link: "/events/network-security-workshop",
  },
  
]

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<typeof allEvents>([])
  const [pastEvents, setPastEvents] = useState<typeof allEvents>([])
  const [activeTab, setActiveTab] = useState("upcoming")

  // Function to check if a date is in the past
  const isDatePast = (dateString: string) => {
    // Handle date ranges (e.g., "May 5-6, 2025")
    const firstDate = dateString.split("-")[0].trim()
    const eventDate = new Date(firstDate)
    const today = new Date()

    // Reset time to compare just the dates
    today.setHours(0, 0, 0, 0)
    eventDate.setHours(0, 0, 0, 0)

    return eventDate < today
  }

  // Sort events into upcoming and past based on current date
  useEffect(() => {
    const currentDate = new Date()

    const upcoming: typeof allEvents = []
    const past: typeof allEvents = []

    allEvents.forEach((event) => {
      if (isDatePast(event.date)) {
        past.push({ ...event, isPast: true })
      } else {
        upcoming.push(event)
      }
    })

    // Sort upcoming events by date (closest first)
    upcoming.sort((a, b) => {
      const dateA = new Date(a.date.split("-")[0])
      const dateB = new Date(b.date.split("-")[0])
      return dateA.getTime() - dateB.getTime()
    })

    // Sort past events by date (most recent first)
    past.sort((a, b) => {
      const dateA = new Date(a.date.split("-")[0])
      const dateB = new Date(b.date.split("-")[0])
      return dateB.getTime() - dateA.getTime()
    })

    setUpcomingEvents(upcoming)
    setPastEvents(past)

    // If there are no upcoming events, automatically switch to past events tab
    if (upcoming.length === 0 && past.length > 0) {
      setActiveTab("past")
    }
  }, [])

  return (
    <>
      <PageHeader
        title="Events"
        description="Join us for workshops, competitions, seminars, and other cybersecurity events."
      />

      {/* Events Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 border border-gray-800">
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming">
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl text-gray-300 mb-4">No upcoming events at the moment</h3>
                  <p className="text-gray-400 mb-8">Check back soon or view our past events for inspiration!</p>
                  <div className="inline-block">
                    {" "}
                    {/* Added inline-block to fix button animation */}
                    <AnimatedButton
                      onClick={() => setActiveTab("past")}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      View Past Events
                    </AnimatedButton>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <EventCard
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      type={event.type as any}
                      isPast={true}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Host an Event Section */}
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
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`scan-${i}`}
                  className="absolute h-0.5 bg-green-500/20 left-0 right-0"
                  style={{ top: `${30 + i * 20}%` }}
                  animate={{
                    scaleX: [0, 1],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 1,
                  }}
                />
              ))}
            </div>

            <div className="text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Want to host an event?</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                If you have an idea for a cybersecurity event or would like to collaborate with us, we'd love to hear
                from you!
              </p>
              <div className="mt-8 inline-block">
                {" "}
                {/* Added inline-block to fix button animation */}
                <AnimatedButton className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href="/contact">Contact Us</Link>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

