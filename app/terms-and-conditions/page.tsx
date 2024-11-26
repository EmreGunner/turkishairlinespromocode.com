import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Turkish Airlines',
  description: 'Terms and conditions for using Turkish Airlines services',
}

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms & Conditions
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. General Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Turkish Airlines' services, you agree to be bound by these terms and conditions. These terms apply to all services provided by Turkish Airlines, including but not limited to flight bookings, Miles&Smiles program, and online services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Booking and Tickets
              </h2>
              <p className="text-gray-600 mb-4">
                All tickets are subject to availability and Turkish Airlines' conditions of carriage. Prices include applicable taxes and fees unless otherwise stated. Turkish Airlines reserves the right to cancel bookings that it reasonably believes to have been made fraudulently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Passenger Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                Passengers are responsible for ensuring they have valid travel documents, including visas where required. Passengers must arrive at the airport with sufficient time for check-in and security procedures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Changes and Cancellations
              </h2>
              <p className="text-gray-600 mb-4">
                Changes and cancellations are subject to the fare rules of your ticket. Additional fees may apply. Turkish Airlines reserves the right to modify flight schedules and routes when necessary.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 