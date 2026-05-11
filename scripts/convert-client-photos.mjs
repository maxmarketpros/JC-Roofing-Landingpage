import sharp from "sharp";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const conversions = [
  { src: "photos-from-email/image.png",     dst: "public/images/aerial-shingle-estate.webp" },
  { src: "photos-from-email/image (1).png", dst: "public/images/metal-panel-postcard.webp" },
  { src: "photos-from-email/image (2).png", dst: "public/images/metal-country-home.webp" },
];

for (const { src, dst } of conversions) {
  const inPath  = resolve(root, src);
  const outPath = resolve(root, dst);
  await sharp(inPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outPath);
  console.log(`OK ${src} -> ${dst}`);
}
