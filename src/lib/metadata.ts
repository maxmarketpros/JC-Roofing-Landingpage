import { siteConfig } from "@/config/site";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogTitle: string;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMetadataOptions): PageMeta {
  const canonical = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    canonical,
    ogImage: ogImage || siteConfig.ogImage,
    ogTitle: `${title} | ${siteConfig.name}`,
  };
}
