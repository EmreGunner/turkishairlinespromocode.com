"use client";

import { useState, useEffect, Suspense } from 'react';
import Script from 'next/script';
import HeroPromoCard from './HeroPromoCard';
import { Loader2 } from 'lucide-react';

interface ThreeDHeroSectionProps {
  onScrollClick: () => void;
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-[#E31837] animate-spin" />
        <p className="text-gray-600 text-sm">Loading experience...</p>
      </div>
    </div>
  );
}

function FallbackContent() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  );
}

export default function ThreeDHeroSection({ onScrollClick }: ThreeDHeroSectionProps) {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (document.querySelector('spline-viewer')) {
      setIsSplineLoaded(true);
    }
  }, []);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
    setHasError(false);
  };

  const handleSplineError = () => {
    setHasError(true);
    console.error('Failed to load 3D experience');
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.43/build/spline-viewer.js"
        strategy="beforeInteractive"
        onError={handleSplineError}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <div className="absolute inset-0 w-full h-full z-10">
          {!hasError ? (
            <spline-viewer
              loading-anim-type="spinner-small-dark"
              url="https://prod.spline.design/iAuTtQ2gpiZh2s4s/scene.splinecode"
              className="w-full h-full"
              render-quality="high"
            />
          ) : (
            <FallbackContent />
          )}
        </div>
      </Suspense>

      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />
      </div>

      <div className={`absolute left-[8%] top-[15%] max-w-[800px] z-30 transition-opacity duration-700 ${isSplineLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col space-y-6">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Turkish Airlines
          </h1>
          <div className="transform -rotate-1 transition-transform duration-500 hover:rotate-0">
            <HeroPromoCard 
              title="Promo Codes"
              subtitle="Exclusive deals & discounts"
              discount="25"
              code="TURKFLY2024"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onScrollClick}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[10%] z-30 bg-[#E31837] hover:bg-[#C41230] text-white px-8 py-4 rounded-full transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2 pointer-events-auto shadow-lg hover:shadow-xl opacity-0 animate-fade-in-up"
        style={{ animationDelay: '500ms' }}
      >
        <span className="text-lg font-medium">Explore Deals</span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
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

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
} 