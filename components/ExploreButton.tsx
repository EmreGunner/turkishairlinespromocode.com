"use client";

import { ChevronDown } from "lucide-react";

interface ExploreButtonProps {
  onClick: () => void;
  className?: string;
}

export default function ExploreButton({ onClick, className }: ExploreButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    console.log("ExploreButton: Click event triggered");
    e.stopPropagation(); // Prevent event bubbling
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-[#E31837] to-[#C41230] 
        px-8 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,24,55,0.4)] 
        active:scale-95 ${className || ''}`}
    >
      <div className="absolute inset-0 bg-white/20 transition-transform duration-300 group-hover:translate-y-[-100%]" />
      <div className="relative flex items-center gap-3">
        <span className="text-lg font-medium text-white">
          Explore All Deals
        </span>
        <ChevronDown className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-1" />
      </div>
    </button>
  );
} 