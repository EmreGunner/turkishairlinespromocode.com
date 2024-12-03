import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data/blogPosts'

export const dynamic = 'force-static'

// Cache the base URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://turkishairlinespromocode.com'

// Sitemap generator
export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quick-links`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add blog index page
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Generate blog post routes
  const blogRoutes = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Combine all routes
  return [...staticRoutes, ...blogRoutes]
} 