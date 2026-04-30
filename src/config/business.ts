export const businessConfig = {
  phone: "(817) 318-7663",
  phoneRaw: "+18173187663",
  email: "jcroofingtx@gmail.com",
  address: {
    street: "3001 Joyce Dr",
    city: "Fort Worth",
    state: "TX",
    zip: "76116",
    full: "3001 Joyce Dr, Fort Worth, TX 76116",
  },
  hours: {
    display: "Mon–Sat: 8 AM – 5 PM · 24/7 Emergency",
    structured: [
      { days: "Mo-Sa", opens: "08:00", closes: "17:00" },
    ],
  },

  serviceAreas: [
    "Fort Worth",
    "Arlington",
    "Keller",
    "Bedford",
    "Hurst",
    "Euless",
    "Grapevine",
    "Mansfield",
    "Burleson",
    "North Richland Hills",
    "Southlake",
    "Colleyville",
  ],

  serviceAreaCities: [
    { name: "Fort Worth", href: "" },
    { name: "Arlington", href: "" },
    { name: "Keller", href: "" },
    { name: "Bedford", href: "" },
    { name: "Hurst", href: "" },
    { name: "Euless", href: "" },
    { name: "Grapevine", href: "" },
    { name: "Mansfield", href: "" },
    { name: "Burleson", href: "" },
    { name: "North Richland Hills", href: "" },
    { name: "Southlake", href: "" },
    { name: "Colleyville", href: "" },
  ],

  serviceAreasHeading: "Serving Fort Worth & the DFW Metro",
  serviceAreasSubtitle:
    "Headquartered in Fort Worth, on roofs across Tarrant County and beyond.",

  // Service-area map: Google Maps embed of the Dallas–Fort Worth Metropolitan Area.
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1718674.7265533076!2d-99.46147138724612!3d32.718298514969604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82b81f3a3a2d%3A0x53724d9a808b8ce5!2sDallas-Fort%20Worth%20Metropolitan%20Area%2C%20TX!5e0!3m2!1sen!2sus!4v1777574208276!5m2!1sen!2sus",

  // Form is a native Netlify form on this LP — no third-party embed
  formEmbedUrl: "",
  formEmbedHeight: "600px",

  coordinates: { lat: 32.7283, lng: -97.4234 },
  yearEstablished: 1996,
  yearsExperience: "30",
  familyHeritageYears: "90",
  ownerStartedYear: 1985,
  generationsInTrade: 3,
  ownerName: "",
} as const;

export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
