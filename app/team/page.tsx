"use client"

import { motion } from "framer-motion"
import CodeRain from "@/components/code-rain"
import TeamMemberCard from "@/components/team-member-card"
import PageHeader from "@/components/page-header"
import SectionHeading from "@/components/section-heading"
import { Users, Award, BookOpen, Shield, Code, Palette, MessageSquare, Calendar } from "lucide-react"
import CyberCard from "@/components/cyber-card"
import JoinButton from "@/components/join-button"

// Leadership Team
const leadershipTeam = [
  {
    id: 1,
    name: "Deva Kumar",
    role: "President",
    bio: "Third year CSE(DS) Student with expertise in network security and penetration testing.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Neha",
    role: " Vice President",
    bio: "Third year Computer Science student with expertise in Cyber Sec and Leadership",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "Aishwarya",
    role: "Treasurer",
    bio: "Third year Information Security student with expertise in Finance Management",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Siddharth B N",
    role: "CTF and Developement Team Lead",
    bio: "Sixth Semester CSE(DS) Student in Python and Frameworks like Django etc...",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",

    },
  },
  {
    id: 5,
    name: "Shivam Malge",
    role: "Developement Team Co-Lead",
    bio: "Fourth Semester CSE(DS) Student expertised in JavaScript and Frameworks like Nextjs etc...",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      
    },
  },
]

//Secrataries 
const secratary = [
  {
    id : 7,
    name: "Sri Hari",
    role: "Secratary for ECE",
    bio: "Second year student expert in Linux",
    imageSrc : "/placeholder.svg?height=400&width=400",
    socialLinks : {
      github: "/",
      linkedin:"/",
    },
  },

  {
    id : 8,
    name: "Someone",
    role: "Secratary for CSE",
    bio: "Something",
    imageSrc : "/placeholder.svg?height=400&width=400",
    socialLinks : {
      github: "/",
      linkedin:"/",
    },
  },

  {
    id : 9,
    name: "Somone",
    role: "Secratary for ECE",
    bio: "Something",
    imageSrc : "/placeholder.svg?height=400&width=400",
    socialLinks : {
      github: "/",
      linkedin:"/",
    },
  },

  {
    id : 10,
    name: "Somone",
    role: "Secratary for Mech",
    bio: "Something",
    imageSrc : "/placeholder.svg?height=400&width=400",
    socialLinks : {
      github: "/",
      linkedin:"/",
    },
  },

  {
    id : 11,
    name: "Somone",
    role: "Secratary for Civil",
    bio: "Something",
    imageSrc : "/placeholder.svg?height=400&width=400",
    socialLinks : {
      github: "/",
      linkedin:"/",
    },
  },

]

// Web Development Team
const webDevTeam = [
  {
    id: 12,
    name: "Siddharth BN",
    role: "Web Development Lead",
    bio: "Third year student specializing in web security and secure application development.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 13,
    name: "Shivam Malge",
    role: "Web Developement Co-lead",
    bio: "Second year student with expertise in React and modern frontend frameworks.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 14,
    name: "AMD Vamsi",
    role: "Web Dev Team",
    bio: "Second year student focused on secure API development and database management.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 15,
    name: "Dusica",
    role: "Web Dev Team",
    bio: "Second  year student with experience in developing secure web applications.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 16,
    name: " R Lakshmi",
    role: "Web Dev Team",
    bio: "Second year student with experience in developing secure web applications.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 17,
    name: " Karan Suthar",
    role: "Web Dev Team",
    bio: "Second year student with experience in developing secure web applications.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
]

// Design Team
const designTeam = [
  {
    id: 18,
    name: "Alvin Mike Jerad",
    role: "Design Lead",
    bio: "Second year student with a passion for UI/UX design and digital art.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 19,
    name: "Aswin",
    role: "Graphic Designer",
    bio: "Second year student specializing in brand identity and visual communication.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 20,
    name: "Laavanya M",
    role: "UI/UX Designer",
    bio: "Third year student focused on creating intuitive and accessible user interfaces.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

// PR Team
const prTeam = [
  {
    id: 21,
    name: "Gowri JP",
    role: "PR Lead",
    bio: "Second year student with a passion for cybersecurity awareness and community engagement.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 22,
    name: "Aswin",
    role: "PR Co-Lead",
    bio: "Second year student managing the club's online presence and digital marketing.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

// Event Management Team
const eventTeam = [
  {
    id: 23,
    name: "Umesh Shantesh Hakkapakki",
    role: "Events Coordinator",
    bio: "Third year student with strong organizational skills and interest in digital forensics.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 24,
    name: "Sumanth G",
    role: "Workshop Coordinator",
    bio: "Third year student organizing hands-on cybersecurity workshops and training sessions.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 25,
    name: "Dhanush Shetty",
    role: "Logistics Manager",
    bio: "Second year student handling event logistics and technical requirements.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 26,
    name: "Goutham R",
    role: "Outreach Coordinator",
    bio: "Third year student focused on collaborations with other institutions and industry partners.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 27,
    name: "Anushree BV",
    role: "Outreach Member",
    bio: "Third year student focused on collaborations with other institutions and industry partners.",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

const mediaTeam = [
  {
    id: 28,
    name: "Sarah",
    role: "Team Lead",
    bio: "Third year student with strong organizational skills and interest in Content Creation",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 29,
    name: "Gaurav Navada",
    role: "Co-Lead",
    bio: "Second Year student with experience in Direction and Content Creation",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 30,
    name: "Raksha Navhule",
    role: "Team Manager",
    bio: "Second year student with strong skills in editing and direction",
    imageSrc: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

export default function TeamPage() {
  return (
    <>
      <CodeRain speed={0.4} density={0.03} color="rgba(0, 255, 0, 0.5)" />

      {/* Hero Section */}
      <PageHeader
        title="Our Team"
        description="Meet the dedicated individuals who make Atria Cyber Security Club possible."
      />

      {/* Team Stats Section */}
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Team Members",
                value: "15+",
                description: "Dedicated cybersecurity enthusiasts",
              },
              {
                icon: Award,
                title: "Competitions Won",
                value: "12",
                description: "National & international events",
              },
              {
                icon: BookOpen,
                title: "Workshops Conducted",
                value: "30+",
                description: "Knowledge sharing sessions",
              },
              {
                icon: Shield,
                title: "Projects Completed",
                value: "25",
                description: "Real-world security solutions",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard title={stat.title} className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 p-3 rounded-full bg-green-500/10 border border-green-500/30">
                      <stat.icon className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                    <p className="text-gray-400">{stat.description}</p>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Leadership Team"
            description="Our leadership team brings diverse expertise to guide the club's activities and initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Secrataries*/}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Secrataries"
            description="Our leadership team brings diverse expertise to guide the club's activities and initiatives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secratary.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Web Development Team"
            description={
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Code className="h-5 w-5 text-green-400" />
                <span>Building and maintaining our digital presence with secure and innovative web solutions</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Design Team"
            description={
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Palette className="h-5 w-5 text-green-400" />
                <span>Creating visually compelling designs that communicate our mission and values</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Public Relations Team"
            description={
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <MessageSquare className="h-5 w-5 text-green-400" />
                <span>Managing our communications and building relationships with the community</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Management Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Event Management Team"
            description={
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Calendar className="h-5 w-5 text-green-400" />
                <span>Organizing and executing engaging cybersecurity events, workshops, and competitions</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Team */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Media Team"
            description={
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Calendar className="h-5 w-5 text-green-400" />
                <span>Creating and executing content for the club</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-green-500/30 relative overflow-hidden">
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

              {/* Corner brackets */}
              <motion.div
                className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-green-500/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-500/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-green-500/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-green-500/30"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="text-center relative z-10">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Join Our Team
              </motion.h2>
              <motion.p
                className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Are you passionate about cybersecurity? We're always looking for enthusiastic students to join our team
                and contribute to our mission.
              </motion.p>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <JoinButton className="bg-green-500 hover:bg-green-600 text-white">Apply Now</JoinButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

