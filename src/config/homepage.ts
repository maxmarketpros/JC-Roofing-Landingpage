export const homepageContent = {
  hero: {
    heading: {
      main: "Professional Services in",
      location: "Springfield, IL",
    },
    subtitle:
      "Premium quality work, transparent pricing, and full project accountability across Springfield and the surrounding region.",
    primaryCta: { label: "Get a Quote", href: "/contact" },
    secondaryCta: { label: "Call (555) 123-4567", href: "tel:+15551234567" },
  },
  aboutPreview: {
    eyebrow: "About Us",
    heading:
      "Your Local Service Experts in Springfield, IL",
    paragraph:
      "We are a premium service company based in Springfield, Illinois. For more than 15 years, we have helped property owners across the region turn their vision into reality with meticulous craftsmanship and transparent communication.",
    bullets: [
      {
        title: "Transparent Line-Item Pricing",
        description:
          "No hidden fees. You see exactly where your money goes before we start.",
      },
      {
        title: "Owner-Led Accountability",
        description:
          "We lead every project in person. Direct communication at every phase.",
      },
      {
        title: "Regional Expertise",
        description:
          "Built for the local climate, codes, and conditions of our service area.",
      },
    ],
    image: "about-preview",
    badge: { value: "15+", label: "Years of Experience" },
  },
  services: {
    eyebrow: "Our Services",
    heading: "Our Services in Springfield, IL",
    subtitle:
      "Comprehensive solutions tailored to your needs, delivered with precision and care.",
  },
  standards: {
    eyebrow: "Our Approach",
    heading: "Standards Every Springfield Project Deserves",
    paragraphs: [
      "Every project is held to a relentless standard of execution covering initial planning through final completion. This isn't just a marketing promise — it forms the daily operational backbone of every project we manage.",
      "The quality of professional work is determined long before the finishing touches. It lives in the precision of the schedule, the coordination of complex tasks, and the rigorous oversight that only an owner-led team can guarantee.",
    ],
    checklist: [
      "Documented scope of work before every phase",
      "Daily coordination with all team members",
      "Quality-first sequencing and critical hold points",
      "Clean, organized work sites maintained daily",
      "Safety protocols enforced rigorously",
      "Inspection readiness at every checkpoint",
      "Transparent budget tracking and updates",
      "Owner-present milestone walkthroughs",
    ],
    image: "standards-feature",
    badge: { value: "250+", label: "Projects Delivered" },
  },
  process: {
    eyebrow: "Our Process",
    heading: "Our Service Process in Springfield, IL",
    subtitle:
      "A proven process refined over 15 years to deliver exceptional results, every time.",
  },
  testimonials: {
    eyebrow: "Client Reviews",
    heading: "What Our Springfield Clients Say",
    subtitle:
      "Don't just take our word for it. Here's what our clients have to say about working with us.",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    subtitle:
      "Answers to common questions about our services, process, and what to expect.",
  },
  cta: {
    heading: "Ready to Start Your Springfield Project?",
    text: "Schedule a free consultation today and discover why hundreds of clients trust us with their most important projects.",
    primaryCta: { label: "Get a Quote", href: "/contact" },
    secondaryCta: { label: "Call (555) 123-4567", href: "tel:+15551234567" },
  },
} as const;
