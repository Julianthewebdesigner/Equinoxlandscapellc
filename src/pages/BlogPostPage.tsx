import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Tag, Phone } from "lucide-react";
import { blogPosts, type ContentBlock } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-white/65 text-base md:text-lg leading-relaxed">
          {block.text}
        </p>
      );

    case "heading2":
      return (
        <h2
          key={index}
          className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mt-12 mb-2 leading-tight"
        >
          {block.text}
        </h2>
      );

    case "heading3":
      return (
        <h3
          key={index}
          className="font-bold text-lg md:text-xl text-white/90 mt-8 mb-2"
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul key={index} className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/65 text-base leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          key={index}
          className="rounded-2xl p-6 bg-brand-gold/8 border border-brand-gold/20 text-white/80 text-base leading-relaxed"
        >
          <div className="flex items-start gap-3">
            <span className="text-brand-gold font-black text-xl leading-none mt-0.5">★</span>
            <p>{block.text}</p>
          </div>
        </div>
      );

    case "table":
      return (
        <div key={index} className="overflow-x-auto rounded-2xl border border-white/8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-charcoal/60">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-5 py-4 text-brand-gold font-bold tracking-wider uppercase text-xs border-b border-white/8"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-brand-charcoal/20" : "bg-transparent"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-5 py-4 text-white/65 border-b border-white/5 last:border-b-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.indexOf(post);
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIndex).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    image: `${SITE_URL}/images/hero/Equinox-newhero.jpeg`,
    author: {
      "@type": "Person",
      name: "Julian Aguilar",
      jobTitle: "Founder, Equinox Landscape LLC",
    },
    publisher: {
      "@type": "Organization",
      name: "Equinox Landscape LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/images/hero/Transparent-Equinox-logo.png`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title={post.seo.title}
        description={post.seo.description}
        keywords={post.seo.keywords}
        canonical={`/blog/${post.slug}`}
        schema={[articleSchema, breadcrumbSchema]}
      />

      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/Equinox-newhero.jpeg"
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-widest uppercase font-semibold mb-10 transition-colors"
            >
              <ArrowLeft size={13} /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-gold text-brand-black px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/35 text-xs">
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-white/25 text-xs">{post.date}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-wide leading-tight text-white">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Article Content ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <motion.article
              className="lg:col-span-2 prose-custom space-y-7"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Excerpt lead */}
              <p className="text-white/80 text-xl leading-relaxed font-medium border-l-2 border-brand-gold pl-5">
                {post.excerpt}
              </p>

              {post.content.map((block, i) => renderBlock(block, i))}

              {/* Bottom author note */}
              <div className="mt-12 pt-8 border-t border-white/8 flex items-center gap-4">
                <img
                  src="/images/IMG_4870.JPG"
                  alt="Julian Aguilar, Equinox Landscape LLC"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/30"
                />
                <div>
                  <p className="font-bold text-white text-sm">Julian Aguilar</p>
                  <p className="text-white/40 text-xs">Founder, Equinox Landscape LLC · Kent, WA</p>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* CTA Card */}
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl p-7 bg-brand-charcoal/50 border border-white/8">
                  <p className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3">
                    Free Estimate
                  </p>
                  <h3 className="font-serif text-xl font-bold uppercase leading-tight mb-4">
                    Ready to Transform Your Property?
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    Serving Kent, Seattle, Renton, Auburn, and all of King County. Licensed & insured.
                  </p>
                  <a
                    href="/contact"
                    className="block w-full py-3.5 rounded-xl bg-brand-gold text-brand-black font-bold text-sm text-center hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
                  >
                    Get a Free Estimate
                  </a>
                  <a
                    href="tel:+12064188749"
                    className="flex items-center justify-center gap-2 mt-3 text-white/50 hover:text-white text-sm font-semibold transition-colors"
                  >
                    <Phone size={13} className="text-brand-gold" /> (206) 418-8749
                  </a>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="rounded-2xl p-6 bg-brand-charcoal/30 border border-white/6">
                    <p className="text-white/30 font-bold tracking-widest uppercase text-xs mb-4">
                      More Articles
                    </p>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link
                          key={rp.slug}
                          to={`/blog/${rp.slug}`}
                          className="group block"
                        >
                          <p className="text-white/65 group-hover:text-white text-sm font-semibold leading-snug transition-colors mb-1">
                            {rp.title}
                          </p>
                          <span className="text-brand-gold/50 group-hover:text-brand-gold text-xs flex items-center gap-1 transition-colors">
                            Read <ArrowRight size={10} />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/30 to-brand-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/4 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
            Equinox Landscape LLC
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide mt-3 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Free estimates for all landscaping projects in Seattle, Kent, Renton, Auburn, and throughout King County, WA.
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
              <Phone size={15} /> (206) 418-8749
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
