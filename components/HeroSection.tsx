"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: HeroSectionProps) {
  // Debounce search input
  const debouncedSetSearchQuery = useMemo(
    () => debounce(setSearchQuery, 300),
    [setSearchQuery]
  );

  // Cleanup debounce on unmount
  useCallback(() => {
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [debouncedSetSearchQuery]);

  return (
    <div className="bg-[#E81932] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center min-h-[600px]">
          {/* Content Side */}
          <div className="w-full md:w-1/2 py-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turkish Airlines Promo Codes
            </h1>
            <p className="text-xl mb-8">
              Find and save on your next journey with our curated collection
              of deals
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by destination, code, or description..."
                  className="pl-10 bg-white text-gray-900"
                  defaultValue={searchQuery}
                  onChange={(e) => debouncedSetSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px] bg-white text-gray-900">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Highest Discount</SelectItem>
                  <SelectItem value="expiry">Expiring Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Image Side */}
          <div className="hidden md:block md:w-1/2 h-[600px]">
            <div className="w-full h-full rounded-lg overflow-hidden relative bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Turkish Airlines"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 