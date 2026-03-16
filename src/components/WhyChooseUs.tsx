import { motion } from "motion/react";
import { CheckCircle2, Users, Clock, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="text-brand-gold" />,
      title: "Experienced Crews",
      description: "Our crew brings 15–20 years of professional landscaping experience. The company is new — the skill isn't."
    },
    {
      icon: <Clock className="text-brand-gold" />,
      title: "Reliable Timelines",
      description: "We respect your time. Projects are completed on schedule as promised."
    },
    {
      icon: <ShieldCheck className="text-brand-gold" />,
      title: "Clear Communication",
      description: "Transparent updates and systems so you always know the project status."
    },
    {
      icon: <CheckCircle2 className="text-brand-gold" />,
      title: "Attention to Detail",
      description: "We don't cut corners. Every edge and plant is handled with precision."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Angled background effect similar to reference */}
      <div className="absolute inset-0 bg-brand-charcoal -skew-y-3 origin-right translate-y-20 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                OUR COMMITMENT TO EXCELLENCE. <br />
                <span className="text-brand-gold">YOUR PEACE OF MIND, GUARANTEED.</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg max-w-xl">
                I'm a young founder with a passion for this work and a crew that has been doing it for 15–20 years. That combination — fresh energy, deep experience, and honest communication — is what you're hiring when you choose Equinox.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000" 
                alt="Landscaping Excellence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl">
                <p className="text-brand-gold font-bold text-2xl mb-1">100% Satisfaction</p>
                <p className="text-white/70 text-sm">We don't leave until you're thrilled with the transformation.</p>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/40 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
