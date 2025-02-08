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
  title: "Banggol Tebu Nursery",
  description: "Grow Beauty & Nourishment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} font-sans min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

