"use client";

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface BlogImageProps {
  src: string
  alt: string
  priority?: boolean
}

export function BlogImage({ src, alt, priority = false }: BlogImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 