"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { CouponPopup } from "@/components/ui/coupon-popup";
import { Badge } from "@/components/ui/badge";

interface PromoCardProps {
  promo: {
    code: string;
    discount: string;
    category: string;
    description: string;
    validUntil: string;
    bookingPeriod: {
      start: string;
      end: string;
    };
    travelPeriod: {
      start: string;
      end: string;
    };
    destinations: string[];
    applicableRoutes: string;
    terms: string;
    additionalInfo: string;
    lastChecked: string;
    blackoutDates?: string[];
  };
}

export default function PromoCard({ promo }: PromoCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg flex flex-col h-full group">
        <CardHeader className="bg-gradient-to-r from-[#E81932] to-[#C41230] text-white p-6 relative">
          <Badge variant="secondary" className="absolute top-4 right-4 bg-white/20 text-white border-none">
            {promo.category}
          </Badge>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold tracking-tight">{promo.discount}</h3>
            <p className="text-base text-white/90 font-medium leading-snug">
              {promo.description}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 flex-grow space-y-6 bg-white">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Calendar className="h-5 w-5 text-[#E81932]" />
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">When to Book</h4>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                  <span className="text-sm text-blue-700">
                    Until {formatDate(promo.bookingPeriod.end)}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Travel Window</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
                    <span className="text-green-700">
                      From {formatDate(promo.travelPeriod.start)}
                    </span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
                    <span className="text-green-700">
                      Until {formatDate(promo.travelPeriod.end)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <MapPin className="h-5 w-5 text-[#E81932]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-gray-900">Available Routes</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {promo.applicableRoutes}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 bg-gray-50 border-t">
          <Button 
            className="w-full bg-[#E81932] hover:bg-[#C41230] text-white h-12 text-base font-medium
                       transition-all duration-200 group-hover:shadow-md"
            onClick={() => setIsPopupOpen(true)}
          >
            View & Copy Code
          </Button>
        </CardFooter>
      </Card>

      <CouponPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        code={promo.code}
        discount={promo.discount}
        description={promo.description}
        additionalInfo={promo.additionalInfo}
        blackoutDates={promo.blackoutDates}
        lastChecked={promo.lastChecked}
        bookingPeriod={promo.bookingPeriod}
        travelPeriod={promo.travelPeriod}
      />
    </>
  );
}