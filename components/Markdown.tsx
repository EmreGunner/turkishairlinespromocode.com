"use client";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-6">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h3>,
          p: ({ children }) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-gray-600">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-gray-800">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#E31837]/20 pl-4 italic text-gray-700 my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-[#E31837]/5 text-[#E31837] px-1 rounded">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 