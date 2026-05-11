import type { NavItem, FooterGroup } from "@/types";

// Multi-page nav — routes for full pages, anchors only for in-page jumps
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services/metal-roofing",
    children: [
      { label: "Metal Roofing", href: "/services/metal-roofing" },
      {
        label: "Asphalt Shingle Roofing",
        href: "/services/asphalt-shingle-roofing",
      },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Roof Repair", href: "/services/roof-repair" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Metal Roofing", href: "/services/metal-roofing" },
      {
        label: "Asphalt Shingle Roofing",
        href: "/services/asphalt-shingle-roofing",
      },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Roof Repair", href: "/services/roof-repair" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About JC Roofing", href: "/about" },
      { label: "Service Area", href: "/about#service-area" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Free Quote", href: "/contact#quote" },
    ],
  },
];
