"use client";

import { useState, useEffect } from "react";
import { Search, Plane, Tag, Clock, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ThreeDHeroSection from "@/components/3dHeroSection";
import PromoCard from "@/components/PromoCard";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import allPromos from "@/lib/data/promos";

const categories = [
  "All",
  "International",
  "Domestic",
  "Student",
  "Business",
  "Seasonal",
];

const promos = [
  ...allPromos.filter(promo => promo.id <= 7),
  ...allPromos.filter(promo => promo.id > 7)
];

// Update the PromoCard interface
interface Promo {
  id: number;
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
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("discount");
  const [isSearching, setIsSearching] = useState(false);

  // Handle scroll to content when clicking scroll indicator
  const handleScrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter and sort promos
  const filteredPromos = promos
    .filter((promo) => 
      (selectedCategory === "All" || promo.category === selectedCategory) &&
      (promo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       promo.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
       promo.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === "discount") {
        return parseInt(b.discount) - parseInt(a.discount);
      }
      return new Date(b.validUntil).getTime() - new Date(a.validUntil).getTime();
    });

  useEffect(() => {
    setIsSearching(searchQuery.length > 0);
  }, [searchQuery]);

  return (
    <main className="min-h-screen">
      <DisclaimerBanner />
      
      <ThreeDHeroSection onScrollClick={handleScrollToContent} />

      <section id="content-section" className="bg-gray-50">
        <div className="bg-gradient-to-r from-[#E81932] to-[#C41230] text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <Input
                  placeholder="Search by destination, code, or description..."
                  className="pl-12 h-14 bg-white/95 text-gray-900 w-full text-lg rounded-xl border-2 border-white/20 focus:border-white/40 transition-all shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Plane, label: "300+ Destinations" },
              { icon: Tag, label: "Verified Deals" },
              { icon: Clock, label: "Updated Daily" },
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center gap-3"
              >
                <Icon className="h-6 w-6 text-[#E81932]" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 text-sm py-2 px-4 ${
                      selectedCategory === category
                        ? "bg-[#E81932] hover:bg-[#C41230] text-white"
                        : "hover:border-[#E81932] hover:text-[#E81932]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500 font-medium px-2">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px] border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-gray-700">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount" className="text-sm">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Highest Discount
                      </div>
                    </SelectItem>
                    <SelectItem value="expiry" className="text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Expiring Soon
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isSearching && (
              <div className="mb-6 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-100">
                <p className="text-gray-600">
                  Found <span className="font-semibold text-[#E81932]">{filteredPromos.length}</span> results for "<span className="font-medium">{searchQuery}</span>"
                </p>
              </div>
            )}

            {filteredPromos.length === 0 && (
              <Alert className="mb-6 border-[#E81932]/20 bg-[#E81932]/5">
                <AlertTriangle className="h-4 w-4 text-[#E81932]" />
                <AlertDescription className="text-gray-700">
                  No promo codes found. Try adjusting your search or filters.
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPromos.map((promo) => (
                <PromoCard key={promo.id} promo={promo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}