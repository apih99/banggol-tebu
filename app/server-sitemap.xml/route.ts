import { getServerSideSitemap } from 'next-sitemap'
import type { ISitemapField } from 'next-sitemap'
import { getAllTrees } from '@/data/utils'

export async function GET() {
  const baseUrl = 'https://banggol-tebu.vercel.app'

  // Get all trees
  const trees = getAllTrees()

  // Create entries for tree pages
  const treeEntries: ISitemapField[] = trees.map((tree) => ({
    loc: `${baseUrl}/trees/${tree.id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }))

  // Create entries for category pages
  const categoryEntries: ISitemapField[] = [
    {
      loc: `${baseUrl}/categories/flower`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/categories/fruit`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/categories/all`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
  ]

  // Create entries for static pages
  const staticEntries: ISitemapField[] = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
  ]

  // Combine all entries
  const entries: ISitemapField[] = [...staticEntries, ...categoryEntries, ...treeEntries]

  return getServerSideSitemap(entries)
} 