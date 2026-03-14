import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight, Star, ChevronRight } from "lucide-react";

// ─── HERO IMAGES ──────────────────────────────────────────────────────────────
// Main background → public/images/hero/Equinox-newhero.jpeg
// Thumbnail 1     → public/images/hero/Hero-1.jpeg
// Thumbnail 2     → public/images/hero/Hero-2.jpeg
// Logo            → public/images/hero/Transparent-Equinox-logo.png
// ─────────────────────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    image: "/images/hero/Hero-1.jpeg",
    title: "Hardscape Patio & Garden Beds",
    location: "Bellevue, WA",
  },
  {
    image: "/images/hero/Hero-2.jpeg",
    title: "Stone Retaining Wall & Lighting",
    location: "Kirkland, WA",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="Equinox Landscape LLC – Seattle Landscaping & Hardscaping"
    >
      {/* ── Background ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/Equinox-newhero.jpeg"
          alt="Premium landscape and hardscape design by Equinox Landscape LLC in Seattle, WA"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* left fade so text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/75 to-brand-black/20" />
        {/* bottom fade into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        {/* subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Left – headline + CTAs */}
          <div className="max-w-3xl space-y-8">

            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30"
            >
              <MapPin size={13} className="text-brand-gold" />
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                Seattle, WA · King County
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif uppercase text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-wide">
                <span style={{ color: "#4a9e6b", textShadow: "0 0 40px rgba(255, 255, 255, 0.5)" }}>Crafting</span>{" "}
                <span className="text-white">Seattle's</span>
                <br />
                <span className="text-white">Most Stunning</span>
                <br />
                <span className="text-white">
                  Landscapes{" "}
                  <span style={{ color: "#4a9e6b", opacity: 0.7 }}>&amp;</span>{" "}
                  Hardscapes.
                </span>
              </h1>
            </motion.div>

            {/* Sub-copy — SEO-rich */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg text-white/75 max-w-xl leading-relaxed"
            >
              Equinox Landscape LLC transforms Seattle-area properties with expert
              landscape design, custom hardscaping, patio installation, and
              year-round maintenance — built to last and crafted to impress.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-brand-black font-bold px-8 py-4 rounded-full btn-glow-pulse transition-all"
              >
                Get Your Free Estimate <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-gold/50 text-white hover:text-brand-gold font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all"
              >
                View Our Work <ChevronRight size={18} />
              </motion.a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
                <span className="text-white/50 text-sm ml-1">5-Star Rated</span>
              </div>
              <div className="w-px h-5 bg-white/15 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={13} className="text-brand-gold" />
                <span className="font-bold text-white">(206) 418-8749</span>
              </div>
              <div className="w-px h-5 bg-white/15 hidden sm:block" />
              <span className="text-white/50 text-sm">Licensed &amp; Insured</span>
            </motion.div>
          </div>

          {/* Right – stat badge (desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center justify-center gap-1 w-36 h-36 rounded-full border border-brand-gold/40 bg-brand-gold/5 backdrop-blur-md shadow-[0_0_40px_rgba(201,168,76,0.18)] self-center"
          >
            <span className="text-5xl font-bold text-brand-gold leading-none">10</span>
            <span className="text-xl font-bold text-brand-gold leading-none">+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 text-center leading-tight mt-1">
              Years<br />Serving<br />Seattle
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Project Strip (mirrors inspiration) ───────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <div className="flex flex-col sm:flex-row items-stretch gap-4">

            {/* Logo card */}
            <div className="glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[220px]">
              <img
                src="/images/hero/Transparent-Equinox-logo.png"
                alt="Equinox Landscape LLC logo"
                className="w-14 h-14 object-contain drop-shadow-lg"
              />
              <div>
                <p className="font-bold text-sm leading-tight">Equinox Landscape LLC</p>
                <p className="text-white/40 text-xs mt-0.5">Seattle's Premier Landscaper</p>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-brand-gold text-xs font-semibold mt-1.5 hover:text-brand-gold-light transition-colors"
                >
                  See our work <ArrowRight size={11} />
                </a>
              </div>
            </div>

            {/* Project thumbnails */}
            <div className="flex gap-4 flex-1">
              {featuredProjects.map((project, idx) => (
                <motion.a
                  key={idx}
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  className="group relative flex-1 rounded-2xl overflow-hidden h-[100px] sm:h-auto cursor-pointer min-w-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="text-xs font-bold leading-tight">{project.title}</p>
                    <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                      <MapPin size={9} /> {project.location}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
