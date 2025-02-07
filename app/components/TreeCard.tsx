import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { Tag } from "lucide-react"

interface TreeCardProps {
  tree: {
    id: string
    name: string
    scientificName: string
    image: {
      main: string
      gallery: string[]
    }
    price: {
      current: number
      original: number
      currency: string
    }
    shortDesc: string
    tags: string[]
  }
  style?: React.CSSProperties
}

export default function TreeCard({ tree, style }: TreeCardProps) {
  const { current, original, currency } = tree.price
  const hasDiscount = current < original
  const discount = hasDiscount ? Math.round((1 - current / original) * 100) : 0
  
  return (
    <Link href={`/trees/${tree.id}`}>
      <article 
        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
        style={style}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <Image
            src={tree.image.main || "/placeholder.svg"}
          alt={tree.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
          {hasDiscount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              {discount}% OFF
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-3 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-1.5">
            <h2 className="text-base font-serif font-bold text-gray-800 line-clamp-1 group-hover:text-lime-600 transition-colors">
              {tree.name}
            </h2>
            <p className="text-xs text-gray-500 italic line-clamp-1">{tree.scientificName}</p>
          </div>

          {/* Price */}
          <div className="mb-2">
            <div className="text-base font-bold text-lime-600">
              {currency} {current.toFixed(2)}
            </div>
            {hasDiscount && (
              <div className="text-xs text-gray-500 line-through">
                {currency} {original.toFixed(2)}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">
            {tree.shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-auto">
            {tree.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-[10px] bg-lime-50 text-lime-700 px-1.5 py-0.5 rounded-full group-hover:bg-lime-100 transition-colors"
              >
                <Tag size={8} className="mr-0.5" />
                {tag}
              </span>
            ))}
        </div>
      </div>
      </article>
    </Link>
  )
}

