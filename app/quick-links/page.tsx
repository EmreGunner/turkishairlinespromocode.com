import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quick Links | Turkish Airlines Promo Codes',
  description: 'Quick access to promo codes and deals for Turkish Airlines flights',
}

export default function QuickLinksPage() {
  const links = [
    {
      title: 'Latest Deals',
      description: 'View the most recent Turkish Airlines promo codes and offers',
      href: '/latest-deals'
    },
    {
      title: 'Business Class Deals',
      description: 'Find premium cabin discounts and special offers',
      href: '/business-class'
    },
    {
      title: 'Student Discounts',
      description: 'Special promo codes for student travelers',
      href: '/student-discounts'
    },
    {
      title: 'Seasonal Offers',
      description: 'Holiday and seasonal promotional discounts',
      href: '/seasonal-offers'
    },
    {
      title: 'Route Specific',
      description: 'Promo codes for specific destinations and routes',
      href: '/route-specific'
    },
    {
      title: 'Submit a Code',
      description: 'Help others save by sharing a promo code',
      href: '/submit-code'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Links</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Find the best Turkish Airlines promo codes for your next flight
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#E31837] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 