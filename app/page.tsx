"use client"

import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Star, Leaf, TrendingUp } from "lucide-react"
import CategoryCard from "./components/CategoryCard"
import HeroSection from "./components/HeroSection"
import ShopeeButton from "./components/ShopeeButton"
import TreeCard from "./components/TreeCard"
import TreeCardSkeleton from "./components/TreeCardSkeleton"
import { getFeaturedTrees, getLocalTrees, getPremiumTrees } from "@/data/utils"

function LoadingUI() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-12 bg-gray-200 animate-pulse" />

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="relative aspect-[16/9] rounded-lg bg-gray-200 animate-pulse" />
          ))}
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-5 w-64 bg-gray-200 rounded" />
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <TreeCardSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-lime-50 py-12">
        <div className="container mx-auto px-4">
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4" />
                <div className="h-6 w-32 bg-gray-200 rounded mx-auto mb-2" />
                <div className="h-4 w-48 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Favorites Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-5 w-64 bg-gray-200 rounded" />
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <TreeCardSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Premium Selections Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
            <div className="h-5 w-64 bg-gray-200 rounded" />
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <TreeCardSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lime-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="h-10 w-64 bg-white/20 rounded mx-auto mb-4" />
          <div className="h-6 w-96 bg-white/20 rounded mx-auto mb-6" />
          <div className="h-12 w-48 bg-white/20 rounded-full mx-auto" />
        </div>
      </section>
    </div>
  )
}

function HomeContent() {
  // Get trees for different sections
  const featuredTrees = getFeaturedTrees()
  const localFavorites = getLocalTrees()
  const premiumSelections = getPremiumTrees()

  return (
    <div className="flex flex-col gap-12">
      <HeroSection />

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
        <CategoryCard
          title="Flower Trees"
          description="Add beauty and fragrance to your garden"
            image="/images/categories/flower/main.jpg"
          link="/categories/flower"
        />
        <CategoryCard
          title="Fruit Trees"
          description="Grow your own delicious fruits"
            image="/images/categories/fruit/main.jpg"
          link="/categories/fruit"
        />
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-800">Featured Deals</h2>
            <p className="text-gray-600">Special offers on selected trees</p>
          </div>
          <Link
            href="/categories/all"
            className="text-lime-600 hover:text-lime-700 inline-flex items-center gap-1"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTrees.map(tree => (
            <TreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-lime-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-800 mb-8">
            Why Choose Banggol Tebu Nursery?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-lime-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every tree is carefully nurtured and selected for optimal growth</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-lime-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Expert Care</h3>
              <p className="text-gray-600">Detailed care guides and ongoing support for your trees</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-lime-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Growth Guarantee</h3>
              <p className="text-gray-600">We ensure your trees thrive in their new home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Favorites Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-800">Local Favorites</h2>
            <p className="text-gray-600">Popular Malaysian trees for your garden</p>
          </div>
          <Link
            href="/categories/all?tag=local"
            className="text-lime-600 hover:text-lime-700 inline-flex items-center gap-1"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {localFavorites.map(tree => (
            <TreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      </section>

      {/* Premium Selections Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-800">Premium Selections</h2>
            <p className="text-gray-600">Exclusive varieties for discerning gardeners</p>
          </div>
          <Link
            href="/categories/all?tag=premium"
            className="text-lime-600 hover:text-lime-700 inline-flex items-center gap-1"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumSelections.map(tree => (
            <TreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lime-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Your Garden?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Visit our Shopee store to explore our complete collection of trees and start your gardening journey today.
          </p>
          <ShopeeButton className="!bg-white !text-lime-600 hover:!bg-gray-100" />
        </div>
      </section>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingUI />}>
      <HomeContent />
    </Suspense>
  )
}

