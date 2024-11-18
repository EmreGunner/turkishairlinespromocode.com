"use client";

import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from "@/hooks/useTranslation";

export default function DisclaimerBanner() {
  const { t } = useTranslation();

  return (
    <Alert className="rounded-none border-b bg-yellow-50/50 border-yellow-100">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        {t('disclaimer')}
      </AlertDescription>
    </Alert>
  );
}