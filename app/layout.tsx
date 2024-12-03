import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://turkishairlinespromocode.com'),
  title: {
    default: 'Turkish Airlines Promo Codes | Exclusive Deals & Discounts',
    template: '%s | Turkish Airlines Promo Codes'
  },
  description: 'Find the latest Turkish Airlines promo codes, discounts, and special offers for your next flight. Updated daily with exclusive deals.',
  keywords: ['Turkish Airlines', 'promo codes', 'flight discounts', 'airline deals', 'travel offers'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Turkish Airlines Promo Codes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkish Airlines Promo Codes | Exclusive Deals & Discounts',
    description: 'Find the latest Turkish Airlines promo codes and discounts',
    creator: '@turkishairlines',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
      <link rel="icon" href="/airplane-takeoff-16.ico" sizes="any" />
        <GoogleAnalytics />
        
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
              {children}
            </Suspense>
          </main>
          <Footer />
          <Suspense>
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}