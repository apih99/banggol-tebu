import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function CategoryCard({ title, description, image, link }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-scaleIn animate-hover">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-serif font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="bg-lime-500 text-white px-4 py-2 rounded-full inline-flex items-center hover:bg-lime-600 transition-colors shadow-md hover:shadow-lg"
        >
          Explore <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </div>
  )
}

