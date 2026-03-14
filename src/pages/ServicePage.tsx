import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!service) return <Navigate to="/" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    url: `${SITE_URL}/services/${service.slug}`,
    image: `${SITE_URL}${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Equinox Landscape LLC",
      telephone: "+1-206-418-8749",
      email: "Equinoxlandscapellc@gmail.com",
      url: SITE_URL,
      founder: { "@type": "Person", name: "Julian Aguilar" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kent",
        addressRegion: "WA",
        postalCode: "98032",
        addressCountry: "US",
      },
    },
    areaServed: [
      "Seattle, WA",
      "Kent, WA",
      "Renton, WA",
      "Auburn, WA",
      "Federal Way, WA",
      "Des Moines, WA",
      "Covington, WA",
      "Maple Valley, WA",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: "Free estimates available",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        canonical={`/services/${service.slug}`}
        ogImage={service.image}
        schema={[serviceSchema, breadcrumbSchema]}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-brand-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-widest uppercase font-semibold mb-10 transition-colors"
            >
              <ArrowLeft size={13} /> Back to Services
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-[3px] bg-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                Equinox Landscape LLC
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold uppercase tracking-wide leading-none text-white">
              {service.title}
            </h1>
            <p className="mt-5 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {service.pageContent.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:shadow-[0_0_35px_rgba(201,168,76,0.4)] transition-all"
              >
                Get a Free Quote <ArrowRight size={16} />
              </motion.a>
              <a
                href="tel:+12064188749"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-gold/50 text-white hover:text-brand-gold font-semibold px-8 py-4 rounded-full transition-all"
              >
                <Phone size={15} /> (206) 418-8749
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro + Features ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                What's Included
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 mb-6 leading-tight">
                Everything You Need,{" "}
                <span className="text-brand-gold">Done Right</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {service.pageContent.intro}
              </p>
              <div className="mt-8 h-[1px] w-16 bg-brand-gold/40" />
            </motion.div>

            {/* Right — features grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {service.pageContent.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="rounded-2xl p-6 bg-brand-charcoal/60 border border-white/6 hover:border-brand-gold/20 transition-colors duration-300 group"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-gold mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-white text-sm leading-tight mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-white/45 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-brand-charcoal/25" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-brand-gold/4 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              How We Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 leading-tight">
              Our Process
            </h2>
            <p className="mt-4 text-white/45 max-w-md leading-relaxed">
              Every project follows a clear, structured process — so you always know what's happening and what comes next.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pageContent.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative"
              >
                {/* Connector line (desktop only) */}
                {i < service.pageContent.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-gradient-to-r from-brand-gold/20 to-transparent z-0" style={{ width: "calc(100% - 48px)", left: "calc(100% - 0px)" }} />
                )}

                <div className="relative z-10">
                  <div className="text-7xl font-black text-white/5 font-serif leading-none select-none mb-4">
                    {step.step}
                  </div>
                  <div className="w-8 h-[2px] bg-brand-gold mb-4" />
                  <h4 className="font-bold text-white text-lg mb-2">{step.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Image Feature ─────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-10 md:px-16">
                <p className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-4">
                  Seattle, WA · King County
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold uppercase text-white leading-tight mb-6">
                  Ready to Transform Your Property?
                </h3>
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-8 py-4 rounded-full"
                >
                  Get a Free Quote <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Services ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Explore More
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide mt-3">
              Other Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.07 * i }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative block h-56 rounded-2xl overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <h4 className="font-serif font-bold uppercase text-white text-sm tracking-widest leading-tight">
                      {s.title}
                    </h4>
                    <ArrowRight
                      size={14}
                      className="text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/40 to-brand-black" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/4 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Get Started Today
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 mb-4 leading-tight">
              Let's Build Something Great
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Contact Equinox Landscape today for a free, no-obligation estimate. Julian personally reviews every project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-10 py-4 rounded-full shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_45px_rgba(201,168,76,0.5)] transition-all"
              >
                Get a Free Quote <ArrowRight size={16} />
              </motion.a>
              <a
                href="tel:+12064188749"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-gold/50 text-white hover:text-brand-gold font-semibold px-10 py-4 rounded-full transition-all"
              >
                <Phone size={15} /> (206) 418-8749
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Global Glow Accents */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}
