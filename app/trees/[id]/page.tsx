import { notFound } from "next/navigation"
import { Metadata } from "next"
import TreeDetailPageContent from "@/app/components/TreeDetailPageContent"
import { getAllTrees, getTreeById } from "@/data/utils"

export function generateStaticParams() {
  return getAllTrees().map((tree) => ({
    id: tree.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const tree = getTreeById(params.id)

  if (!tree) {
    return {}
  }

  const title = `${tree.name} (${tree.scientificName})`
  const description = `${tree.shortDesc} ${tree.description.slice(0, 150)}...`

  return {
    title,
    description,
    keywords: [
      tree.name,
      tree.scientificName,
      ...tree.tags,
      "Malaysian trees",
      "garden trees",
      "tropical trees"
    ],
    openGraph: {
      title: `${title} | Banggol Tebu Nursery`,
      description,
      images: [{
        url: tree.image.main,
        width: 1200,
        height: 630,
        alt: `${tree.name} at Banggol Tebu Nursery`
      }]
    },
    twitter: {
      title: `${title} | Banggol Tebu Nursery`,
      description,
      images: [tree.image.main]
    }
  }
}

export default function TreeDetailPage({ params }: { params: { id: string } }) {
  const tree = getTreeById(params.id)

  if (!tree) {
    notFound()
  }

  return <TreeDetailPageContent tree={tree} />
}

