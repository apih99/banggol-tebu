"use client"

import { Suspense } from "react"
import { Leaf, Droplet, Sun, Sprout, Scissors } from "lucide-react"
import ShopeeButton from "./ShopeeButton"
import ImageGallery from "./ImageGallery"
import type { Tree } from "@/data/types"

function LoadingUI() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg animate-pulse">
        {/* Header Section */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <div className="h-10 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>
          <div className="text-right">
            <div className="h-8 w-24 bg-gray-200 rounded mb-1" />
            <div className="h-6 w-20 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery Skeleton */}
          <div>
            <div className="bg-gray-200 rounded-lg aspect-[4/3]" />
            <div className="mt-4 flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gray-200 rounded-md" />
              ))}
            </div>
          </div>

          {/* Details Skeleton */}
          <div>
            {/* Description */}
            <section className="mb-6">
              <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
            </section>

            {/* Features */}
            <section className="mb-6">
              <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-6 bg-gray-200 rounded" />
                ))}
              </div>
            </section>

            {/* History */}
            <section className="mb-6">
              <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            </section>

            {/* Care Guide */}
            <section className="mb-6">
              <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-6 h-6 bg-gray-200 rounded-full mr-2" />
                    <div className="flex-grow">
                      <div className="h-5 bg-gray-200 rounded w-24 mb-1" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Seasonality */}
            <section className="mb-6">
              <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i}>
                    <div className="h-5 bg-gray-200 rounded w-32 mb-1" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                  </div>
                ))}
              </div>
            </section>

            {/* Button */}
            <div className="h-12 w-40 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

function TreeDetailContent({ tree }: { tree: Tree }) {
  const allImages = [tree.image.main, ...tree.image.gallery]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
        {/* Header Section */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-serif font-bold animate-slideUp">{tree.name}</h1>
            <p className="text-gray-500 text-lg italic">{tree.scientificName}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-lime-600">
              {tree.price.currency} {tree.price.current.toFixed(2)}
            </div>
            {tree.price.current < tree.price.original && (
              <div className="text-lg text-gray-500 line-through">
                {tree.price.currency} {tree.price.original.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="animate-scaleIn">
            <ImageGallery images={allImages} alt={tree.name} />
          </div>

          {/* Details */}
          <div>
            {/* Description */}
            <section className="mb-6 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-serif font-bold mb-2">Description</h2>
              <p className="text-gray-700">{tree.description}</p>
            </section>

            {/* Features */}
            <section className="mb-6 animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-serif font-bold mb-2">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {tree.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Sprout className="mr-2 text-lime-600" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* History */}
            <section className="mb-6 animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-serif font-bold mb-2">History</h2>
              <p className="text-gray-700">{tree.history}</p>
            </section>

            {/* Care Guide */}
            <section className="mb-6 animate-slideUp" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-serif font-bold mb-2">Care Guide</h2>
              <div className="grid gap-3">
                <div className="flex items-start">
                  <Sun className="mr-2 text-lime-600 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold">Sunlight</h3>
                    <p className="text-gray-700">{tree.careTips.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Droplet className="mr-2 text-lime-600 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold">Water</h3>
                    <p className="text-gray-700">{tree.careTips.water}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Leaf className="mr-2 text-lime-600 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold">Soil</h3>
                    <p className="text-gray-700">{tree.careTips.soil}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sprout className="mr-2 text-lime-600 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold">Fertilizer</h3>
                    <p className="text-gray-700">{tree.careTips.fertilizer}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scissors className="mr-2 text-lime-600 mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold">Pruning</h3>
                    <p className="text-gray-700">{tree.careTips.pruning}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seasonality */}
            <section className="mb-6 animate-slideUp" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-serif font-bold mb-2">Best Times</h2>
              <div className="grid gap-2">
                {tree.seasonality.planting && (
                  <div>
                    <h3 className="font-semibold">Planting Season</h3>
                    <p className="text-gray-700">{tree.seasonality.planting.join(", ")}</p>
                  </div>
                )}
                {tree.seasonality.fruiting && (
                  <div>
                    <h3 className="font-semibold">Fruiting Season</h3>
                    <p className="text-gray-700">{tree.seasonality.fruiting.join(", ")}</p>
                  </div>
                )}
                {tree.seasonality.flowering && (
                  <div>
                    <h3 className="font-semibold">Flowering Season</h3>
                    <p className="text-gray-700">{tree.seasonality.flowering.join(", ")}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Shopee Button */}
            <div className="animate-scaleIn" style={{ animationDelay: "0.7s" }}>
              <ShopeeButton productId={tree.shopee.productId} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function TreeDetailPageContent({ tree }: { tree: Tree }) {
  return (
    <Suspense fallback={<LoadingUI />}>
      <TreeDetailContent tree={tree} />
    </Suspense>
  )
} 