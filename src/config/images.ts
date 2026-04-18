import type { ImageSlotConfig } from "@/types";

// ===== IMAGE MANIFEST =====
// Every image on the site has a named slot.
// To assign real images: replace the src path and update alt text.
// focalPoint: { x: 0-1, y: 0-1 } controls object-position (default: center/center)
//
// FUTURE WORKFLOW:
// 1. Add client images to /public/images/
// 2. Update this manifest to point each slot to the right file
// 3. Claude can analyze images and recommend slot assignments based on composition

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== HOMEPAGE =====
  "hero-home": {
    src: "/images/hero-home.jpg",
    alt: "Professional service work showcasing quality craftsmanship",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "about-preview": {
    src: "/images/about-preview.jpg",
    alt: "Quality workmanship on a recent project",
    width: 800,
    height: 1000,
    focalPoint: { x: 0.5, y: 0.3 },
  },
  "standards-feature": {
    src: "/images/standards-feature.jpg",
    alt: "Active project demonstrating our high standards",
    width: 800,
    height: 1000,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== SERVICE CARDS =====
  "service-1": {
    src: "/images/service-1.jpg",
    alt: "Service one project example",
    width: 800,
    height: 600,
  },
  "service-2": {
    src: "/images/service-2.jpg",
    alt: "Service two project example",
    width: 800,
    height: 600,
  },
  "service-3": {
    src: "/images/service-3.jpg",
    alt: "Service three project example",
    width: 800,
    height: 600,
  },

  // ===== SERVICE DETAIL PAGES =====
  "service-1-hero": {
    src: "/images/service-1-hero.jpg",
    alt: "Service one hero image",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-1-detail-1": {
    src: "/images/service-1-detail-1.jpg",
    alt: "Service one detailed work example",
    width: 800,
    height: 600,
  },
  "service-1-detail-2": {
    src: "/images/service-1-detail-2.jpg",
    alt: "Service one completed project",
    width: 800,
    height: 600,
  },
  "service-2-hero": {
    src: "/images/service-2-hero.jpg",
    alt: "Service two hero image",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-2-detail-1": {
    src: "/images/service-2-detail-1.jpg",
    alt: "Service two detailed work example",
    width: 800,
    height: 600,
  },
  "service-2-detail-2": {
    src: "/images/service-2-detail-2.jpg",
    alt: "Service two completed project",
    width: 800,
    height: 600,
  },
  "service-3-hero": {
    src: "/images/service-3-hero.jpg",
    alt: "Service three hero image",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-3-detail-1": {
    src: "/images/service-3-detail-1.jpg",
    alt: "Service three detailed work example",
    width: 800,
    height: 600,
  },
  "service-3-detail-2": {
    src: "/images/service-3-detail-2.jpg",
    alt: "Service three completed project",
    width: 800,
    height: 600,
  },

  // ===== ABOUT PAGE =====
  "about-hero": {
    src: "/images/about-hero.jpg",
    alt: "Our team at work",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "about-story": {
    src: "/images/about-story.jpg",
    alt: "Company founder leading a project on site",
    width: 800,
    height: 1000,
    focalPoint: { x: 0.5, y: 0.3 },
  },
  "about-team": {
    src: "/images/about-team.jpg",
    alt: "Our experienced team",
    width: 800,
    height: 600,
  },

  // ===== CONTACT PAGE =====
  "contact-hero": {
    src: "/images/contact-hero.jpg",
    alt: "Get in touch with our team",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== TESTIMONIALS =====
  "testimonial-1": {
    src: "/images/testimonial-1.jpg",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },
  "testimonial-2": {
    src: "/images/testimonial-2.jpg",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },
  "testimonial-3": {
    src: "/images/testimonial-3.jpg",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },

  // ===== BRANDING =====
  logo: {
    src: "/images/logo.svg",
    alt: "Company logo",
    width: 180,
    height: 48,
  },
  "logo-white": {
    src: "/images/logo-white.svg",
    alt: "Company logo",
    width: 180,
    height: 48,
  },
};
