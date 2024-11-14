"use client";

import { useState } from "react";
import { Copy, Check, Calendar, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { useToast } from "@/components/ui/use-toast";

interface PromoCardProps {
  promo: {
    code: string;
    discount: string;
    category: string;
    description: string;
    validUntil: string;
    terms: string;
    destinations: string[];
    minimumPurchase: string;
  };
}

export default function PromoCard({ promo }: PromoCardProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      toast({
        title: t("promo.copied"),
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const isExpiringSoon = () => {
    const daysUntilExpiry = Math.ceil(
      (new Date(promo.validUntil).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilExpiry <= 30;
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg premium-shadow animate-fade-in">
      <CardHeader className="premium-gradient text-white">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">{promo.discount}</CardTitle>
            <CardDescription className="text-white/90 mt-1">
              {promo.description}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="bg-white text-[#E81932]">
              {promo.category}
            </Badge>
            {isExpiringSoon() && (
              <Badge variant="secondary" className="bg-yellow-400 text-gray-900">
                {t("promo.expiresSoon")}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{t("promo.validUntil")} {new Date(promo.validUntil).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{promo.destinations.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>{t("promo.minPurchase")}: {promo.minimumPurchase}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600">{promo.terms}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <div className="w-full flex items-center gap-3">
          <div className="flex-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <code className="px-4 py-2 bg-white border rounded-md font-mono text-sm select-all">
                    {promo.code}
                  </code>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("promo.clickToCopy")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button
            onClick={copyToClipboard}
            variant={copied ? "default" : "outline"}
            className={cn(
              "premium-button min-w-[120px]",
              copied && "bg-green-600 hover:bg-green-700"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" /> {t("promo.copied")}
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" /> {t("promo.copyCode")}
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}