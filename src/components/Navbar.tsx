import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services", number: "01" },
    { name: "Projects", href: "#projects", number: "02" },
    { name: "Gallery", href: "#gallery", number: "03" },
    { name: "FAQ", href: "#faq", number: "04" },
    { name: "Contact", href: "#contact", number: "05" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-brand-black/80 backdrop-blur-lg border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-50">
            <img
              src="/images/hero/Transparent-Equinox-logo.png"
              alt="Equinox Landscape LLC"
              className="w-11 h-11 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">
                EQUINOX <span className="text-brand-gold">LANDSCAPE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                LLC · Seattle, WA
              </span>
            </div>
          </a>

          {/* Desktop Nav — visible lg+ */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-brand-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <Phone size={16} className="text-brand-gold" />
                <span className="text-sm font-bold">(206) 418-8749</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-brand-black px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
              >
                GET A QUOTE
              </motion.button>
            </div>
          </div>

          {/* Mobile Hamburger Button — hidden lg+ */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 7, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }
              }
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="block h-[1.5px] w-full bg-white origin-center"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { opacity: 0, x: 8 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block h-[1.5px] w-3/4 self-end bg-white"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -7, width: "100%" }
                  : { rotate: 0, y: 0, width: "66%" }
              }
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="block h-[1.5px] bg-white origin-center self-start"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" />

            {/* Decorative gold orb */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-green/10 blur-[100px] pointer-events-none" />

            {/* Thin gold top border */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent origin-left"
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-between px-8 pt-28 pb-12">
              {/* Nav Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + i * 0.07,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-baseline gap-4 py-5 border-b border-white/[0.06] group-hover:border-brand-gold/20 transition-colors duration-300"
                    >
                      <span className="text-[10px] tracking-[0.2em] text-brand-gold/50 font-semibold w-5 group-hover:text-brand-gold transition-colors duration-300">
                        {link.number}
                      </span>
                      <span className="text-3xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 leading-none">
                        {link.name}
                      </span>
                      <motion.span
                        className="ml-auto text-brand-gold/0 group-hover:text-brand-gold/80 text-lg transition-colors duration-300"
                        aria-hidden
                      >
                        →
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-5"
              >
                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent" />

                {/* Phone */}
                <a
                  href="tel:+12064188749"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold/70 transition-colors duration-300">
                    <Phone size={14} className="text-brand-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">
                      Call Us
                    </span>
                    <span className="text-base font-bold text-white/80 group-hover:text-white transition-colors">
                      (206) 418-8749
                    </span>
                  </div>
                </a>

                {/* CTA Button */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-2xl bg-brand-gold text-brand-black font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:shadow-[0_0_50px_rgba(201,168,76,0.4)] transition-all duration-300"
                >
                  Get a Free Quote
                </motion.button>

                {/* Tagline */}
                <p className="text-center text-[11px] uppercase tracking-[0.25em] text-white/20 font-semibold">
                  Premium Landscape · Seattle, WA
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
