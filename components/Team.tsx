"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Linkedin, Twitter, Mail } from "lucide-react"

const Team = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      description:
        "With over a decade of experience in IT and a passion for innovation, Alex leads the team with a clear vision for excellence.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@nexdev.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      description:
        "An expert in cloud computing and AI, Sarah drives the technical strategies that set us apart from the competition.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@nexdev.com",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Operating Officer",
      description:
        "With a background in operations management, Michael ensures seamless project execution and client satisfaction.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@nexdev.com",
      },
    },
  ]

  const openPositions = ["Software Developer", "AI Specialist", "Digital Marketing Expert", "UI/UX Designer"]

  return (
    <section id="team" className="team-section py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team combines technical expertise with business acumen to drive innovation and
            deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="team-card bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            At NexDev, we believe in fostering a culture of growth, creativity, and collaboration. Check out our current
            openings and be a part of our dynamic team.
          </p>

          {/* Open Positions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold">{position}</h4>
              </div>
            ))}
          </div>

          <a
            href="mailto:careers@nexdev.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            View All Positions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team
