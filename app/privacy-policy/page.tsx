import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Turkish Airlines',
  description: 'Privacy policy and data protection information for Turkish Airlines services',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including name, contact information, payment details, and travel preferences. We also automatically collect certain information about your device and how you interact with our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to provide our services, process your transactions, communicate with you, and improve our services. We may also use your information to personalize your experience and send you marketing communications (subject to your preferences).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Protection
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                You have the right to access, correct, or delete your personal data. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact our data protection officer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 