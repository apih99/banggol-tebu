/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://banggol-tebu.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/_next', '/static'],
      },
    ],
    additionalSitemaps: [
      'https://banggol-tebu.vercel.app/sitemap.xml',
      'https://banggol-tebu.vercel.app/server-sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/server-sitemap.xml'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
} 