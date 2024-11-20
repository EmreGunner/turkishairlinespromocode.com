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

        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />
        </div>

        <div className="relative z-30 container mx-auto px-4 pt-20 md:pt-32">
          <div className="max-w-[800px]">
            <h1 className="relative font-bold text-white leading-[1.1] tracking-tight">
              <span 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl block"
                style={{
                  textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25)'
                }}
              >
                Turkish
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 bg-gradient-to-r from-[#E31837] to-[#C41230] bg-clip-text text-transparent transform-gpu transition-transform duration-500">
                Airlines
              </span>
            </h1>

            <div className="mt-12 transform-gpu transition-all duration-500 hover:translate-y-[-4px]">
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
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[10%] z-30 bg-[#E31837] hover:bg-[#C41230] text-white px-8 py-4 rounded-full transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2 pointer-events-auto shadow-lg hover:shadow-xl opacity-0 animate-fade-in-up animate-float"
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