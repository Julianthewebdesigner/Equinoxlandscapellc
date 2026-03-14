import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";

// ─── ADD YOUR PROJECTS HERE ───────────────────────────────────────────────────
// Drop image files into:  public/images/projects/
// Then fill in each project below with title, description, and image path.
const projects: { title: string; description: string; image: string }[] = [
  // {
  //   title: "Backyard Transformation",
  //   description: "Full redesign with new sod, beds, and lighting.",
  //   image: "/images/projects/project1.jpg",
  // },
  // {
  //   title: "Front Yard Makeover",
  //   description: "Curb appeal overhaul with native plants.",
  //   image: "/images/projects/project2.jpg",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

const PLACEHOLDER_COUNT = 3;

export default function Projects() {
  const isEmpty = projects.length === 0;
  const items = isEmpty
    ? Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => i)
    : projects;

  return (
    <section id="projects" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-semibold tracking-widest uppercase text-sm"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-brand-black/50 border border-white/10 shadow-xl"
            >
              {/* Image area */}
              <div className="relative aspect-[4/3]">
                {isEmpty ? (
                  <div className="absolute inset-0 border-b border-dashed border-white/20 flex flex-col items-center justify-center gap-3 text-white/30">
                    <ImageIcon size={32} />
                    <p className="text-xs text-center px-4 leading-relaxed">
                      Drop image in<br />
                      <span className="font-mono text-brand-gold/50">public/images/projects/</span>
                    </p>
                  </div>
                ) : (
                  <img
                    src={(item as typeof projects[0]).image}
                    alt={(item as typeof projects[0]).title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-60" />
              </div>

              {/* Text area */}
              <div className="p-6">
                {isEmpty ? (
                  <div className="space-y-2">
                    <div className="h-5 w-2/3 rounded bg-white/10" />
                    <div className="h-4 w-full rounded bg-white/5" />
                    <div className="h-4 w-4/5 rounded bg-white/5" />
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2">
                      {(item as typeof projects[0]).title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {(item as typeof projects[0]).description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {isEmpty && (
          <p className="text-center text-white/30 text-sm mt-8 font-mono">
            Add projects to the <span className="text-brand-gold/50">projects</span> array in{" "}
            <span className="text-brand-gold/50">src/components/Projects.tsx</span>
          </p>
        )}
      </div>
    </section>
  );
}
