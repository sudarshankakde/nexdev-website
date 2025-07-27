"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(".hero-title", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-buttons", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 px-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering the Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Innovative IT Solutions
              </span>
            </h1>

            <p className="hero-subtitle text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your business with cutting-edge technology solutions. We bridge the gap between businesses and
              technology, delivering world-class IT services that drive growth and innovation.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-2 bg-transparent"
              >
                <Play className="h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image relative mb-10">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="NexDev - Modern IT Solutions"
                className="w-full h-auto rounded-2xl shadow-2xl "
                loading="eager"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  )
}

export default Hero
