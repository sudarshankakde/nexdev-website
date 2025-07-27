"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      ".contact-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@nexdev.com",
      link: "mailto:hello@nexdev.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "NexDev Solutions, Chhatrapati Sambhajinagar, Maharashtra, India",
      link: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="contact-section py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? Let's discuss your project and explore how we
            can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="contact-card">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link.startsWith("#") ? (
                      <p className="text-gray-600">{info.details}</p>
                    ) : (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        {info.details}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=256&width=400"
                alt="NexDev Office Location"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="contact-card">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
