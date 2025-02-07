import { Tree, TreeCategory } from "./types"
import flowerTrees from "./trees/flower.json"
import fruitTrees from "./trees/fruit.json"

// Get all trees
export function getAllTrees(): Tree[] {
  return [...flowerTrees, ...fruitTrees] as Tree[]
}

// Get trees by category
export function getTreesByCategory(category: TreeCategory): Tree[] {
  return category === "flower" ? flowerTrees as Tree[] : fruitTrees as Tree[]
}

// Get tree by ID
export function getTreeById(id: string): Tree | undefined {
  return getAllTrees().find(tree => tree.id === id)
}

// Get trees by tag
export function getTreesByTag(tag: string): Tree[] {
  return getAllTrees().filter(tree => tree.tags.includes(tag))
}

// Get featured trees (highest discount)
export function getFeaturedTrees(limit: number = 4): Tree[] {
  return getAllTrees()
    .map(tree => ({
      ...tree,
      discount: ((tree.price.original - tree.price.current) / tree.price.original) * 100
    }))
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit)
}

// Get local trees
export function getLocalTrees(limit: number = 4): Tree[] {
  return getTreesByTag("local").slice(0, limit)
}

// Get premium trees
export function getPremiumTrees(limit: number = 4): Tree[] {
  return getTreesByTag("premium").slice(0, limit)
}

// Calculate discount percentage
export function getDiscountPercentage(tree: Tree): number {
  const { current, original } = tree.price
  return Math.round(((original - current) / original) * 100)
}

// Check if tree has discount
export function hasDiscount(tree: Tree): boolean {
  return tree.price.current < tree.price.original
} 