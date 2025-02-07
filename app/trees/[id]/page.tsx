import { notFound } from "next/navigation"
import TreeDetailPageContent from "@/app/components/TreeDetailPageContent"
import { getAllTrees, getTreeById } from "@/data/utils"

export function generateStaticParams() {
  return getAllTrees().map((tree) => ({
    id: tree.id,
  }))
}

export default function TreeDetailPage({ params }: { params: { id: string } }) {
  const tree = getTreeById(params.id)

  if (!tree) {
    notFound()
  }

  return <TreeDetailPageContent tree={tree} />
}

