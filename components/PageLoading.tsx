"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PageLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-[#E31837]" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </motion.div>
  );
} 