"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ShopeeButton from "./ShopeeButton"

const backgroundImages = [
  "/images/hero/1.jpg",  // We'll add these images later
  "/images/hero/2.jpg",
  "/images/hero/3.jpg"
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] mb-12 overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-serif font-bold mb-4 animate-slideUp">
          Grow Beauty & Nourishment
        </h1>
        <p
          className="text-xl mb-6 animate-slideUp max-w-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Transform your outdoor space into a haven of beauty and nourishment with our carefully curated collection of trees. Welcome to Banggol Tebu Nursery.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="bg-lime-500 text-white px-6 py-2 rounded-full inline-flex items-center hover:bg-lime-600 transition-colors shadow-md hover:shadow-lg animate-scaleIn animate-hover"
            style={{ animationDelay: "0.4s" }}
          >
            Learn More <ArrowRight className="ml-2" size={18} />
          </Link>
          <ShopeeButton
            className="animate-scaleIn !bg-white !text-lime-600 hover:!bg-gray-100"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  )
} 