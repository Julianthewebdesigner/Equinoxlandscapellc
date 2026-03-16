import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { serviceAreas } from "../data/serviceAreas";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";

export default function ServiceAreaPage() {
  const { city } = useParams<{ city: string }>();
  const area = serviceAreas.find((a) => a.slug === city);

  if (!area) return <Navigate to="/" replace />;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    name: "Equinox Landscape LLC",
    description: `Professional landscaping services in ${area.city}, ${area.state}. Landscape design, pavers, sod, and maintenance.`,
    url: `${SITE_URL}/service-areas/${area.slug}`,
    telephone: "+1-206-418-8749",
    email: "Equinoxlandscapellc@gmail.com",
    image: `${SITE_URL}/images/hero/Equinox-newhero.jpeg`,
    founder: { "@type": "Person", name: "Julian Aguilar" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kent",
      addressRegion: "WA",
      postalCode: "98032",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.lat,
      longitude: area.lng,
    },
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      { "@type": "ListItem", position: 3, name: area.city, item: `${SITE_URL}/service-areas/${area.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title={area.seo.title}
        description={area.seo.description}
        keywords={area.seo.keywords}
        canonical={`/service-areas/${area.slug}`}
        schema={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/Equinox-newhero.jpeg"
            alt={`Landscaping in ${area.city}, ${area.state}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/75 to-brand-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase font-semibold mb-10">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">Service Areas</span>
              <span>/</span>
              <span className="text-brand-gold">{area.city}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <MapPin size={14} className="text-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                {area.city}, {area.state} · {area.county}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-wide leading-none text-white">
              {area.hero.headline}
            </h1>
            <p className="mt-5 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {area.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:shadow-[0_0_35px_rgba(201,168,76,0.4)] transition-all"
              >
                Get a Free Estimate <ArrowRight size={16} />
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

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                Serving {area.city}, WA
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 mb-6 leading-tight">
                Landscaping in{" "}
                <span className="text-brand-gold">{area.city}</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">{area.intro}</p>
              <p className="mt-6 text-white/40 text-sm leading-relaxed border-l-2 border-brand-gold/30 pl-4">
                {area.localNote}
              </p>
              <div className="mt-8 h-[1px] w-16 bg-brand-gold/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {area.highlights.map((h, i) => (
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
                  <h4 className="font-bold text-white text-sm leading-tight mb-1.5">{h.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{h.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Services ──────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-charcoal/20" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-brand-gold/4 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              What We Offer
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 leading-tight">
              Services in {area.city}
            </h2>
            <p className="mt-4 text-white/45 max-w-xl leading-relaxed">
              Full-service landscaping and hardscaping — everything your {area.city} property needs, handled by one experienced team.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
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
                    alt={`${s.title} in ${area.city}, WA`}
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

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Questions
            </span>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wide mt-3">
              {area.city} Landscaping FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {area.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl p-7 bg-brand-charcoal/40 border border-white/6"
              >
                <h3 className="font-bold text-white text-base mb-3">{item.question}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Service Areas ───────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/30 text-xs tracking-widest uppercase font-semibold mb-6">
            We also serve
          </p>
          <div className="flex flex-wrap gap-3">
            {area.nearbyAreas.map((nearby) => {
              const nearbyArea = serviceAreas.find((a) => a.city === nearby);
              return nearbyArea ? (
                <Link
                  key={nearby}
                  to={`/service-areas/${nearbyArea.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white text-sm transition-all duration-300"
                >
                  <MapPin size={12} className="text-brand-gold/50" />
                  {nearby}, WA
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
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
              {area.city}, WA
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3 mb-4 leading-tight">
              Ready to Transform Your {area.city} Property?
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Get a free, no-obligation estimate from Equinox Landscape. Julian personally reviews every project in {area.city} and throughout King County.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-10 py-4 rounded-full shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_45px_rgba(201,168,76,0.5)] transition-all"
              >
                Get a Free Estimate <ArrowRight size={16} />
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

      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}
