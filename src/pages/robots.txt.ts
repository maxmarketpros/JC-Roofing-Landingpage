import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Disallow: /_astro/

Sitemap: ${siteConfig.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
