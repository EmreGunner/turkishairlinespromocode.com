"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { ArrowDown } from 'lucide-react';
import HeroPromoCard from './HeroPromoCard';

interface ThreeDHeroSectionProps {
  onScrollClick: () => void;
}

export default function ThreeDHeroSection({ onScrollClick }: ThreeDHeroSectionProps) {
  return (
    <section className="relative w-full h-screen bg-black">
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.43/build/spline-viewer.js"
        strategy="beforeInteractive"
        onError={() => console.error('Failed to load the Spline viewer script')}
      />

      {/* 3D Viewer Container */}
      <div className="absolute inset-0 w-full h-full z-10">
        <spline-viewer
          loading-anim-type="spinner-big-dark"
          url="https://prod.spline.design/iAuTtQ2gpiZh2s4s/scene.splinecode"
          className="w-full h-full"
          render-quality="high"
          aria-label="3D Hero Section Viewer"
        />
      </div>

      {/* Very minimal gradient for readability */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="absolute left-[8%] top-[15%] max-w-[800px] z-30 pointer-events-none">
        <div className="flex flex-col space-y-6">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white leading-[1.1] tracking-tight">
            Turkish Airlines
          </h1>
          {/* Using HeroPromoCard instead of PromoCard */}
          <div className="transform -rotate-1">
            <HeroPromoCard 
              title="Promo Codes"
              subtitle="Exclusive deals & discounts"
              discount="25"
              code="TURKFLY2024"
            />
          </div>
        </div>
      </div>

      {/* Updated Explore Deals button */}
      <div className="absolute right-[8%] bottom-[10%] z-30">
        <button
          onClick={onScrollClick}
          className={`
            group bg-[#E81932] hover:bg-[#C41230] text-white 
            px-10 py-5 rounded-full transition-all duration-300 
            ease-out hover:scale-105 flex items-center gap-3 
            pointer-events-auto shadow-lg hover:shadow-xl text-xl
          `}
        >
          <span className="font-medium">Explore Deals</span>
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Keep existing animations */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
} 