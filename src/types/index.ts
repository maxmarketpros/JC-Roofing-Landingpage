export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceSubTopic {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  imageKey: string;
}

export interface ServiceConfig {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  description: string[];
  /** H2 for the intro/overview section (replaces generic "Why Choose Our X") */
  overviewHeading: string;
  /** H2 + subtitle for the Key Benefits section — unique per service */
  benefitsHeading: string;
  benefitsSubtitle: string;
  benefits: BenefitItem[];
  /** Alternating feature showcase — 2 unique items per service, each with its own image */
  featureHighlights: FeatureHighlight[];
  /** H2 for the Scope/What's Included section (replaces generic "Complete Service Scope") */
  scopeHeading: string;
  features: string[];
  faqKeys: string[];
  ctaHeading: string;
  ctaText: string;
  // SEO-focused sub-topic sections for service pages
  // These provide keyword-rich content with icon cards
  topicSectionA: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
  topicSectionB: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}
