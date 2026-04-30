import type { NavItem, FooterGroup } from "@/types";

// 1-page landing nav — anchors only
export const mainNav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why JC", href: "#why-jc" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Re-Roofing", href: "#services" },
      { label: "Roof Replacement", href: "#services" },
      { label: "New Roof Installation", href: "#services" },
      { label: "Roof Repair", href: "#services" },
      { label: "Metal Roofing", href: "#services" },
      { label: "Free Inspections", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why JC Roofing", href: "#why-jc" },
      { label: "Our Process", href: "#process" },
      { label: "Reviews", href: "#reviews" },
      { label: "Service Area", href: "#service-area" },
      { label: "FAQ", href: "#faq" },
      { label: "Get a Quote", href: "#contact" },
    ],
  },
];
