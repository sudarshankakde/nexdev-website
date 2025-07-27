"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Target, Eye, Heart, Leaf } from "lucide-react"

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Innovation",
      description: "Pioneering creative solutions that make a difference in the digital landscape.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Customer Success",
      description: "Putting our clients' goals at the forefront of everything we do.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Promoting eco-friendly technology solutions for a better tomorrow.",
    },
  ]

  return (
    <section id="about" className="about-section min-h-screen py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                NexDev
              </span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in digital transformation, established in 2024 and dedicated to empowering businesses
            with innovative IT solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10 ">
          {/* Content */}
          <div className="about-card">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to NexDev, your trusted partner in digital transformation. Established in 2024, we are dedicated
              to empowering businesses with innovative IT solutions that drive growth, streamline operations, and
              enhance customer experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our vision is to create a connected world where technology drives meaningful progress. With a client-first
              approach and a passion for problem-solving, we turn ideas into reality and challenges into opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2024</div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">India</div>
                <div className="text-gray-600">Headquarters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Global</div>
                <div className="text-gray-600">Presence</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="about-card ">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="NexDev Team"
              className="w-full h-auto rounded-2xl shadow-lg "
              loading="eager"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div className="about-card bg-white p-8 rounded-2xl shadow-lg">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the gap between businesses and technology by delivering world-class IT solutions that are both
              sustainable and scalable, enabling our clients to thrive in the digital age.
            </p>
          </div>

          <div className="about-card bg-white p-8 rounded-2xl shadow-lg">
            <Eye className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in IT innovation, empowering businesses of all sizes to thrive in a digital-first
              world through cutting-edge technology solutions and exceptional service.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="about-card bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
