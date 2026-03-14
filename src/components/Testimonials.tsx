import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Seattle Homeowner",
    text: "Equinox transformed our overgrown backyard into a modern oasis. Their attention to detail and clear communication made the whole process stress-free.",
    initials: "SJ",
  },
  {
    name: "Marcus Webb",
    location: "Renton Homeowner",
    text: "From the first call to the final walkthrough, everything was handled professionally. The crew showed up on time every day and the results exceeded our expectations.",
    initials: "MW",
  },
  {
    name: "Diana Torres",
    location: "Kent Homeowner",
    text: "Honest pricing, no surprises, and a yard that looks incredible. I've already recommended Equinox to three of my neighbors.",
    initials: "DT",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/Equinox-newhero.jpeg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-black/75" />

      <div className="relative z-10 py-28 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 uppercase">
            Stories of Stunning Transformations
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1 text-brand-gold text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
