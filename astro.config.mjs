import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
