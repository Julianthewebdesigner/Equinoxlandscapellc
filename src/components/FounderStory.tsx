import { useRef } from "react";
import { motion, useInView } from "motion/react";

const pillars = [
  { label: "Family-Taught Craft", sub: "Learned from my father & uncle" },
  { label: "7 Years in the Field", sub: "Honing every detail others miss" },
  { label: "Radically Transparent", sub: "No surprises — ever" },
  { label: "Seattle & Puget Sound", sub: "Local expertise, local pride" },
];

export default function FounderStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-brand-black overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-brand-green/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="block text-brand-gold font-bold tracking-[0.25em] uppercase text-xs mb-16 md:mb-20"
        >
          The Man Behind Equinox
        </motion.span>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── Left: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="relative"
          >
            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold/25 shadow-[0_0_80px_rgba(201,168,76,0.1)]">
              {/* Top gold line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent z-10" />

              <img
                src="/images/Juliansequinoxpfp.jpeg"
                alt="Julian Aguilar – Founder of Equinox Landscape LLC"
                className="w-full object-cover object-center"
                style={{ aspectRatio: "3 / 4", maxHeight: 620 }}
              />

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent px-8 pt-16 pb-8 z-10">
                <p className="text-white font-bold text-lg tracking-tight">Julian Aguilar</p>
                <p className="text-brand-gold text-[10px] tracking-[0.28em] uppercase mt-1 font-semibold">
                  Founder · Equinox Landscape LLC
                </p>
              </div>
            </div>

            {/* Floating years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -bottom-5 -right-3 md:-right-7 bg-brand-charcoal border border-brand-gold/35 rounded-2xl px-5 py-4 shadow-[0_0_30px_rgba(201,168,76,0.14)]"
            >
              <p className="text-brand-gold text-3xl font-black leading-none">7+</p>
              <p className="text-white/45 text-[10px] tracking-widest uppercase mt-1.5 leading-tight">
                Years<br />Experience
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Story ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="flex flex-col gap-7"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08]">
              YOUR OUTDOOR<br />
              SPACE IS IN{" "}
              <span className="text-brand-gold italic">GOOD HANDS.</span>
            </h2>

            <div className="w-12 h-[1px] bg-brand-gold/50" />

            <div className="flex flex-col gap-5">
              <p className="text-white/60 text-base md:text-[1.05rem] leading-relaxed">
                I didn't learn this trade in a classroom — I learned it from the people I trust most. Growing up working alongside my father and my uncle, I developed a deep respect for the craft of building outdoor spaces the right way. Every technique, every standard, every lesson was earned through real work, in real conditions.
              </p>
              <p className="text-white/60 text-base md:text-[1.05rem] leading-relaxed">
                Over the past seven years, I've made it my mission to obsess over the details that other companies consistently overlook. The rushed drainage plan. The grading shortcuts. The materials that look great in photos but fail after the first Pacific Northwest winter. I've studied every flaw — and I've built Equinox around fixing them.
              </p>
              <p className="text-white/60 text-base md:text-[1.05rem] leading-relaxed">
                When you work with Equinox, you're working with a company built on honesty. I will never sell you something you don't need, overpromise on timelines, or leave you guessing about your project. From your first call to the final walkthrough — here in Seattle, Puget Sound, and the surrounding areas — you'll know exactly where things stand. Transparency isn't just good business; it's the only way I know how to operate.
              </p>
            </div>

            {/* Pull quote */}
            <div className="relative rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/6 via-brand-gold/3 to-transparent p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-gold/50 via-brand-gold/20 to-transparent" />
              <p className="text-white/80 text-sm md:text-base leading-relaxed italic">
                "I grew up in this industry. I know the work, I know the problems, and I know exactly how to solve them. Your property deserves that level of care — and that's precisely what Equinox delivers."
              </p>
              <p className="mt-4 text-brand-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                — Julian Aguilar, Founder
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: Four pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.45 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
              className="rounded-2xl border border-white/6 bg-brand-charcoal/50 p-6 hover:border-brand-gold/25 hover:bg-brand-charcoal/80 transition-all duration-300 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mb-4 group-hover:shadow-[0_0_8px_rgba(201,168,76,0.6)] transition-all duration-300" />
              <p className="text-white/85 font-semibold text-sm leading-snug">{pillar.label}</p>
              <p className="text-white/35 text-xs mt-2 leading-relaxed">{pillar.sub}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
