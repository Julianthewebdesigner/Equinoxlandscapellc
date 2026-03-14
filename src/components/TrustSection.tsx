import { motion } from "motion/react";
import { History, Target, Heart, Award } from "lucide-react";

export default function TrustSection() {
  const timeline = [
    {
      year: "Industry Roots",
      title: "Grown in the Field",
      description: "Our founder grew up in the landscaping industry, learning the craft from his father. This isn't just a business; it's a legacy.",
      icon: <History size={24} />
    },
    {
      year: "Youthful Drive",
      title: "Modern Systems",
      description: "At 21, our founder combines high energy with modern communication systems to ensure transparency and reliability.",
      icon: <Target size={24} />
    },
    {
      year: "Expert Crew",
      title: "Decades of Experience",
      description: "While the company is young, our crew brings many years of professional landscaping experience to every project.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none -translate-x-1/4 -translate-y-1/4">
        EQUINOX
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Grounded in Tradition, <br />
                <span className="text-white/40">Driven by Excellence.</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed">
                Equinox Landscape LLC was founded on a simple principle: high-quality work delivered with professional integrity. 
                Our founder's journey started alongside his father, mastering the art of property transformation from a young age.
              </p>
              <p className="mt-4 text-white/60 text-lg leading-relaxed">
                Today, we combine that deep-rooted knowledge with modern systems and a relentless drive to be the most reliable landscaping partner in King County.
              </p>
            </motion.div>

            <div className="flex gap-8 items-center pt-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold">15+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold">500+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Projects Done</p>
              </div>
            </div>
          </div>

          {/* Timeline Style Section from Reference */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  {idx !== timeline.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-brand-gold/50 to-transparent mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">{item.year}</span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">{item.title}</h4>
                  <p className="text-white/50 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
