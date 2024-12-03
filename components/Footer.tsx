"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              About This Site
            </h3>
            <p className="text-sm leading-relaxed">
              We provide curated promo codes for Turkish Airlines flights. This is an independent website and is not affiliated with Turkish Airlines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/how-it-works" 
                  className="text-sm hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  href="/faqs" 
                  className="text-sm hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-and-conditions" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/submit-code" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Submit a Promo Code
                </Link>
              </li>
              <li>
                <Link 
                  href="/report-issue" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Turkish Airlines</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: 'https://facebook.com/TurkishAirlines' },
                  { icon: Twitter, href: 'https://twitter.com/TurkishAirlines' },
                  { icon: Instagram, href: 'https://instagram.com/TurkishAirlines' },
                  { icon: Youtube, href: 'https://youtube.com/TurkishAirlines' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <a
                href="https://www.turkishairlines.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#E31837] hover:bg-[#C41230] text-white rounded-lg transition-colors duration-200 gap-2 font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Turkish Airlines
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            © {currentYear} TurkishAirlinesPromoCode. This is an independent website. Not affiliated with Turkish Airlines.
          </p>
        </div>
      </div>
    </footer>
  );
}