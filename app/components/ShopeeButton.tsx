"use client"

import { ShoppingBag } from "lucide-react"
import type { CSSProperties } from "react"

interface ShopeeButtonProps {
  productId?: string // Optional - if not provided, links to main store
  className?: string
  style?: CSSProperties // Add style prop support
}

export default function ShopeeButton({ productId, className = "", style }: ShopeeButtonProps) {
  const mainStoreUrl = "https://my.shp.ee/X5MHsKB"
  // If productId is provided, use it directly, otherwise use main store URL
  const shopeeUrl = productId && productId !== "X5MHsKB" 
    ? `https://my.shp.ee/${productId}`
    : mainStoreUrl

  return (
    <a
      href={shopeeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-lime-500 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-lime-600 transition-colors shadow-md hover:shadow-lg ${className}`}
      style={style}
    >
      <ShoppingBag className="mr-2" size={18} />
      {productId && productId !== "X5MHsKB" ? "Buy This Tree" : "Visit Our Shopee Store"}
    </a>
  )
}

