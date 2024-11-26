import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs | Turkish Airlines Promo Codes',
  description: 'Frequently asked questions about finding and using Turkish Airlines promo codes',
}

interface FAQItem {
  question: string
  answer: string
}

export default function FAQsPage() {
  const faqs: FAQItem[] = [
    {
      question: "How do I use a promo code on Turkish Airlines's website?",
      answer: "When booking on Turkish Airlines's website, proceed to the payment page where you'll find a \"Promo Code\" or \"Discount Code\" field. Enter the code exactly as shown on our site and click apply. The discount will be automatically calculated in your final price."
    },
    {
      question: 'Are these promo codes official?',
      answer: "Yes, all promo codes listed on our site are valid codes that work on Turkish Airlines's official website. We gather them from official sources, partner deals, and verified promotional campaigns."
    },
    {
      question: "Why isn't my promo code working?",
      answer: "Promo codes may not work if they've expired, don't apply to your route/class, or if your travel dates fall outside the valid period. Always check the terms and conditions listed with each code. If you find an invalid code, please report it to us."
    },
    {
      question: 'How often are new promo codes added?',
      answer: 'We update our promo code collection daily. Turkish Airlines regularly releases new promotional offers, and we make sure to add them as soon as they become available. Check back frequently for the latest deals.'
    },
    {
      question: 'Can I use multiple promo codes together?',
      answer: 'Generally, Turkish Airlines only allows one promo code per booking. Choose the code that gives you the highest discount for your specific flight and class of service.'
    }
  ]

  return (
    <div className="bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Everything you need to know about finding and using Turkish Airlines promo codes
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  )
} 