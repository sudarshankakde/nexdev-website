"use client"

import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Custom Software",
    "IT Consultancy",
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">NexDev</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the future with innovative IT solutions. Your trusted partner in digital transformation since
              2024.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/nexdev"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/nexdev"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors duration-200"
                aria-label="Twitter"
                target="_blank"

              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/nexdev"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                aria-label="Facebook"
                target="_blank"

              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@nexdev.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  hello@nexdev.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  NexDev Solutions,
                  <br />
                  Chhatrapati Sambhajinagar
                  <br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} NexDev Solutions. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
