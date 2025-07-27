import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexDev - Innovative IT Solutions | Web Development, AI & Cloud Services",
  description:
    "Transform your business with NexDev's cutting-edge IT solutions. We offer web development, mobile apps, AI/ML, cloud services, and custom software development. Your trusted partner in digital transformation.",
  keywords:
    "IT solutions, web development, mobile app development, AI, machine learning, cloud services, custom software, digital transformation, NexDev",
  authors: [{ name: "NexDev Solutions" }],
  creator: "NexDev Solutions",
  publisher: "NexDev Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexdev.com",
    title: "NexDev - Innovative IT Solutions",
    description:
      "Transform your business with cutting-edge IT solutions. Web development, AI, cloud services, and more.",
    siteName: "NexDev Solutions",
    images: [
      {
        url: "/nexdev.jpeg",
        width: 1200,
        height: 630,
        alt: "NexDev - Innovative IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexDev - Innovative IT Solutions",
    description:
      "Transform your business with cutting-edge IT solutions. Web development, AI, cloud services, and more.",
    creator: "@nexdev",
    images: ["/nexdev.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://nexdev.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Aurangabad" />
        <meta name="geo.position" content="19.8762;75.3433" />
        <meta name="ICBM" content="19.8762, 75.3433" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexDev Solutions",
              url: "https://nexdev.com",
              logo: "/public/nexdev.jpeg",
              description:
                "Innovative IT solutions company specializing in web development, mobile apps, AI/ML, and cloud services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tech Park",
                addressLocality: "Aurangabad",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "customer service",
                email: "hello@nexdev.com",
              },
              sameAs: [
                "https://linkedin.com/company/nexdev",
                "https://twitter.com/nexdev",
                "https://facebook.com/nexdev",
              ],
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              industry: "Information Technology",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
