export const businessConfig = {
  phone: "(817) 318-7663",
  phoneRaw: "+18173187663",
  email: "office@jcroofingtexas.com",
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

  // ===== SERVICE AREAS =====
  // Targeted zip codes grouped by USPS-assigned city.
  // Used in the Service Area section, footer, and structured data.
  serviceAreaCities: [
    {
      name: "Fort Worth",
      county: "Tarrant County",
      zips: ["76108", "76116", "76135", "76179"],
    },
    {
      name: "Azle",
      county: "Tarrant County",
      zips: ["76020"],
    },
    {
      name: "Springtown",
      county: "Parker County",
      zips: ["76082"],
    },
    {
      name: "Weatherford",
      county: "Parker County",
      zips: ["76087"],
    },
    {
      name: "Cresson",
      county: "Hood / Parker County",
      zips: ["76035"],
    },
    {
      name: "Godley",
      county: "Johnson County",
      zips: ["76044"],
    },
    {
      name: "Joshua",
      county: "Johnson County",
      zips: ["76058"],
    },
  ],

  // Flat list (used in footer + LocalBusiness schema)
  serviceAreas: [
    "Fort Worth",
    "Azle",
    "Springtown",
    "Weatherford",
    "Cresson",
    "Godley",
    "Joshua",
  ],

  serviceAreaCounties: [
    "Tarrant County",
    "Parker County",
    "Palo Pinto County",
    "Johnson County",
    "Wise County",
  ],

  serviceAreasHeading:
    "Serving Fort Worth, Parker, Palo Pinto, Johnson & Wise Counties",
  serviceAreasSubtitle:
    "Local crews from our Fort Worth shop, on roofs across Tarrant, Parker, Palo Pinto, Johnson, and Wise Counties.",

  // Service-area Google Maps embed — Fort Worth, TX (pb URL from Maps share).
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429277.30985828233!2d-97.64660940837456!3d32.79944464047413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1777578432318!5m2!1sen!2sus",

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
