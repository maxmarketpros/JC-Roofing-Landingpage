// One-shot asset generator: favicon variants + Open Graph card.
// Run with: node scripts/generate-assets.mjs
//
// Inputs:  public/images/logo.webp (white logo on transparent)
// Outputs: public/favicon-16x16.png
//          public/favicon-32x32.png
//          public/favicon.svg
//          public/apple-touch-icon.png (180x180)
//          public/android-chrome-192x192.png
//          public/android-chrome-512x512.png
//          public/og-image.png (1200x630, branded card)

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const publicDir = resolve(root, "public");

const BRAND_GREEN = "#0a4f39";
const BRAND_GREEN_DARK = "#063125";
const BG_DARK = "#0a0d0c";
const LOGO_PATH = resolve(publicDir, "images/logo.webp");

// Black house-with-roof silhouette on white. Used for every favicon variant
// (browser tab + iOS home screen + Android adaptive icon).
const HOUSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#ffffff"/>
  <path d="M32 6 L4 30 L10 30 L10 58 L54 58 L54 30 L60 30 Z" fill="#000000"/>
  <rect x="27" y="44" width="10" height="14" fill="#ffffff"/>
</svg>`;

// ---------- House-icon favicon at any pixel size ----------
async function makeSquareFavicon(size, outFile) {
  await sharp(Buffer.from(HOUSE_SVG))
    .resize(size, size)
    .png()
    .toFile(resolve(publicDir, outFile));

  console.log(`✓ ${outFile} (${size}×${size})`);
}

// ---------- favicon.svg — vector copy of the house icon ----------
async function makeSvgFavicon() {
  writeFileSync(resolve(publicDir, "favicon.svg"), HOUSE_SVG, "utf8");
  console.log("✓ favicon.svg");
}

// ---------- favicon.ico — multi-resolution (16, 32, 48) ----------
async function makeIcoFavicon() {
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) =>
      sharp(Buffer.from(HOUSE_SVG)).resize(s, s).png().toBuffer()
    )
  );
  const ico = await pngToIco(buffers);
  writeFileSync(resolve(publicDir, "favicon.ico"), ico);
  console.log("✓ favicon.ico (16/32/48 multi-res)");
}

// ---------- Open Graph card 1200x630 ----------
async function makeOgImage() {
  const W = 1200;
  const H = 630;

  // Embed the logo as a base64 PNG inside the SVG card so sharp can rasterize.
  const logoPng = await sharp(LOGO_PATH)
    .resize({ width: 360 })
    .png()
    .toBuffer();
  const logoB64 = logoPng.toString("base64");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG_DARK}"/>
      <stop offset="100%" stop-color="${BRAND_GREEN_DARK}"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="35%" r="60%">
      <stop offset="0%" stop-color="${BRAND_GREEN}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${BRAND_GREEN}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background layers -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Accent bar -->
  <rect x="0" y="0" width="8" height="${H}" fill="${BRAND_GREEN}"/>

  <!-- Logo -->
  <image href="data:image/png;base64,${logoB64}" x="80" y="80" width="320" height="118"/>

  <!-- Eyebrow -->
  <text x="80" y="290"
    fill="#5eaf85"
    font-family="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    font-size="22"
    font-weight="700"
    letter-spacing="4">FORT WORTH · FAMILY-OWNED SINCE 1996</text>

  <!-- Headline -->
  <text x="80" y="370"
    fill="#ffffff"
    font-family="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    font-size="76"
    font-weight="800">Roofing Contractor</text>
  <text x="80" y="455"
    fill="#93cdaf"
    font-family="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    font-size="76"
    font-weight="800">in Fort Worth, TX</text>

  <!-- Subline -->
  <text x="80" y="525"
    fill="#d8dfdb"
    font-family="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    font-size="28"
    font-weight="500">Re-roofing · Replacement · New Installs · DFW</text>

  <!-- Phone CTA -->
  <rect x="80" y="555" width="290" height="52" rx="10" fill="${BRAND_GREEN}"/>
  <text x="225" y="589"
    fill="#ffffff"
    font-family="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    font-size="22"
    font-weight="700"
    text-anchor="middle">📞  (817) 318-7663</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .png({ quality: 92 })
    .toFile(resolve(publicDir, "og-image.png"));

  console.log("✓ og-image.png (1200×630)");
}

// ---------- Run ----------
console.log("Generating brand assets…\n");
await makeSquareFavicon(16, "favicon-16x16.png");
await makeSquareFavicon(32, "favicon-32x32.png");
await makeSquareFavicon(180, "apple-touch-icon.png");
await makeSquareFavicon(192, "android-chrome-192x192.png");
await makeSquareFavicon(512, "android-chrome-512x512.png");
await makeSvgFavicon();
await makeIcoFavicon();
await makeOgImage();
console.log("\n✓ All assets generated in /public");
