"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Plane, Search, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = () => {
    if (pathname === '/') {
      // If we're on home page, just scroll to search
      const searchSection = document.getElementById('search-section');
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      router.push('/?search=true');
    }
    setIsOpen(false);
  };

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      icon: Plane 
    },
    { 
      name: 'How It Works', 
      href: '/how-it-works',
      icon: null
    },
    { 
      name: 'Blog', 
      href: '/blog',
      icon: null
    },
    { 
      name: 'Search', 
      href: '#',
      icon: Search,
      onClick: handleSearch
    }
  ];

  // Add effect to handle search parameter
  useEffect(() => {
    if (pathname === '/' && window.location.search.includes('search=true')) {
      // Remove the search parameter
      window.history.replaceState({}, '', '/');
      // Scroll to search section after a short delay to ensure content is loaded
      setTimeout(() => {
        const searchSection = document.getElementById('search-section');
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <div className="absolute w-full top-0 z-[40]">
      <nav className="bg-white/30 hover:bg-white/50 transition-colors duration-200 backdrop-blur-[2px] hover:backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-12">
            {/* Logo Section with Disclaimer */}
            <div className="flex items-center pl-3 sm:pl-4">
              <Link href="/" className="flex items-center group">
                <Plane className="h-5 w-5 text-[#E31837] transform group-hover:-translate-y-0.5 transition-transform" />
                <span className="ml-2 font-semibold text-sm sm:text-base">
                  <span className="text-gray-900/90">TurkishAirlines</span>
                  <span className="text-[#E31837]">PromoCode</span>
                </span>
              </Link>
              <div className="hidden sm:flex items-center pl-3 ml-3 border-l border-gray-200/50">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1.5 text-amber-600/90 hover:text-amber-700 transition-colors">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">Independent Service</span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-amber-50 border-amber-200/50">
                      <p className="text-xs text-amber-800">
                        This website is not affiliated with Turkish Airlines. We are an independent service that helps travelers find the best deals.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center pr-4">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.onClick ? item.onClick() : router.push(item.href)}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                      pathname === item.href
                        ? "text-[#E31837] bg-white/80"
                        : "text-gray-700/90 hover:text-[#E31837] hover:bg-white/50"
                    )}
                  >
                    {item.icon ? (
                      <div className="flex items-center gap-1.5">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </div>
                    ) : (
                      item.name
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 mr-2 rounded-md text-gray-700/90 hover:text-[#E31837] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200/20 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto py-2 px-3">
              {/* Mobile Disclaimer */}
              <div className="flex items-center gap-2 px-3 py-2 mb-2 bg-amber-50/50 rounded-lg text-amber-800">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <p className="text-xs">
                  This website is not affiliated with Turkish Airlines
                </p>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.onClick ? item.onClick() : router.push(item.href)}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm transition-all duration-200 w-full text-left",
                      pathname === item.href
                        ? "bg-white/80 text-[#E31837] font-medium"
                        : "text-gray-700/90 hover:bg-white/50 hover:text-[#E31837]"
                    )}
                  >
                    {item.icon ? (
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </div>
                    ) : (
                      item.name
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
} 