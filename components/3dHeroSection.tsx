"use client";

import { useState, useEffect, Suspense } from 'react';
import Script from 'next/script';
import HeroPromoCard from './HeroPromoCard';
import { Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

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
  const { t } = useTranslation();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (document.querySelector('spline-viewer')) {
      setIsSplineLoaded(true);
    }
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.45/build/spline-viewer.js"
        strategy="beforeInteractive"
        onError={() => setHasError(true)}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <div className="absolute inset-0 w-full h-full z-10">
          {!hasError ? (
            <spline-viewer
              url="https://prod.spline.design/84oobYdEPFwh00cJ/scene.splinecode"
              className="w-full h-full"
            />
          ) : (
            <FallbackContent />
          )}
        </div>
      </Suspense>

      <div className="relative z-30 container mx-auto px-4 pt-16 sm:pt-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className={cn(
            "relative inline-flex items-center gap-2",
            "font-bold text-white leading-none tracking-tight",
            "animate-fade-in",
            "motion-reduce:animate-none"
          )}>
            <span 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)',
                transform: 'translateZ(0)'
              }}
            >
              Turkish
            </span>
            <span 
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                "bg-gradient-to-r from-[#E31837] to-[#C41230] bg-clip-text text-transparent"
              )}
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Airlines
            </span>
          </h1>
        </div>
      </div>

      <div 
        className={cn(
          "absolute left-1/2 -translate-x-1/2",
          "-bottom-[100px]",
          "sm:-bottom-[25px]",
          "z-30"
        )}
        style={{ 
          marginBottom: `calc(4px + env(safe-area-inset-bottom, 0px))`,
        }}
      >
        <HeroPromoCard 
          onExploreClick={onScrollClick}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -4px); }
          100% { transform: translate(-50%, 0); }
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
          will-change: transform;
        }

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