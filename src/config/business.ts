export const businessConfig = {
  phone: "(555) 123-4567",
  phoneRaw: "+15551234567",
  email: "info@premierservices.com",
  address: {
    street: "1234 Main Street",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    full: "1234 Main Street, Springfield, IL 62701",
  },
  hours: {
    display: "Mon-Sat: 8 AM - 6 PM",
    structured: [
      { days: "Mo-Sa", opens: "08:00", closes: "18:00" },
    ],
  },

  // ===== SERVICE AREAS =====
  // Primary list used in footer, structured data, etc.
  serviceAreas: [
    "Springfield",
    "Shelbyville",
    "Capital City",
    "Ogdenville",
    "North Haverbrook",
  ],

  // Expanded city list for the Service Areas section on the homepage.
  // Each city can optionally link to a dedicated area page in the future.
  serviceAreaCities: [
    { name: "Springfield", href: "" },
    { name: "Shelbyville", href: "" },
    { name: "Capital City", href: "" },
    { name: "Ogdenville", href: "" },
    { name: "North Haverbrook", href: "" },
    { name: "Cypress Creek", href: "" },
    { name: "Brockway", href: "" },
    { name: "East Springfield", href: "" },
    { name: "West Springfield", href: "" },
    { name: "Shelbyville Heights", href: "" },
    { name: "Springfield Junction", href: "" },
    { name: "Waverly", href: "" },
  ],

  // Service areas section content
  serviceAreasHeading: "Serving Springfield & Central Illinois",
  serviceAreasSubtitle:
    "and surrounding areas including Shelbyville, Capital City, and the greater metro region.",

  // ===== MAP EMBED =====
  // If you have a Google Business Profile, paste the full embed src URL here.
  // To get it: Google Maps → search your business → Share → Embed a map → copy the src="" value
  // If left empty, falls back to a generic map centered on the business address city.
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.355408359939!2d-117.85053459999999!3d33.6738603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7a447c59297%3A0x47ae50923ef7bc34!2sMax%20Market%20Pros!5e0!3m2!1sen!2sus!4v1775504357479!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  // Paste your iframe embed URL here (e.g. from Jobber, HouseCall Pro, GoHighLevel, Jotform, etc.)
  // This is used on the contact page and the "Get a Quote" section across all pages.
  // Leave empty to show a styled placeholder.
  formEmbedUrl: "",
  formEmbedHeight: "600px",

  coordinates: { lat: 39.7817, lng: -89.6501 },
  yearEstablished: 2009,
  yearsExperience: "15+",
  projectsCompleted: "250+",
  ownerName: "John Smith",
} as const;

// Helper: returns the map embed URL — Google Business embed if set, otherwise a generic city map
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  // Fallback: generic Google Maps embed centered on the business city
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
