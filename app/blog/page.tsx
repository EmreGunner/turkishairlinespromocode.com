import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/data/blogPosts'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Blog | Turkish Airlines Promo Codes',
  description: 'Read our latest articles about finding the best Turkish Airlines deals and travel tips',
}

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Blog</h1>
          <p className="text-gray-600 mb-12 text-lg">
            Expert tips and insights for finding the best Turkish Airlines deals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E31837] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 