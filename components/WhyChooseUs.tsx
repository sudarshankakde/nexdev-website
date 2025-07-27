"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Award, Users, Zap, Shield, Headphones, TrendingUp } from "lucide-react"

const WhyChooseUs = () => {
  useEffect(() => {
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".why-choose-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Expertise",
      description: "Decades of combined team experience in IT with a track record of successful project deliveries.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tailored Solutions",
      description:
        "Personalized strategies and custom solutions designed to meet your unique business goals and requirements.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest in AI, cloud computing, IoT, and emerging technologies to keep you ahead.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Commitment to Quality",
      description: "Strict QA processes and quality assurance measures to ensure top-notch deliverables every time.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "End-to-End Support",
      description: "Comprehensive support from initial ideation through deployment and ongoing maintenance.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Future-proof solutions that grow with your business and adapt to changing market demands.",
    },
  ]

  return (
    <section className="why-choose-section py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose NexDev?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that not only meet your current
            needs but also position you for future success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image and Stats */}
          <div className="feature-card">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Why Choose NexDev"
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
