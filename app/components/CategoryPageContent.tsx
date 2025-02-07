"use client"

import { Suspense } from "react"
import TreeCard from "./TreeCard"
import TreeCardSkeleton from "./TreeCardSkeleton"
import { getTreesByCategory } from "@/data/utils"
import type { TreeCategory } from "@/data/types"

function LoadingUI() {
  return (
    <main className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="mb-8">
        <div className="h-10 w-48 bg-gray-200 rounded mb-2" />
        <div className="h-6 w-96 bg-gray-200 rounded" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <TreeCardSkeleton key={i} />
        ))}
      </div>
    </main>
  )
}

function CategoryContent({ category }: { category: TreeCategory }) {
  const trees = getTreesByCategory(category)
  const title = category === "flower" ? "Flower Trees" : "Fruit Trees"
  const description = category === "flower" 
    ? "Add beauty and fragrance to your garden"
    : "Grow your own delicious fruits"

  return (
    <main className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trees.map(tree => (
          <TreeCard key={tree.id} tree={tree} />
        ))}
      </div>
    </main>
  )
}

export default function CategoryPageContent({ category }: { category: TreeCategory }) {
  return (
    <Suspense fallback={<LoadingUI />}>
      <CategoryContent category={category} />
    </Suspense>
  )
} 