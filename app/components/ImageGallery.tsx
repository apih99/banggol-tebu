"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev)
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          width={800}
          height={600}
          className={`w-full h-[400px] md:h-[500px] object-contain transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={toggleZoom}
        />
        
        {/* Zoom Button */}
        <button
          onClick={toggleZoom}
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
        >
          {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 ${
                currentIndex === index
                  ? "ring-2 ring-lime-500"
                  : "hover:ring-2 hover:ring-lime-300"
              } rounded-md overflow-hidden transition-all`}
            >
              <Image
                src={image}
                alt={`${alt} - Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 