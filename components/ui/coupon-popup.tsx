"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Calendar, Info, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  travelPeriod
}: CouponPopupProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: "The promo code has been copied to your clipboard.",
        duration: 3000,
      });
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1500);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the code manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Your Promo Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-6 py-4">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-[#E81932]">{discount}</div>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          
          <div className="relative w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <code className="font-mono text-lg font-semibold text-gray-900">
                {code}
              </code>
              <Button
                size="sm"
                onClick={copyToClipboard}
                variant={copied ? "default" : "outline"}
                className={`ml-2 ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg text-sm">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
              <div className="space-y-1">
                <p>Book by: {formatDate(bookingPeriod.end)}</p>
                <p className="text-gray-500">
                  Travel period: {formatDate(travelPeriod.start)} - {formatDate(travelPeriod.end)}
                </p>
              </div>
            </div>

            {blackoutDates && blackoutDates.length > 0 && (
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                <p className="text-amber-600">
                  Blackout dates: {blackoutDates.join(', ').replace('/', ' to ')}
                </p>
              </div>
            )}

            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
              <p className="text-gray-600">{additionalInfo}</p>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Last verified: {formatDate(lastChecked)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 