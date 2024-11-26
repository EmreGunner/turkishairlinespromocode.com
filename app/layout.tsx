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
  title: 'Turkish Airlines Promo Codes | Exclusive Deals & Discounts',
  description: 'Find the latest Turkish Airlines promo codes, discounts, and special offers for your next flight. Updated daily with exclusive deals.',
  keywords: 'Turkish Airlines, promo codes, flight discounts, airline deals, travel offers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
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