"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Info, TreesIcon as Tree, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-lime-500 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold animate-fadeIn">
            Banggol Tebu Nursery
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleMenu()
            }}
            className="md:hidden p-2 hover:bg-lime-600 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li className="animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <Link href="/" className="flex items-center hover:text-lime-200 transition-colors">
                <Home className="mr-1" size={18} />
                Home
              </Link>
            </li>
            <li className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <Link href="/about" className="flex items-center hover:text-lime-200 transition-colors">
                <Info className="mr-1" size={18} />
                About
              </Link>
            </li>
            <li className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <Link href="/categories/flower" className="flex items-center hover:text-lime-200 transition-colors">
                <Tree className="mr-1" size={18} />
                Flower Trees
              </Link>
            </li>
            <li className="animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <Link href="/categories/fruit" className="flex items-center hover:text-lime-200 transition-colors">
                <Tree className="mr-1" size={18} />
                Fruit Trees
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-lime-500 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center py-2 px-4 hover:bg-lime-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="mr-2" size={18} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center py-2 px-4 hover:bg-lime-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="mr-2" size={18} />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/categories/flower"
                className="flex items-center py-2 px-4 hover:bg-lime-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tree className="mr-2" size={18} />
                Flower Trees
              </Link>
            </li>
            <li>
              <Link
                href="/categories/fruit"
                className="flex items-center py-2 px-4 hover:bg-lime-600 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tree className="mr-2" size={18} />
                Fruit Trees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

