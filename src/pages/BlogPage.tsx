import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Equinox Landscape LLC — Landscaping Tips & Guides",
  description: "Expert landscaping advice, pricing guides, and how-to articles from Equinox Landscape LLC in Kent, WA.",
  url: `${SITE_URL}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Equinox Landscape LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero/Transparent-Equinox-logo.png`,
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
  })),
};

const categoryColors: Record<string, string> = {
  "Pricing Guide": "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
  "Hardscaping": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Turf & Lawn": "bg-brand-green/10 text-green-400 border-brand-green/20",
  "Landscape Design": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Home Value": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title="Landscaping Tips & Guides for Seattle & King County | Equinox Landscape Blog"
        description="Expert landscaping advice for Seattle and King County homeowners. Pricing guides, plant recommendations, hardscaping tips, and more from Equinox Landscape LLC."
        keywords="landscaping blog Seattle WA, landscaping tips King County, landscape design advice Seattle, paver installation guide Seattle, sod vs turf Seattle, landscaping cost guide Washington"
        canonical="/blog"
        schema={[blogListingSchema]}
      />

      <Navbar />

      {/* ── Header ─────────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/4 blur-[160px] rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-[3px] bg-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                Equinox Landscape
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-wide leading-none">
              Landscape <span className="text-brand-gold">Insights</span>
            </h1>
            <p className="mt-6 text-white/50 text-lg max-w-2xl leading-relaxed">
              Expert guides, pricing breakdowns, and landscaping advice for Seattle & King County homeowners — written by the team at Equinox Landscape LLC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden border border-white/6 hover:border-brand-gold/20 transition-all duration-500 bg-brand-charcoal/30"
            >
              <div className="grid lg:grid-cols-5">
                {/* Image side */}
                <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src="/images/hero/Equinox-newhero.jpeg"
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/50 lg:to-brand-charcoal/30" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-gold text-brand-black px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-white/5 text-white/50 border-white/10"}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/30 text-xs">
                      <Clock size={11} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-brand-gold font-bold text-sm tracking-widest uppercase">
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Post Grid ──────────────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl overflow-hidden border border-white/6 hover:border-brand-gold/20 transition-all duration-400 bg-brand-charcoal/30"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/images/hero/Equinox-newhero.jpeg"
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-white/5 text-white/50 border-white/10"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-white/30 text-xs">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-wide leading-tight mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-gold/70 group-hover:text-brand-gold font-bold text-xs tracking-widest uppercase transition-colors duration-300">
                      Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/40 to-brand-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">Ready to Start?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide mt-3 mb-4">
            Get a Free Estimate Today
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Equinox Landscape serves Kent, Seattle, Renton, Auburn, and all of King County. Call or fill out our form for a free, no-obligation estimate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-bold px-8 py-4 rounded-full"
            >
              Get a Free Estimate <ArrowRight size={16} />
            </motion.a>
            <a
              href="tel:+12064188749"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-gold/50 text-white hover:text-brand-gold font-semibold px-8 py-4 rounded-full transition-all"
            >
              (206) 418-8749
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
