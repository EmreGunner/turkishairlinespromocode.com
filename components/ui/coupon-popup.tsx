"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Copy, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

interface CouponPopupProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  discount: string;
  description: string;
  additionalInfo: string;
  blackoutDates?: string[];
  lastChecked: string;
  bookingPeriod: {
    start: string;
    end: string;
  };
  travelPeriod: {
    start: string;
    end: string;
  };
}

export function CouponPopup({
  isOpen,
  onClose,
  code,
  discount,
  description,
  additionalInfo,
  blackoutDates,
  lastChecked,
  bookingPeriod,
  travelPeriod,
}: CouponPopupProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: t('promo.copied'),
      description: code,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{discount}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <p className="text-gray-600">{description}</p>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <code className="text-lg font-mono font-bold text-[#E81932]">
                  {code}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? t('promo.copied') : t('promo.copyCode')}
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium">{t('promo.bookingPeriod')}</p>
                <p className="text-sm text-gray-600">
                  {new Date(bookingPeriod.start).toLocaleDateString()} - {new Date(bookingPeriod.end).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium">Travel Period</p>
                <p className="text-sm text-gray-600">
                  {new Date(travelPeriod.start).toLocaleDateString()} - {new Date(travelPeriod.end).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {blackoutDates && blackoutDates.length > 0 && (
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Blackout Dates</p>
                  <p className="text-sm text-yellow-700">
                    {blackoutDates.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-500">
            <p>{additionalInfo}</p>
            <p className="mt-2">
              Last checked: {new Date(lastChecked).toLocaleDateString()}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 