import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getBlogPost, blogPosts } from '@/lib/data/blogPosts'
import PageTransition from '@/components/PageTransition'
import { Markdown } from '@/components/Markdown'
import { JsonLd } from '@/components/JsonLd'
import { BlogImage } from '@/components/BlogImage'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const publishedTime = new Date(post.date).toISOString()

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
  }

  return (
    <PageTransition>
      <JsonLd data={articleStructuredData} />
      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E31837] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <BlogImage
              src={post.image}
              alt={`Featured image for article: ${post.title}`}
              priority
            />

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {post.title}
            </h1>

            <div className="prose-container">
              <Markdown content={post.content.trim()} />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  )
} 