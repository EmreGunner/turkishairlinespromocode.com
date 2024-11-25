"use client";

import { useState } from "react";
import { Copy, CheckCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromoCardProps {
  title?: string;
  subtitle?: string;
  discount?: string;
  code?: string;
}

export default function HeroPromoCard({ 
  title = "Promo Codes",
  subtitle = "Exclusive deals &",
  discount = "discounts",
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
    <div className="relative ml-auto mr-8 mb-64 sm:mb-24 mb-6 z-40 pointer-events-auto">
      {/* Desktop Version */}
      <div className="hidden sm:block w-[320px]">
        <div className="bg-[#E81932] rounded-xl shadow-lg">
          <div className="p-5 text-white">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <Plane className="h-5 w-5 text-white/80" />
            </div>
            <p className="text-lg text-white/90 mt-1">{subtitle}</p>
            <p className="text-lg text-white/90">{discount}</p>
          </div>

          <div className="bg-white p-5 rounded-b-xl">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center">
                  <code className="text-lg font-mono font-medium">{code}</code>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-500" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden w-[240px]">
        <div className="bg-[#E81932] rounded-lg shadow-md">
          <div className="p-4 text-white">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">{title}</h2>
              <Plane className="h-4 w-4 text-white/80" />
            </div>
            <p className="text-sm text-white/90 mt-1">{subtitle}</p>
            <p className="text-sm text-white/90">{discount}</p>
          </div>

          <div className="bg-white p-3 rounded-b-lg">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <div className="border border-dashed border-gray-200 rounded px-2 py-1.5 text-center">
                  <code className="text-sm font-mono font-medium">{code}</code>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}