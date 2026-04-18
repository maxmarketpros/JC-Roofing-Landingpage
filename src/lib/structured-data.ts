import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig, FAQItem } from "@/types";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/images/logo.svg`,
    priceRange: "$$",
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
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

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

export function generateServiceSchema(service: ServiceConfig) {
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[],
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
