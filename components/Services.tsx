"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Globe, Smartphone, Brain, Cloud, Code, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description:
        "Custom website design and development, e-commerce solutions, and website maintenance with modern frameworks.",
      features: ["Custom Website Design", "E-commerce Solutions", "Website Optimization", "Responsive Design"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform app development with intuitive UI/UX design and IoT integration capabilities.",
      features: ["Native App Development", "Cross-platform Solutions", "UI/UX Design", "IoT Integration"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI & Machine Learning",
      description:
        "Predictive analytics, intelligent chatbots, and AI-driven automation tools to transform your business processes.",
      features: ["Predictive Analytics", "Intelligent Chatbots", "Data Modeling", "AI Automation"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Solutions",
      description:
        "Cloud migration, management, and scalable cloud-native applications with comprehensive backup solutions.",
      features: ["Cloud Migration", "AWS/Azure/GCP", "Data Backup", "Scalable Applications"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software Development",
      description:
        "Enterprise-level software tailored to your needs with legacy system modernization and full lifecycle support.",
      features: ["Enterprise Software", "Legacy Modernization", "Custom Solutions", "Full Lifecycle Support"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "IT Consultancy",
      description:
        "Business process automation, digital transformation strategies, and IT infrastructure optimization services.",
      features: ["Process Automation", "Digital Strategy", "Infrastructure Optimization", "Technology Consulting"],
      color: "from-teal-500 to-teal-600",
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="services-section py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth
            across multiple industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Healthcare", desc: "Patient care solutions" },
              { name: "Retail", desc: "E-commerce platforms" },
              { name: "Finance", desc: "Secure fintech solutions" },
              { name: "Education", desc: "Digital learning tools" },
              { name: "Manufacturing", desc: "IoT & automation" },
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
