import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import OurJourney from "../components/OurJourney";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import HomeContactForm from "../components/HomeContactForm";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <OurJourney />
        <Services />
        <Testimonials />
        <FAQ />
        <HomeContactForm />
        <FinalCTA />
      </main>

      <Footer />

      {/* Global Glow Accents */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}
