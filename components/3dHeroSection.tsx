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
        <div className="absolute top-0 left-0 w-full z-50 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 py-2 text-amber-800 text-sm text-center">
            {t('disclaimer.independent')}
          </div>
        </div>

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

        <div className="relative z-30 container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40">
          <div className="max-w-[800px]">
            <h1 className={cn(
              "relative font-bold text-white leading-[1.1] tracking-tight",
              "animate-fade-in",
              "motion-reduce:animate-none"
            )}>
              <span 
                className="text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl block"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transform: 'translateZ(0)'
                }}
              >
                Turkish
              </span>
              <span 
                className={cn(
                  "block text-5xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl mt-2",
                  "bg-gradient-to-r from-[#E31837] to-[#C41230] bg-clip-text text-transparent"
                )}
              >
                Airlines
              </span>
            </h1>

            <div 
              className={cn(
                "mt-8 sm:mt-12 transform-gpu transition-all duration-500 hover:translate-y-[-4px]",
                "pointer-events-auto animate-fade-in",
                "relative bottom-[-180px] sm:bottom-auto",
                "motion-reduce:animate-none",
                "opacity-100 hover:opacity-100"
              )}
              style={{ animationDelay: '200ms' }}
            >
              <HeroPromoCard 
                title={t('promo.title')}
                subtitle={t('promo.subtitle')}
                discount="25"
                code="TURKFLY2024"
              />
            </div>
          </div>
        </div>

        <button
          onClick={onScrollClick}
          className={cn(
            "absolute left-1/2 bottom-[5%] z-30",
            "bg-[#E31837] hover:bg-[#C41230] text-white",
            "px-6 sm:px-8 py-3 sm:py-4 rounded-full",
            "transition-all duration-300 ease-out",
            "hover:scale-105 flex items-center gap-2",
            "pointer-events-auto shadow-lg hover:shadow-xl",
            "animate-fade-in-up animate-float",
            "transform -translate-x-1/2",
            "motion-reduce:animate-none",
            "opacity-0 group-hover:opacity-100"
          )}
          style={{ animationDelay: '500ms' }}
        >
          <span className="text-base sm:text-base md:text-lg font-medium whitespace-nowrap">
            {t('cta.exploreDeal')}
          </span>
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:translate-y-1" 
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