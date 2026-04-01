const SITE_URL = "https://www.staugustinepressurewashingpros.com"

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "St. Augustine Pressure Washing Pros",
  telephone: "+1-904-234-5678",
  url: SITE_URL,
  image: `${SITE_URL}/images/before_after/home.png`,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "St. Augustine" },
    { "@type": "City", name: "Jacksonville" },
    { "@type": "City", name: "Jacksonville Beach" },
    { "@type": "City", name: "Ponte Vedra" },
    { "@type": "City", name: "St. Augustine Beach" },
    { "@type": "City", name: "Palm Coast" },
  ],
}

const services = [
  {
    serviceType: "Driveway Pressure Washing",
    description:
      "Professional driveway pressure washing that removes dirt, oil stains, and buildup to restore your driveway to like-new condition.",
  },
  {
    serviceType: "House Washing",
    description:
      "Safe and thorough house washing that removes mold, mildew, and grime from siding and exterior surfaces.",
  },
  {
    serviceType: "Roof Soft Wash",
    description:
      "Gentle roof soft washing that removes black streaks, algae, and moss without damaging shingles or tiles.",
  },
  {
    serviceType: "Patio & Deck Cleaning",
    description:
      "Expert patio and deck pressure washing that brings outdoor living spaces back to life with a fresh, clean look.",
  },
  {
    serviceType: "Fence Cleaning",
    description:
      "Professional fence cleaning that restores wood and vinyl fences to their original appearance.",
  },
  {
    serviceType: "Commercial Pressure Washing",
    description:
      "Commercial pressure washing services to keep storefronts, sidewalks, and business properties clean and professional.",
  },
]

const serviceSchemas = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.serviceType,
  description: service.description,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "St. Augustine Pressure Washing Pros",
  },
  areaServed: [
    { "@type": "City", name: "St. Augustine" },
    { "@type": "City", name: "Jacksonville" },
  ],
}))

const aggregateRating = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "St. Augustine Pressure Washing Pros",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "8",
    reviewCount: "8",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We had years of buildup on our driveway and it looks brand new now. Super fast and professional.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah C." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our house looks amazing after the wash. They showed up on time and got everything done the same day.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "The roof cleaning made a huge difference. All the dark streaks are gone.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jennifer W." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Quick quote, great price, and the results were better than expected.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David K." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "They cleaned our patio and fence — everything looks fresh again.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lisa T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Very easy process from start to finish. I'll definitely use them again.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James W." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We didn't realize how dirty everything had gotten until after the cleaning. The difference was night and day. They responded quickly, showed up on time, and got it done fast. Definitely using them again.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Maria G." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Booking was simple and they kept me updated the whole time. The house looks so much brighter now, especially the siding and back patio. You can tell they know what they're doing.",
    },
  ],
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />
    </>
  )
}
