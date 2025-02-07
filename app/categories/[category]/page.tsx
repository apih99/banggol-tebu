import { notFound } from "next/navigation"
import CategoryPageContent from "@/app/components/CategoryPageContent"
import type { TreeCategory } from "@/data/types"

export function generateStaticParams() {
  return [
    { category: "flower" },
    { category: "fruit" }
  ]
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Validate category
  if (!["flower", "fruit"].includes(params.category)) {
    notFound()
  }

  const category = params.category as TreeCategory

  return <CategoryPageContent category={category} />
}

