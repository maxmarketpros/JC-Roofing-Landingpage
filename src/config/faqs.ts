import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    id: "faq-general-1",
    question: "How do I get started with a project?",
    answer:
      "Getting started is simple. Contact us by phone or through our online form to schedule a free consultation. We'll discuss your project goals, assess the scope of work, and provide a detailed estimate — all before any commitment.",
  },
  {
    id: "faq-general-2",
    question: "What areas do you serve?",
    answer:
      "We serve Springfield and the surrounding region, including Shelbyville, Capital City, Ogdenville, and North Haverbrook. If you're unsure whether your location falls within our service area, give us a call and we'll let you know.",
  },
  {
    id: "faq-general-3",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. During your initial consultation, we'll provide a realistic timeline based on your specific project. We pride ourselves on meeting deadlines and keeping you informed throughout the process.",
  },
  {
    id: "faq-general-4",
    question: "Do you provide written estimates?",
    answer:
      "Yes. Every project begins with a detailed written estimate that breaks down all costs by line item. We believe in complete transparency — you'll know exactly where every dollar goes before we begin any work.",
  },
  {
    id: "faq-general-5",
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability insurance and workers' compensation coverage for every member of our team. Copies are available upon request.",
  },
  {
    id: "faq-general-6",
    question: "What kind of warranty do you offer?",
    answer:
      "We stand behind our work with a comprehensive warranty. The specific terms vary by service type, but every project includes a written warranty covering both materials and workmanship. We'll discuss the details during your consultation.",
  },
  {
    id: "faq-contact-1",
    question: "What is the best way to reach you?",
    answer:
      "You can reach us by phone during business hours, through our online contact form, or by email. We respond to all inquiries within one business day.",
  },
  {
    id: "faq-contact-2",
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer complimentary consultations for all new projects. During the consultation, we'll discuss your goals, assess the work needed, and provide a no-obligation estimate.",
  },

  // ===== SERVICE ONE FAQs =====
  {
    id: "faq-s1-1",
    question: "What does Service One include from start to finish?",
    answer:
      "Service One covers the entire lifecycle from initial assessment and planning through execution and final walkthrough. Every phase is managed by a dedicated project lead to ensure nothing is missed.",
  },
  {
    id: "faq-s1-2",
    question: "How long does a typical Service One project take?",
    answer:
      "Most Service One projects take between 2 to 6 weeks depending on scope and complexity. During the consultation phase, we provide a detailed timeline specific to your project.",
  },
  {
    id: "faq-s1-3",
    question: "Do you offer a warranty on Service One work?",
    answer:
      "Yes, all Service One projects include a comprehensive warranty covering both workmanship and materials. We stand behind the quality of our work and want you to have complete confidence in the results.",
  },

  // ===== SERVICE TWO FAQs =====
  {
    id: "faq-s2-1",
    question: "What makes Service Two different from your other offerings?",
    answer:
      "Service Two is designed for projects that require specialized expertise and advanced techniques. It includes a dedicated specialist team, custom planning, and enhanced quality control measures beyond our standard offering.",
  },
  {
    id: "faq-s2-2",
    question: "Can Service Two be customized to my specific requirements?",
    answer:
      "Absolutely. Every Service Two engagement begins with a deep-dive consultation where we learn your exact requirements. We then build a custom scope of work tailored to your goals, timeline, and budget.",
  },
  {
    id: "faq-s2-3",
    question: "What kind of progress updates can I expect during Service Two?",
    answer:
      "You'll receive regular progress updates at each milestone, including photos, status reports, and budget tracking. Your dedicated project manager is also available for calls and site visits throughout the process.",
  },

  // ===== SERVICE THREE FAQs =====
  {
    id: "faq-s3-1",
    question: "Is Service Three suitable for large-scale projects?",
    answer:
      "Yes, Service Three is specifically designed for large and complex projects. Our management framework scales to handle multiple teams, vendors, and concurrent workstreams while maintaining full accountability.",
  },
  {
    id: "faq-s3-2",
    question: "How does Service Three help control project costs?",
    answer:
      "We provide real-time budget tracking, proactive value engineering, and transparent reporting at every milestone. Our procurement expertise also helps secure competitive pricing from trusted suppliers.",
  },
  {
    id: "faq-s3-3",
    question: "What documentation do I receive at the end of a Service Three project?",
    answer:
      "You receive a comprehensive closeout package including as-built documentation, warranty information, inspection records, change order logs, and a final accounting summary.",
  },
];

export function getFaqsByKeys(keys: string[]): FAQItem[] {
  return faqs.filter((faq) => keys.includes(faq.id));
}

export const homepageFaqKeys = [
  "faq-general-1",
  "faq-general-2",
  "faq-general-3",
  "faq-general-4",
  "faq-general-5",
  "faq-general-6",
];

export const contactFaqKeys = [
  "faq-contact-1",
  "faq-contact-2",
  "faq-general-2",
  "faq-general-4",
];
