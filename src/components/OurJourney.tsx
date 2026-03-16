import { useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef } from "react";

const milestones = [
  {
    year: "2020",
    index: "01",
    title: "The Foundation",
    tag: "Where It Began",
    body: [
      "Started working in landscaping alongside my father, learning the fundamentals of the industry from the ground up.",
      "This is where I discovered the real work behind landscaping — from demanding physical labor to deeply understanding what homeowners truly want from their property.",
    ],
  },
  {
    year: "2022",
    index: "02",
    title: "Craft & Code",
    tag: "Expanding the Vision",
    body: [
      "Began studying online marketing, communication, and sales — learning how to build genuine relationships with clients and understand their needs before a single project begins.",
      "During this time I also studied full-stack development and design, which gave me a strong eye for modern systems, workflow, and branding that would later define Equinox.",
    ],
  },
  {
    year: "2024",
    index: "03",
    title: "The Systems",
    tag: "Building the Process",
    body: [
      "Started handling full project estimates — mastering the scope of landscaping work including materials, labor, and realistic timelines.",
      "Began managing projects end-to-end and creating internal systems that served both client and company.",
      "Developed a process that makes every project clear, transparent, and efficient from day one.",
    ],
  },
  {
    year: "2025",
    index: "04",
    title: "Equinox Founded",
    tag: "The Launch",
    isFeatured: true,
    body: [
      "Founded Equinox Landscape LLC with a single vision: to modernize landscaping by combining skilled craftsmanship, clear communication, project transparency, and modern systems.",
      "The company is young. I'm young. I'll be the first to tell you that. But the crew behind every Equinox project carries 15–20 years of hands-on experience — and I grew up in this industry alongside them.",
      "I personally stay involved on every job site to ensure everything is executed correctly and to the standard our clients expect. Put a problem in front of us — we'll find the solution.",
    ],
    bullets: [
      "Skilled craftsmanship",
      "Clear communication",
      "Project transparency",
      "Modern systems",
    ],
  },
];

// All slides: milestone cards + closing quote
const TOTAL_SLIDES = milestones.length + 1;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "60%" : "-60%",
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: "0%",
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-60%" : "60%",
    opacity: 0,
    scale: 0.94,
  }),
};

export default function OurJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const prev = () => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  };

  const next = () => {
    if (activeIndex < TOTAL_SLIDES - 1) goTo(activeIndex + 1);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-black overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-brand-gold/4 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-brand-green/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-none">
              OUR{" "}
              <span className="text-brand-gold italic font-bold">JOURNEY</span>
            </h2>
            <p className="mt-4 text-white/50 text-base md:text-lg max-w-md leading-relaxed">
              From learning the craft to building the future of landscaping.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={activeIndex === TOTAL_SLIDES - 1}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Dot indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex items-center gap-2"
        >
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ width: i === activeIndex ? 32 : 12 }}
            >
              <div className="absolute inset-0 bg-white/15 rounded-full" />
              {i === activeIndex && (
                <motion.div
                  layoutId="dot-active"
                  className="absolute inset-0 bg-brand-gold rounded-full"
                />
              )}
            </button>
          ))}
          <span className="ml-3 text-white/25 text-xs tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Carousel viewport */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden" style={{ minHeight: 440 }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 30 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.35 },
              }}
              className="w-full"
            >
              {activeIndex < milestones.length ? (
                <TimelineCard
                  milestone={milestones[activeIndex]}
                  index={activeIndex}
                />
              ) : (
                <ClosingCard />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Individual Card ───────────────────────────────────────────────────────────

interface Milestone {
  year: string;
  index: string;
  title: string;
  tag: string;
  body: string[];
  isFeatured?: boolean;
  bullets?: string[];
}

function TimelineCard({
  milestone: m,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start max-w-3xl mx-auto">
      {/* Year column */}
      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 flex-shrink-0">
        <span
          className={`text-[11px] tracking-[0.2em] font-bold uppercase ${
            m.isFeatured ? "text-brand-gold" : "text-white/25"
          }`}
        >
          {m.index}
        </span>
        <div
          className={`hidden md:block w-[1px] h-20 ${
            m.isFeatured ? "bg-brand-gold/40" : "bg-white/10"
          }`}
        />
        <span
          className={`text-5xl md:text-7xl font-black tabular-nums leading-none ${
            m.isFeatured ? "text-brand-gold" : "text-white/10"
          }`}
        >
          {m.year}
        </span>
      </div>

      {/* Card body */}
      <div
        className={`flex-1 rounded-3xl p-7 md:p-10 relative overflow-hidden transition-all duration-500 ${
          m.isFeatured
            ? "bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-black border border-brand-gold/30 shadow-[0_0_40px_rgba(201,168,76,0.08)]"
            : "bg-brand-charcoal/60 border border-white/6"
        }`}
      >
        {m.isFeatured && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
        )}

        {index === 0 && (
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/images/IMG_4870.JPG"
              alt="Julian Aguilar"
              className="w-10 h-10 rounded-full object-cover object-top border border-brand-gold/30 flex-shrink-0"
            />
            <span className="text-[10px] text-white/30 tracking-widest uppercase">Julian Aguilar · Founder</span>
          </div>
        )}
        <span
          className={`text-[10px] uppercase tracking-[0.25em] font-semibold ${
            m.isFeatured ? "text-brand-gold/70" : "text-white/25"
          }`}
        >
          {m.tag}
        </span>
        <h3
          className={`mt-2 text-2xl md:text-3xl font-bold leading-tight ${
            m.isFeatured ? "text-white" : "text-white/80"
          }`}
        >
          {m.title}
        </h3>

        <div
          className={`w-full h-[1px] my-6 ${
            m.isFeatured
              ? "bg-gradient-to-r from-brand-gold/30 to-transparent"
              : "bg-white/6"
          }`}
        />

        <div className="flex flex-col gap-3">
          {m.body.map((para, pi) => (
            <p key={pi} className="text-sm md:text-base text-white/55 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {m.bullets && (
          <div className="mt-6 grid grid-cols-2 gap-2">
            {m.bullets.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-gold/60 flex-shrink-0" />
                <span className="text-[11px] text-white/50 tracking-wide">{b}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ClosingCard() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/8 via-brand-gold/4 to-transparent p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />
        <div className="relative">
          <div className="w-10 h-[1px] bg-brand-gold mb-8" />
          <p className="text-xl md:text-2xl font-bold leading-snug text-white/90">
            "I'm young, and I'll never pretend otherwise. But I grew up in this industry — I know the work, I know the problems, and I know how to solve them. Equinox is backed by a crew with{" "}
            <span className="text-brand-gold">15–20 years of experience</span>{" "}
            and driven by a founder who is{" "}
            <span className="text-brand-gold">all in on every project.</span>"
          </p>
          <div className="mt-10 flex items-center gap-4">
            <img
              src="/images/IMG_4870.JPG"
              alt="Julian Aguilar – Founder of Equinox Landscape LLC"
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-brand-gold/40 shadow-[0_0_16px_rgba(201,168,76,0.2)] flex-shrink-0"
            />
            <div>
              <p className="text-sm font-bold text-white/80">Julian Aguilar</p>
              <p className="text-[11px] text-white/30 tracking-widest uppercase">Founder · Equinox Landscape LLC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
