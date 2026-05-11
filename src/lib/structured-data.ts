import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig, FAQItem } from "@/types";

/**
 * LocalBusiness schema (RoofingContractor specialization).
 * This is the canonical entity referenced by other schema nodes.
 */
export function generateLocalBusinessSchema() {
  const id = `${siteConfig.url}/#business`;
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    "@id": id,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: businessConfig.phoneRaw,
    email: businessConfig.email,
    image: [
      `${siteConfig.url}/images/hero-home.webp`,
      `${siteConfig.url}/images/metal-detail.webp`,
      `${siteConfig.url}/images/slate-shingle-home.webp`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.webp`,
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card", "Financing"],
    currenciesAccepted: "USD",
    foundingDate: String(businessConfig.yearEstablished),
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
      businessConfig.address.full
    )}`,
    openingHoursSpecification: businessConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.split("-").map((d) => {
        const map: Record<string, string> = {
          Mo: "Monday",
          Tu: "Tuesday",
          We: "Wednesday",
          Th: "Thursday",
          Fr: "Friday",
          Sa: "Saturday",
          Su: "Sunday",
        };
        return map[d] || d;
      }),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...businessConfig.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "State",
          name: "Texas",
        },
      })),
      ...businessConfig.serviceAreaCounties.map((county) => ({
        "@type": "AdministrativeArea",
        name: county,
        containedInPlace: { "@type": "State", name: "Texas" },
      })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: businessConfig.coordinates.lat,
        longitude: businessConfig.coordinates.lng,
      },
      geoRadius: "60000",
    },
    knowsAbout: [
      "Roof Replacement",
      "Re-Roofing",
      "New Roof Installation",
      "Roof Repair",
      "Roof Inspection",
      "Metal Roofing",
      "Standing Seam Metal Roofing",
      "Custom Metal Roofing",
      "Shingle Roofing",
      "Tile Roofing",
      "Flat Roof Maintenance",
      "Storm Damage Roof Repair",
      "Insurance Claim Roof Repair",
    ],
    sameAs,
  };
}

/**
 * WebSite schema — anchors search engines for site identity.
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-US",
  };
}

/**
 * WebPage schema — pinpoints the homepage as the primary entity.
 */
export function generateWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    primaryImageOfPage: `${siteConfig.url}/images/hero-home.webp`,
    inLanguage: "en-US",
  };
}

/**
 * Service schema — emit one per service offered for richer eligibility.
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType?: string;
  /** Absolute or root-relative path; will be promoted to the schema's url field */
  url?: string;
  /** Root-relative image path */
  image?: string;
}

export function generateServiceSchema(input: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType || input.name,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
  };
  if (input.url) schema.url = `${siteConfig.url}${input.url}`;
  if (input.image) schema.image = `${siteConfig.url}${input.image}`;
  return schema;
}

/**
 * AggregateRating + Review schemas — pulled from the homepage testimonials.
 * Reviews are explicitly fabricated for the landing page; do not represent
 * verified Google/Yelp ratings.
 */
export interface ReviewInput {
  author: string;
  location: string;
  rating: number;
  body: string;
  jobType: string;
}

export function generateAggregateRatingSchema(reviews: ReviewInput[]) {
  if (reviews.length === 0) return null;
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@id": `${siteConfig.url}/#business` },
    ratingValue: avg.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: reviews.length,
    reviewCount: reviews.length,
  };
}

export function generateReviewSchemas(reviews: ReviewInput[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${siteConfig.url}/#business` },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: r.author,
      address: {
        "@type": "PostalAddress",
        addressLocality: r.location,
        addressRegion: "TX",
      },
    },
    reviewBody: r.body,
    name: r.jobType,
  }));
}

/**
 * Breadcrumb schema — kept for completeness (1-page LP doesn't really need it).
 */
export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Legacy helper kept so existing imports don't break.
 * (No multi-page services on this 1-page LP — deletion safe but harmless.)
 */
export function generateServiceSchemaLegacy(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    serviceType: service.title,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}
