"use client";

import { useState } from "react";
import { Copy, CheckCircle, AlertCircle, Plane } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const [isHovered, setIsHovered] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleCopy = async () => {
    try {
      setCopyStatus('loading');
      await navigator.clipboard.writeText(code);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
    }
  };

  return (
    <div 
      className="relative [perspective:1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-[480px] transform-gpu transition-all duration-500"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isHovered ? 
            'translateY(-12px) rotateX(4deg) rotateY(-2deg)' : 
            'translateY(0) rotateX(0) rotateY(0)'
        }}
      >
        <div className="flex rounded-xl overflow-hidden bg-white shadow-2xl">
          {/* Red Promotional Section */}
          <div className="w-[60%] bg-gradient-to-br from-[#E31837] to-[#C41230] p-6 relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-white text-5xl font-bold mb-2">{discount}% OFF</h2>
              <p className="text-white/90 text-xl font-medium">{title}</p>
              <p className="text-white/80 text-base mt-1">{subtitle}</p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500"
                style={{
                  transform: isHovered ? 
                    'translate(-50%, -50%) rotate(55deg) scale(1.1)' : 
                    'translate(-50%, -50%) rotate(45deg) scale(1)'
                }}
              >
                <Plane className="w-48 h-48 text-white/10" />
              </div>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="w-[40%] bg-white p-5 flex items-center justify-center">
            <div className="w-full text-center">
              <span className="text-[#E31837]/90 text-sm font-medium">PROMO CODE</span>
              <div 
                className={`mt-2 relative group ${
                  copyStatus === 'loading' ? 'animate-pulse' : ''
                }`}
              >
                <button
                  onClick={handleCopy}
                  className="w-full bg-[#E31837]/5 hover:bg-[#E31837]/10 rounded-lg 
                    px-4 py-3 text-[#E31837] font-mono text-lg font-bold
                    transition-all duration-300 focus:outline-none focus:ring-2 
                    focus:ring-[#E31837]/20 hover:shadow-md"
                  disabled={copyStatus === 'loading'}
                >
                  {code}
                </button>
                
                <div className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copyStatus === 'idle' && (
                    <Copy className="w-4 h-4 text-[#E31837]" />
                  )}
                  {copyStatus === 'success' && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                  {copyStatus === 'error' && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                {copyStatus === 'loading' ? 'Copying...' :
                 copyStatus === 'success' ? 'Copied!' :
                 copyStatus === 'error' ? 'Failed to copy' :
                 'Click to copy'}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Shadow */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#E31837]/20 to-[#C41230]/10 
            rounded-xl -z-10 transition-all duration-500"
          style={{
            transform: isHovered ? 
              'translateY(20px) translateX(10px) translateZ(-60px) scale(0.95)' : 
              'translateY(10px) translateX(5px) translateZ(-30px) scale(0.98)',
            filter: `blur(${isHovered ? '8px' : '4px'})`
          }}
        />
      </div>

      {copyStatus === 'error' && (
        <Alert variant="destructive" className="fixed bottom-4 right-4 w-auto">
          <AlertDescription>
            Failed to copy promo code. Please try again.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}