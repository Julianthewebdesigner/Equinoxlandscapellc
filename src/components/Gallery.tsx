import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";

// ─── ADD YOUR IMAGES HERE ────────────────────────────────────────────────────
// Drop image files into:  public/images/gallery/
// Then add the filename below, e.g. "/images/gallery/my-photo.jpg"
const galleryImages: string[] = [
  // "/images/gallery/photo1.jpg",
  // "/images/gallery/photo2.jpg",
  // "/images/gallery/photo3.jpg",
];
// ─────────────────────────────────────────────────────────────────────────────

// Shows this many placeholder slots when no images are added yet
const PLACEHOLDER_COUNT = 6;

export default function Gallery() {
  const isEmpty = galleryImages.length === 0;
  const items = isEmpty
    ? Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => i)
    : galleryImages;

  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-semibold tracking-widest uppercase text-sm"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            Image Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              {isEmpty ? (
                <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center gap-3 text-white/30">
                  <ImageIcon size={32} />
                  <p className="text-xs text-center px-4 leading-relaxed">
                    Drop image in<br />
                    <span className="font-mono text-brand-gold/50">public/images/gallery/</span>
                  </p>
                </div>
              ) : (
                <>
                  <img
                    src={item as string}
                    alt={`Gallery photo ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </>
              )}
            </motion.div>
          ))}
        </div>

        {isEmpty && (
          <p className="text-center text-white/30 text-sm mt-8 font-mono">
            Add image paths to the <span className="text-brand-gold/50">galleryImages</span> array in{" "}
            <span className="text-brand-gold/50">src/components/Gallery.tsx</span>
          </p>
        )}
      </div>
    </section>
  );
}
