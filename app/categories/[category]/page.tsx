import { notFound } from "next/navigation"
import { Metadata } from "next"
import CategoryPageContent from "@/app/components/CategoryPageContent"
import type { TreeCategory } from "@/data/types"

export function generateStaticParams() {
  return [
    { category: "flower" },
    { category: "fruit" }
  ]
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  // Validate category
  if (!["flower", "fruit"].includes(params.category)) {
    return {}
  }

  const category = params.category as TreeCategory
  const title = category === "flower" ? "Flower Trees" : "Fruit Trees"
  const description = category === "flower"
    ? "Discover our beautiful collection of flowering trees. From the national Bunga Raya to fragrant Cempaka, find the perfect ornamental tree for your garden."
    : "Explore our premium selection of fruit trees. From Durian and Rambutan to Mangosteen, grow your own tropical fruits at home."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Banggol Tebu Nursery`,
      description,
      images: [{
        url: `/images/categories/${category}/main.jpg`,
        width: 1200,
        height: 630,
        alt: `${title} at Banggol Tebu Nursery`
      }]
    },
    twitter: {
      title: `${title} | Banggol Tebu Nursery`,
      description,
      images: [`/images/categories/${category}/main.jpg`]
    }
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Validate category
  if (!["flower", "fruit"].includes(params.category)) {
    notFound()
  }

  const category = params.category as TreeCategory

  return <CategoryPageContent category={category} />
}

