import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DisclaimerBanner() {
  return (
    <Alert className="rounded-none border-l-4 border-yellow-500 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        This website is not affiliated with Turkish Airlines. We are an independent service that helps travelers find the best deals.
      </AlertDescription>
    </Alert>
  );
}