import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works | Turkish Airlines Promo Codes',
  description: 'Learn how to find and use Turkish Airlines promo codes to save on your flights',
}

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Find Your Promo Code',
      description: 'Browse our curated collection of Turkish Airlines promo codes. Filter by destination, class, or discount amount to find the best deals for your trip.'
    },
    {
      title: 'Verify the Terms',
      description: 'Check the promo code details including validity period, eligible routes, and any booking conditions. We keep all information up to date.'
    },
    {
      title: 'Copy and Use',
      description: "Copy your chosen promo code and visit Turkish Airlines's official website. Apply the code during checkout to get your discount."
    },
    {
      title: 'Save on Your Flight',
      description: "Complete your booking on Turkish Airlines's website with the applied discount. Come back for more deals on your next trip!"
    }
  ]

  return (
    <div className="bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Save money on Turkish Airlines flights in just a few simple steps
        </p>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-[#E31837]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 