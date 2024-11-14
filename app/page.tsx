"use client";

import { useState, useEffect } from "react";
import { Search, Plane, Tag, Clock, Filter, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PromoCard from "@/components/PromoCard";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";

// Move data to separate files in a real application
const categories = ["All", "International", "Domestic", "Student", "Business", "Seasonal"];

const promos = [
  {
    id: 1,
    code: "TK2024SPRING",
    discount: "20% OFF",
    category: "International",
    description: "Spring season discount on international flights",
    validUntil: "2024-05-31",
    terms: "Valid for international flights only. Blackout dates apply.",
    destinations: ["Europe", "Asia", "Americas"],
    minimumPurchase: "$500",
  },
  {
    id: 2,
    code: "STUDENT25",
    discount: "25% OFF",
    category: "Student",
    description: "Special student discount on all routes",
    validUntil: "2024-12-31",
    terms: "Must present valid student ID at check-in.",
    destinations: ["All Routes"],
    minimumPurchase: "$200",
  },
  {
    id: 3,
    code: "BUSINESS15",
    discount: "15% OFF",
    category: "Business",
    description: "Business class upgrade discount",
    validUntil: "2024-06-30",
    terms: "Valid for business class bookings only.",
    destinations: ["International Routes"],
    minimumPurchase: "$1000",
  },
  {
    id: 4,
    code: "SUMMER2024",
    discount: "30% OFF",
    category: "Seasonal",
    description: "Summer vacation special offer",
    validUntil: "2024-08-31",
    terms: "Valid for economy and business class. Cannot be combined with other offers.",
    destinations: ["Europe", "Mediterranean"],
    minimumPurchase: "$400",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("discount");
  const [isSearching, setIsSearching] = useState(false);

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
    <>
      <DisclaimerBanner />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#E81932] to-[#C41230] text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Turkish Airlines Promo Codes
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Find and save on your next journey with our curated collection of deals
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search by destination, code, or description..."
                    className="pl-10 bg-white/90 text-gray-900 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[180px] bg-white/90">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount">Highest Discount</SelectItem>
                    <SelectItem value="expiry">Expiring Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
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

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#E81932] hover:bg-[#C41230]"
                      : "hover:border-[#E81932]"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Search Results Info */}
            {isSearching && (
              <div className="mb-6">
                <p className="text-gray-600">
                  Found {filteredPromos.length} results for "{searchQuery}"
                </p>
              </div>
            )}

            {/* No Results Message */}
            {filteredPromos.length === 0 && (
              <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  No promo codes found. Try adjusting your search or filters.
                </AlertDescription>
              </Alert>
            )}

            {/* Promo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPromos.map((promo) => (
                <PromoCard key={promo.id} promo={promo} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}