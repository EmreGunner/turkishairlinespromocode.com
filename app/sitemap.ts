import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data/blogPosts'

export const dynamic = 'force-static'

// Cache the base URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://turkishairlinespromocode.com'

type ValidFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

// Sitemap generator
export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as ValidFrequency,
      priority: 1,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as ValidFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quick-links`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as ValidFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as ValidFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as ValidFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as ValidFrequency,
      priority: 0.8,
    },
    // Add blog index page
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as ValidFrequency,
      priority: 0.9,
    },
  ]

  // Generate blog post routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as ValidFrequency,
    priority: 0.7,
  }))

  // Combine all routes
  return [...staticRoutes, ...blogRoutes]
} 