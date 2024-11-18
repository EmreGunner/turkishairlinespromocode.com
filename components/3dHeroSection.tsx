"use client";

import { useEffect } from 'react';
import Script from 'next/script';

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

      <div className="absolute inset-0 w-full h-full">
        <spline-viewer
          loading-anim-type="spinner-big-dark"
          url="https://prod.spline.design/iAuTtQ2gpiZh2s4s/scene.splinecode"
          className="w-full h-full"
          render-quality="high"
          aria-label="3D Hero Section Viewer"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
} 