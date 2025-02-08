import "./globals.css"
import "./animations.css"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" })

export const metadata: Metadata = {
  metadataBase: new URL('https://banggol-tebu.vercel.app'),
  title: {
    default: "Banggol Tebu Nursery | Malaysian Fruit & Flower Trees",
    template: "%s | Banggol Tebu Nursery"
  },
  description: "Discover premium Malaysian fruit and flowering trees at Banggol Tebu Nursery. We offer a wide selection of local favorites including Durian, Rambutan, Mangosteen, and ornamental trees.",
  keywords: [
    "Malaysian nursery",
    "fruit trees",
    "flowering trees",
    "durian tree",
    "rambutan tree",
    "mangosteen tree",
    "garden center",
    "Terengganu nursery",
    "tropical plants",
    "Kuala Berang",
    "Kuala Berang nursery",
    "Shopee nursery",
    "Online nursery",
    "local trees"
  ],
  authors: [{ name: "Banggol Tebu Nursery" }],
  creator: "Banggol Tebu Nursery",
  publisher: "Banggol Tebu Nursery",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://banggol-tebu.vercel.app",
    siteName: "Banggol Tebu Nursery",
    title: "Banggol Tebu Nursery | Malaysian Fruit & Flower Trees",
    description: "Premium Malaysian fruit and flowering trees. Local favorites including Durian, Rambutan, Mangosteen, and ornamental trees.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banggol Tebu Nursery - Malaysian Fruit & Flower Trees"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Banggol Tebu Nursery | Malaysian Fruit & Flower Trees",
    description: "Premium Malaysian fruit and flowering trees. Local favorites including Durian, Rambutan, Mangosteen, and ornamental trees.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
  alternates: {
    canonical: "https://banggol-tebu.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <meta name="apple-mobile-web-app-title" content="BanggolTebu" />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

