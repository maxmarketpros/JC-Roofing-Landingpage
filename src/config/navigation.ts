import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Service One", href: "/services/service-one" },
      { label: "Service Two", href: "/services/service-two" },
      { label: "Service Three", href: "/services/service-three" },
    ],
  },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Service One", href: "/services/service-one" },
      { label: "Service Two", href: "/services/service-two" },
      { label: "Service Three", href: "/services/service-three" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];
