"use client";

import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromoCardProps {
  onExploreClick: () => void;
}

export default function HeroPromoCard({ onExploreClick }: PromoCardProps) {
  return (
    <div className="relative ml-auto mr-4 sm:mr-8 mb-32 sm:mb-16 z-40 pointer-events-auto">
      {/* Desktop Version */}
      <div className="hidden sm:block w-[400px] md:w-[460px] lg:w-[460px]">
        <div className="bg-[#E81932] rounded-lg shadow-lg">
          <div className="p-4 text-white">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">Find Promo Codes</h2>
              <Plane className="h-4 w-4 text-white/80" />
            </div>
            <p className="text-sm text-white/90 mt-1 leading-relaxed">
              Save on Turkish Airlines flights with verified discount codes
            </p>
          </div>

          <div className="bg-white p-4 rounded-b-lg">
            <button
              onClick={onExploreClick}
              className={cn(
                "w-full bg-[#E81932] hover:bg-[#C41230] text-white",
                "py-3 px-4 rounded-md transition-all duration-300",
                "flex items-center justify-center gap-2 font-medium",
                "hover:scale-[1.02] hover:shadow-md",
                "animate-subtle-bounce"
              )}
            >
              Explore Deals
              <Plane className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden w-[260px]">
        <div className="bg-[#E81932] rounded-lg shadow-md">
          <div className="p-3 text-white">
            <div className="flex justify-between items-start">
              <h2 className="text-base font-semibold">Find Promo Codes</h2>
              <Plane className="h-3.5 w-3.5 text-white/80" />
            </div>
            <p className="text-xs text-white/90 mt-0.5 leading-relaxed">
              Save on Turkish Airlines flights with verified discount codes
            </p>
          </div>

          <div className="bg-white p-3 rounded-b-lg">
            <button
              onClick={onExploreClick}
              className={cn(
                "w-full bg-[#E81932] hover:bg-[#C41230] text-white",
                "py-2.5 px-3 rounded-md transition-all duration-300",
                "flex items-center justify-center gap-1.5 text-sm font-medium",
                "hover:scale-[1.02] hover:shadow-md",
                "animate-subtle-bounce"
              )}
            >
              Explore Deals
              <Plane className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        .animate-subtle-bounce {
          animation: subtle-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}