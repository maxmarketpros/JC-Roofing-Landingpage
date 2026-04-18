import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === "/") return { ...item, priority: 1.0, changefreq: "weekly" };
        if (path.startsWith("/services/") && path !== "/services/") {
          return { ...item, priority: 0.9 };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
