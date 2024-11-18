// Existing promo codes
const existingPromos = [
  // ... your existing promo codes
];

// New promo codes to be added
const newPromos = [
  {
    id: 1,
    code: "TKUCL2024QF",
    discount: "20% OFF",
    category: "International",
    description: "Special discount for UEFA Champions League Quarter Finals",
    validUntil: "2024-05-30",
    bookingPeriod: {
      start: "2024-03-15",
      end: "2024-05-30"
    },
    travelPeriod: {
      start: "2024-04-01",
      end: "2024-05-31"
    },
    destinations: [
      "London", "Madrid", "Paris", "Munich", "Manchester",
      "Barcelona", "Milan", "İstanbul"
    ],
    applicableRoutes: "Valid on routes to cities hosting UEFA Champions League matches",
    terms: "Valid for Economy and Business Class. Must show match ticket or fan club membership.",
    additionalInfo: "Discount applies to base fare only. Not valid for group bookings of more than 9 passengers.",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-04-19/2024-04-21"]
  },
  {
    id: 2,
    code: "012TKM24",
    discount: "20% OFF Business, 15% OFF Economy",
    category: "Business",
    description: "Multi-cabin discount for spring travel",
    validUntil: "2024-06-30",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-06-30"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2024-09-30"
    },
    destinations: [
      "All International Routes"
    ],
    applicableRoutes: "Valid on all international routes",
    terms: "Different discount rates apply to Business (20%) and Economy (15%) classes. Minimum stay: 3 days",
    additionalInfo: "Discount applies to base fare. Miles&Smiles members earn additional 1000 bonus miles.",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-07-15/2024-08-31"]
  },
  {
    id: 3,
    code: "135TKM24",
    discount: "15% OFF",
    category: "International",
    description: "Special offer from Morocco to Turkey destinations",
    validUntil: "2024-12-15",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-12-15"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2025-03-31"
    },
    destinations: [
      "Casablanca", "Marrakech", "Rabat", "İstanbul", "Antalya",
      "İzmir", "Ankara", "Bodrum"
    ],
    applicableRoutes: "Valid on direct flights from Morocco to Turkey",
    terms: "Valid for Economy and Business Class. Minimum stay: 3 days, maximum stay: 1 month",
    additionalInfo: "Complimentary stopover in İstanbul available on select routes",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-07-01/2024-08-31", "2024-12-20/2025-01-10"]
  },
  {
    id: 4,
    code: "EXTRA10",
    discount: "10% OFF",
    category: "Domestic",
    description: "Special discount on domestic routes within Turkey",
    validUntil: "2024-09-30",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-09-30"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2024-12-15"
    },
    destinations: [
      "All Domestic Routes in Turkey"
    ],
    applicableRoutes: "All domestic routes within Turkey",
    terms: "Valid for Economy Class only. Not valid for Business Class upgrades.",
    additionalInfo: "Extra 5% discount for Miles&Smiles members",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-07-15/2024-08-31", "2024-04-23", "2024-05-19"]
  },
  {
    id: 5,
    code: "EXTRA15",
    discount: "15% OFF",
    category: "Seasonal",
    description: "Spring season special on selected routes",
    validUntil: "2024-05-31",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-05-31"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2024-06-15"
    },
    destinations: [
      "London", "Paris", "Rome", "Amsterdam", "Vienna",
      "Prague", "Budapest", "Athens"
    ],
    applicableRoutes: "Selected European routes",
    terms: "Valid for Economy and Business Class. Minimum stay: 2 days",
    additionalInfo: "Includes free seat selection and extra baggage allowance",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-04-05/2024-04-10"]
  },
  {
    id: 6,
    code: "TURKISH20",
    discount: "20% OFF",
    category: "Student",
    description: "Student discount on international flights",
    validUntil: "2024-12-31",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-12-31"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2025-01-31"
    },
    destinations: [
      "All International Routes"
    ],
    applicableRoutes: "All international routes",
    terms: "Valid for students aged 18-26 with valid student ID. Economy Class only.",
    additionalInfo: "Extra baggage allowance of 10kg included. Student ID must be presented at check-in.",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-07-01/2024-08-31", "2024-12-15/2025-01-15"]
  },
  {
    id: 7,
    code: "FLIGHT30",
    discount: "$30 OFF",
    category: "International",
    description: "Fixed discount on long-haul flights",
    validUntil: "2024-08-31",
    bookingPeriod: {
      start: "2024-03-01",
      end: "2024-08-31"
    },
    travelPeriod: {
      start: "2024-03-15",
      end: "2024-12-15"
    },
    destinations: [
      "New York", "Los Angeles", "Chicago", "San Francisco",
      "Miami", "Houston", "Toronto", "Vancouver"
    ],
    applicableRoutes: "North American routes",
    terms: "Valid for Economy and Business Class on flights over 8 hours duration",
    additionalInfo: "Combinable with Miles&Smiles member discounts",
    lastChecked: "2024-03-14",
    blackoutDates: ["2024-07-01/2024-08-15", "2024-11-20/2024-11-30"]
  }
];

// Combine existing and new promos
const allPromos = [...existingPromos, ...newPromos];

export default allPromos; 