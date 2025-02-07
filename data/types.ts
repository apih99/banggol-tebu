export type TreeCategory = "flower" | "fruit"

export interface TreeImage {
  main: string
  gallery: string[]
}

export interface TreePrice {
  current: number
  original: number
  currency: string
}

export interface TreeShopee {
  productId: string
  inStock: boolean
  variants: string[]
}

export interface TreeCareTips {
  sunlight: string
  water: string
  soil: string
  fertilizer: string
  pruning: string
}

export interface TreeSeasonality {
  planting: string[]
  fruiting?: string[]
  flowering?: string[]
}

export interface Tree {
  id: string
  category: TreeCategory
  name: string
  scientificName: string
  image: TreeImage
  price: TreePrice
  shopee: TreeShopee
  shortDesc: string
  description: string
  features: string[]
  history: string
  careTips: TreeCareTips
  seasonality: TreeSeasonality
  tags: string[]
} 