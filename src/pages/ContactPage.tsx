import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useScroll, useSpring } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Star,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";

const serviceAreas = [
  "Kent",
  "Seattle",
  "Renton",
  "Auburn",
  "Federal Way",
  "Des Moines",
  "Covington",
  "Maple Valley",
];

const serviceOptions = [
  "Landscape Design",
  "Landscape Services / Maintenance",
  "Paver Installation",
  "Turf / Grass Installation",
  "Multiple Services",
  "Not Sure Yet",
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Equinox Landscape LLC",
  description:
    "Get a free landscaping estimate from Equinox Landscape LLC. Serving Seattle, Kent, Renton, Auburn, and King County, WA.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.3809,
      longitude: -122.2348,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [
      "https://www.instagram.com/equinoxlandscapellc/",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init("XLT8tM9BwUkBOfOGL");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        "service_kpekwme",
        "template_4qj8fap",
        formRef.current!
      );
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError(
        "Something went wrong sending your message. Please try again or contact us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title="Contact Equinox Landscape LLC | Free Estimate Seattle & Kent WA | (206) 418-8749"
        description="Get a free landscaping estimate from Equinox Landscape LLC. Serving Seattle, Kent, Renton, Auburn, Federal Way, and King County, WA. Call (206) 418-8749 or email Julian Aguilar today."
        keywords="landscaping estimate Seattle WA, landscape contractor Kent WA, free estimate landscaping King County, Equinox Landscape contact, Julian Aguilar landscaping Seattle, landscaping company Seattle, landscape services Kent WA, contact landscaper Seattle"
        canonical="/contact"
        schema={[contactSchema, breadcrumbSchema]}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-8 h-[3px] bg-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                Get In Touch
              </span>
              <span className="block w-8 h-[3px] bg-brand-gold" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-wide leading-none text-white">
              Let's Build{" "}
              <span className="text-brand-gold italic">Something</span>
              <br />
              Great Together
            </h1>
            <p className="mt-6 text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Ready to transform your property? Fill out the form below for a
              free, no-obligation estimate — or reach out directly. Julian
              personally responds to every inquiry.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
                <span className="text-white/50 text-sm ml-1">5-Star Rated</span>
              </div>
              <div className="w-px h-5 bg-white/15 hidden sm:block" />
              <span className="text-white/50 text-sm">Licensed &amp; Insured</span>
              <div className="w-px h-5 bg-white/15 hidden sm:block" />
              <span className="text-white/50 text-sm">Free Estimates</span>
              <div className="w-px h-5 bg-white/15 hidden sm:block" />
              <span className="text-white/50 text-sm">Reply Within 24 Hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 xl:gap-16 items-start">

            {/* ── Contact Form ─────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-8 md:p-10 relative overflow-hidden"
            >
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />

              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">
                  Request a Free Estimate
                </h2>
                <p className="text-white/45 text-sm mt-2">
                  Tell us about your project and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold uppercase text-white">
                    Message Sent!
                  </h3>
                  <p className="text-white/55 max-w-sm leading-relaxed">
                    Your request has been sent successfully. Julian will follow
                    up within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-gold text-sm font-semibold hover:text-white transition-colors mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                        Full Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(206) 000-0000"
                        className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-brand-charcoal text-white/60">
                        Select a service...
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-brand-charcoal text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Project Details <span className="text-brand-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project — what you're looking to do, the size of the area, your timeline, and any other details that would help us give you an accurate estimate."
                      className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-red-400 text-sm text-center leading-relaxed">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={sending ? {} : { scale: 1.02 }}
                    whileTap={sending ? {} : { scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-brand-gold text-brand-black font-bold py-4 rounded-xl text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(201,168,76,0.25)] hover:shadow-[0_0_45px_rgba(201,168,76,0.45)] transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending…" : (<>Send My Request <Send size={15} /></>)}
                  </motion.button>

                  <p className="text-center text-white/25 text-xs leading-relaxed">
                    We respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── Contact Info Sidebar ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Meet Julian */}
              <div className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />
                <div className="flex items-center gap-5">
                  <img
                    src="/images/IMG_4870.JPG"
                    alt="Julian Aguilar – Founder of Equinox Landscape LLC"
                    className="w-20 h-20 rounded-2xl object-cover object-top border border-brand-gold/30 shadow-[0_0_20px_rgba(201,168,76,0.15)] flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-1">Your Point of Contact</p>
                    <p className="text-white font-bold text-base leading-tight">Julian Aguilar</p>
                    <p className="text-white/40 text-xs mt-0.5">Founder · Equinox Landscape LLC</p>
                    <p className="text-white/50 text-xs mt-2 leading-relaxed">
                      Julian personally handles every inquiry and is on every job site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />
                <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold mb-5">
                  Reach Us Directly
                </h3>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+12064188749"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold/60 transition-colors">
                      <Phone size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-0.5">
                        Call or Text
                      </p>
                      <p className="text-white font-bold text-base group-hover:text-brand-gold transition-colors">
                        (206) 418-8749
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:Equinoxlandscapellc@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold/60 transition-colors">
                      <Mail size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-0.5">
                        Email
                      </p>
                      <p className="text-white font-medium text-sm break-all group-hover:text-brand-gold transition-colors">
                        Equinoxlandscapellc@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0">
                      <Clock size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-0.5">
                        Hours
                      </p>
                      <p className="text-white font-medium text-sm">
                        Mon – Sat: 8:00 AM – 6:00 PM
                      </p>
                      <p className="text-white/35 text-xs mt-0.5">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-0.5">
                        Based In
                      </p>
                      <p className="text-white font-medium text-sm">
                        Kent, WA · King County
                      </p>
                      <p className="text-white/35 text-xs mt-0.5">
                        Serving the greater Seattle area
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-7">
                <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-3">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-gold/60 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-7">
                <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">
                  What to Expect
                </h3>
                <div className="flex flex-col gap-3.5">
                  {[
                    "Julian personally reviews every inquiry",
                    "Response within 24 hours",
                    "On-site visit to assess your property",
                    "Detailed, itemized estimate at no cost",
                    "No pressure — transparent process start to finish",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={14}
                        className="text-brand-gold mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white/60 text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-7">
                <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">
                  Follow Our Work
                </h3>
                <p className="text-white/45 text-xs leading-relaxed mb-4">
                  See our latest projects and transformations on Instagram.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/equinoxlandscapellc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 flex-1 justify-center py-2.5 rounded-xl border border-white/10 hover:border-brand-gold/40 text-white/50 hover:text-white transition-all text-sm font-semibold"
                    aria-label="Equinox Landscape on Instagram"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Equinox ───────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-charcoal/25" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Why Equinox
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mt-3">
              Why Homeowners Choose Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personally Involved",
                body: "Julian is on every job site. Every project gets direct attention from the founder — not a subcontractor.",
              },
              {
                title: "Transparent Pricing",
                body: "Detailed estimates with no hidden fees. You know exactly what you're paying for before work begins.",
              },
              {
                title: "Modern Systems",
                body: "We use a CRM to track every project detail — from estimate to completion — so nothing falls through the cracks.",
              },
              {
                title: "Licensed & Insured",
                body: "Fully licensed and insured in Washington State. Your property and investment are fully protected.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="rounded-2xl bg-brand-charcoal/60 border border-white/6 p-7 hover:border-brand-gold/20 transition-colors duration-300"
              >
                <div className="text-5xl font-black text-white/5 font-serif leading-none select-none mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-white text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Strip ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
              Prefer to Call?
            </h2>
            <p className="text-white/50 mt-3 mb-8 text-lg">
              Reach Julian directly at{" "}
              <a
                href="tel:+12064188749"
                className="text-brand-gold font-bold hover:text-white transition-colors"
              >
                (206) 418-8749
              </a>
              . Available Mon–Sat, 8AM–6PM.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:+12064188749"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-10 py-4 rounded-full shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_45px_rgba(201,168,76,0.5)] transition-all"
              >
                <Phone size={16} /> Call Now
              </motion.a>
              <motion.a
                href="mailto:Equinoxlandscapellc@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-gold/50 text-white hover:text-brand-gold font-semibold px-10 py-4 rounded-full transition-all"
              >
                <Mail size={16} /> Email Julian <ArrowRight size={14} />
              </motion.a>
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
