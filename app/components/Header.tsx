import Link from "next/link"
import { Home, Info, TreesIcon as Tree } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-lime-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold animate-fadeIn">
          Banggol Tebu Nursery
        </Link>
        <ul className="flex space-x-4">
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
      </nav>
    </header>
  )
}

