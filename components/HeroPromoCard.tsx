"use client";

import { useState } from "react";

interface PromoCardProps {
  title?: string;
  subtitle?: string;
  discount?: string;
  code?: string;
}

export default function HeroPromoCard({ 
  title = "Promo Codes",
  subtitle = "Exclusive deals & discounts",
  discount = "25",
  code = "TURKFLY2024"
}: PromoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <article 
      className="relative max-w-[480px] [perspective:1000px] group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="flex h-[160px] rounded-xl overflow-hidden bg-white border border-white/20
                   shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1)]
                   transform-gpu transition-all duration-300 ease-out
                   hover:translate-y-[-4px] hover:shadow-[0_25px_30px_-12px_rgb(0,0,0,0.15)]"
      >
        {/* Main Red Section */}
        <header className="relative bg-gradient-to-br from-[#E31837] to-[#C41230] p-6 w-[65%]">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4">
            <div className="w-8 h-8">
              <div className="absolute w-6 h-6 border-2 border-white/20 rotate-45" />
            </div>
          </div>
          
          {/* Wave Pattern */}
          <div className="absolute bottom-4 right-4 opacity-10">
            <svg className="w-24 h-6" viewBox="0 0 120 20">
              <path
                d="M 0 10 Q 15 5, 30 10 T 60 10 T 90 10 T 120 10"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">{discount}%</span>
              <span className="text-xl font-medium text-white/90">OFF</span>
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-white/90">{title}</h2>
              {subtitle && (
                <p className="text-sm text-white/80">{subtitle}</p>
              )}
            </div>
          </div>
        </header>

        {/* Code Section */}
        <section className="bg-white p-6 w-[35%] flex items-center justify-center">
          <div className="w-full">
            <p className="text-sm font-medium text-[#E31837]/80 mb-2">PROMO CODE</p>
            <div 
              role="button"
              tabIndex={0}
              onClick={handleCopy}
              onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
              aria-label={`Copy promo code ${code}`}
              className="bg-[#E31837]/5 hover:bg-[#E31837]/10 transition-all duration-300 
                       border border-[#E31837]/10 rounded-lg p-3 text-center
                       cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E31837]/20"
            >
              <p className="text-[#E31837] text-lg font-mono font-bold tracking-wider">
                {code}
              </p>
              <span className="sr-only">{copied ? 'Copied!' : 'Click to copy'}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              {copied ? 'Copied!' : 'Click to copy'}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}