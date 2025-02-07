"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import TreeCard from "@/app/components/TreeCard"
import { getAllTrees, getTreesByTag } from "@/data/utils"
import type { Tree } from "@/data/types"

function AllTreesContent() {
  const searchParams = useSearchParams()
  const tag = searchParams.get("tag")
  const [trees, setTrees] = useState<Tree[]>([])

  useEffect(() => {
    // Get trees based on tag parameter
    const treesToShow = tag ? getTreesByTag(tag) : getAllTrees()
    setTrees(treesToShow)
  }, [tag])

  // Determine title and description based on tag
  let title = "All Trees"
  let description = "Explore our complete collection of trees"

  if (tag === "local") {
    title = "Local Favorites"
    description = "Popular Malaysian trees for your garden"
  } else if (tag === "premium") {
    title = "Premium Selections"
    description = "Exclusive varieties for discerning gardeners"
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Filter Tags */}
      <div className="mb-8 flex gap-2">
        <a
          href="/categories/all"
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            !tag
              ? "bg-lime-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Trees
        </a>
        <a
          href="/categories/all?tag=local"
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            tag === "local"
              ? "bg-lime-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Local Favorites
        </a>
        <a
          href="/categories/all?tag=premium"
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            tag === "premium"
              ? "bg-lime-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Premium Selections
        </a>
      </div>

      {/* Trees Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trees.map(tree => (
          <TreeCard key={tree.id} tree={tree} />
        ))}
      </div>

      {/* No Results Message */}
      {trees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No trees found matching your criteria.</p>
        </div>
      )}
    </main>
  )
}

// Add loading UI
function LoadingUI() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-10 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 w-96 bg-gray-200 rounded mb-8"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AllTreesPage() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <AllTreesContent />
    </Suspense>
  )
} 