import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with texture and glow */}
      <div className="absolute inset-0 bg-brand-green/20 z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] z-0" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border-brand-gold/20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform <br />
            <span className="text-brand-gold">Your Property?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied homeowners in Kent and Seattle who trust Equinox for premium landscaping and reliable service.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="mailto:Equinoxlandscapellc@gmail.com?subject=Consultation%20Request&body=Hi%20Equinox%20Landscape%2C%20I%27d%20like%20to%20request%20a%20consultation."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-brand-gold text-brand-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              REQUEST A CONSULTATION <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="tel:2064188749"
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-bold text-lg"
            >
              <Phone size={20} className="text-brand-gold" /> (206) 418-8749
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/40">
            <a href="mailto:Equinoxlandscapellc@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-brand-gold/50" />
              <span>Equinoxlandscapellc@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-brand-gold/50" />
              <span>Text us for a quick reply</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/10 blur-[100px] rounded-full" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-green/20 blur-[100px] rounded-full" />
    </section>
  );
}
