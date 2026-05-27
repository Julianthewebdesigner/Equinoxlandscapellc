import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import { dirname, basename, extname, join } from "node:path";

const ROOT = "/Users/juliansmac/Downloads/equinox-landscape/public/images";

const jobs = [
  { src: "hero/Equinox-newhero.jpeg",      widths: [640, 1024, 1600, 1920], q: 72, formats: ["webp", "jpg"] },
  { src: "hero/Hero-1.jpeg",               widths: [400, 800],               q: 78, formats: ["webp", "jpg"] },
  { src: "hero/Hero-2.jpeg",               widths: [400, 800],               q: 78, formats: ["webp", "jpg"] },
  { src: "hero/Transparent-Equinox-logo.png", widths: [112, 224],            q: 90, formats: ["webp", "png"], pngPalette: true },
  { src: "service-card-section/landscapedesignservicecard.jpeg", widths: [480, 800, 1200], q: 75, formats: ["webp", "jpg"] },
  { src: "service-card-section/landscapeservices.jpeg",          widths: [480, 800, 1200], q: 75, formats: ["webp", "jpg"] },
  { src: "service-card-section/pavers.jpeg",                     widths: [480, 800, 1200], q: 75, formats: ["webp", "jpg"] },
  { src: "service-card-section/turf-grass.jpeg",                 widths: [480, 800, 1200], q: 75, formats: ["webp", "jpg"] },
  { src: "IMG_4870.JPG",                   widths: [400, 800, 1200],         q: 75, formats: ["webp", "jpg"] },
  { src: "Juliansequinoxpfp.jpeg",         widths: [400, 800, 1200],         q: 75, formats: ["webp", "jpg"] },
];

function outName(src, w, fmt) {
  const dir = dirname(src);
  const base = basename(src, extname(src));
  return join(dir, "optimized", `${base}-${w}.${fmt}`);
}

async function processOne(job) {
  const srcPath = join(ROOT, job.src);
  const srcSize = statSync(srcPath).size;
  console.log(`\n→ ${job.src} (${(srcSize / 1024).toFixed(0)}KB)`);

  for (const w of job.widths) {
    for (const fmt of job.formats) {
      const out = join(ROOT, outName(job.src, w, fmt));
      mkdirSync(dirname(out), { recursive: true });

      let pipeline = sharp(srcPath).resize({ width: w, withoutEnlargement: true });

      if (fmt === "webp") {
        pipeline = pipeline.webp({ quality: job.q, effort: 5 });
      } else if (fmt === "jpg") {
        pipeline = pipeline.jpeg({ quality: job.q, progressive: true, mozjpeg: true });
      } else if (fmt === "png") {
        pipeline = pipeline.png({ compressionLevel: 9, palette: job.pngPalette ?? false });
      }

      const info = await pipeline.toFile(out);
      console.log(`   ${fmt.padEnd(4)} ${String(w).padStart(4)}w  →  ${(info.size / 1024).toFixed(1)}KB  ${outName(job.src, w, fmt)}`);
    }
  }
}

for (const job of jobs) {
  await processOne(job);
}

console.log("\n✓ done");
