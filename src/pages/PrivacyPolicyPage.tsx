import type { ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const SITE_URL = "https://www.equinoxlandscapellc.com";
const EFFECTIVE_DATE = "January 15, 2026";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: `${SITE_URL}/privacy`,
    },
  ],
};

const sections: { id: string; title: string }[] = [
  { id: "overview", title: "1. Overview" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "sms-communication", title: "4. SMS Communication & Consent" },
  { id: "sharing", title: "5. How We Share Information" },
  { id: "data-protection", title: "6. Data Protection" },
  { id: "your-rights", title: "7. Your Rights & Choices" },
  { id: "opt-out", title: "8. Opt-Out Instructions" },
  { id: "cookies", title: "9. Cookies & Tracking" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title="Privacy Policy | Equinox Landscape LLC | Seattle, WA"
        description="Privacy Policy for Equinox Landscape LLC. Learn how we collect, use, and protect your information, including SMS communication practices and opt-out options."
        canonical="/privacy"
        schema={breadcrumbSchema}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-8 h-[3px] bg-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
                Legal
              </span>
              <span className="block w-8 h-[3px] bg-brand-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-wide leading-none text-white">
              Privacy <span className="text-brand-gold italic">Policy</span>
            </h1>
            <p className="mt-6 text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Your privacy matters. This policy explains what we collect, how we
              use it, and the choices you have when working with Equinox
              Landscape LLC.
            </p>
            <p className="mt-4 text-white/35 text-sm">
              Effective Date: {EFFECTIVE_DATE}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 xl:gap-16 items-start">
            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="rounded-2xl bg-brand-charcoal/50 border border-white/8 p-6">
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-4">
                  On This Page
                </p>
                <ul className="flex flex-col gap-2.5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-white/55 hover:text-brand-gold transition-colors text-sm leading-snug block"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl bg-brand-charcoal/50 border border-white/8 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/8">
                <div className="w-11 h-11 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white font-bold">Equinox Landscape LLC</p>
                  <p className="text-white/45 text-sm">
                    Seattle, Washington · Locally owned & operated
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-10">
                <Section id="overview" title="1. Overview">
                  <p>
                    Equinox Landscape LLC ("Equinox Landscape," "we," "us," or
                    "our") is a locally owned landscaping and exterior services
                    company based in Seattle, Washington. We respect your
                    privacy and are committed to handling your personal
                    information transparently and responsibly.
                  </p>
                  <p>
                    This Privacy Policy describes how we collect, use, store,
                    and share information when you visit our website, submit a
                    form, request an estimate, or otherwise communicate with us
                    by phone, email, or SMS.
                  </p>
                </Section>

                <Section id="information-we-collect" title="2. Information We Collect">
                  <p>We collect only the information needed to deliver and improve our services. This may include:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>
                      <strong className="text-white">Contact details</strong> — your name, phone number, email address, and service address.
                    </li>
                    <li>
                      <strong className="text-white">Project details</strong> — information you share about your property, the services you're requesting, and project timelines.
                    </li>
                    <li>
                      <strong className="text-white">Communication records</strong> — copies of emails, text messages, voicemails, and form submissions exchanged with us.
                    </li>
                    <li>
                      <strong className="text-white">Site usage data</strong> — basic analytics such as pages visited, referring source, device type, and approximate location, collected through standard web technologies.
                    </li>
                  </ul>
                  <p className="mt-3">
                    We do not collect payment card numbers on this website. Any payments are processed through trusted third-party processors that maintain their own security and privacy standards.
                  </p>
                </Section>

                <Section id="how-we-use" title="3. How We Use Your Information">
                  <p>We use the information you provide to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Respond to estimate requests, questions, and other inquiries.</li>
                    <li>Schedule on-site visits, send appointment confirmations, and provide estimate reminders.</li>
                    <li>Communicate updates about active or upcoming projects.</li>
                    <li>Follow up after work is completed to confirm satisfaction.</li>
                    <li>Maintain accurate business records and improve our services.</li>
                    <li>Comply with applicable laws, regulations, and contractual obligations.</li>
                  </ul>
                </Section>

                <Section id="sms-communication" title="4. SMS Communication & Consent">
                  <div className="rounded-2xl border border-brand-gold/25 bg-brand-gold/5 p-5 mb-4 flex gap-4">
                    <MessageSquare size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">SMS Consent Notice:</strong> By submitting forms on this website, users consent to receive SMS communication from Equinox Landscape LLC regarding estimates, appointments, service updates, and follow-ups. Message frequency may vary. Message and data rates may apply. Reply <strong className="text-white">STOP</strong> to opt out at any time. Reply <strong className="text-white">HELP</strong> for assistance.
                    </p>
                  </div>
                  <p>
                    When you provide your phone number and check the SMS consent box on any of our forms, you agree to receive non-marketing, operational text messages from Equinox Landscape LLC. These may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Estimate request confirmations and reminders</li>
                    <li>Appointment scheduling and confirmation</li>
                    <li>Crew arrival notifications and service updates</li>
                    <li>Follow-up communication after a completed project</li>
                    <li>Replies to questions you initiate by text</li>
                  </ul>
                  <p className="mt-3">
                    We do not send marketing or promotional bulk text messages. Your mobile information is never sold or shared with third parties for marketing purposes. Carriers are not liable for delayed or undelivered messages.
                  </p>
                </Section>

                <Section id="sharing" title="5. How We Share Information">
                  <p>
                    We do not sell, rent, or trade your personal information.
                    We share information only when necessary to operate our
                    business:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>
                      <strong className="text-white">Service providers</strong> we rely on for email delivery, SMS messaging, CRM, scheduling, and analytics — all bound by their own privacy and security obligations.
                    </li>
                    <li>
                      <strong className="text-white">Legal requirements</strong> when disclosure is required by law, subpoena, or to protect the safety and rights of our team and customers.
                    </li>
                  </ul>
                </Section>

                <Section id="data-protection" title="6. Data Protection">
                  <p>
                    We use industry-standard administrative, technical, and physical safeguards to protect the information you share with us. While no method of transmission over the Internet is 100% secure, we work to keep your data confidential and to limit access to authorized team members only.
                  </p>
                  <p>
                    We retain information for as long as needed to provide services, maintain accurate business records, and meet legal requirements.
                  </p>
                </Section>

                <Section id="your-rights" title="7. Your Rights & Choices">
                  <p>
                    Depending on where you live, you may have rights regarding the personal information we hold about you, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Requesting a copy of the information we have about you</li>
                    <li>Asking us to correct inaccurate information</li>
                    <li>Asking us to delete information we no longer need</li>
                    <li>Withdrawing consent for SMS or email communication at any time</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, email us at{" "}
                    <a
                      href="mailto:Equinoxlandscapellc@gmail.com"
                      className="text-brand-gold hover:text-white transition-colors"
                    >
                      Equinoxlandscapellc@gmail.com
                    </a>
                    .
                  </p>
                </Section>

                <Section id="opt-out" title="8. Opt-Out Instructions">
                  <p>
                    You can opt out of communications from Equinox Landscape LLC at any time:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>
                      <strong className="text-white">SMS:</strong> Reply <strong>STOP</strong> to any text message we send. You'll receive a single confirmation message and we will not text you again unless you re-opt in. Reply <strong>HELP</strong> for support.
                    </li>
                    <li>
                      <strong className="text-white">Email:</strong> Reply to any message asking us to remove you, or email <a href="mailto:Equinoxlandscapellc@gmail.com" className="text-brand-gold hover:text-white transition-colors">Equinoxlandscapellc@gmail.com</a>.
                    </li>
                    <li>
                      <strong className="text-white">Phone:</strong> Let us know during any call and we'll update your record immediately.
                    </li>
                  </ul>
                  <p className="mt-3">
                    Opting out of marketing or promotional communication will not affect transactional messages required to deliver an active service you've requested (for example, an appointment confirmation or crew-arrival notification for a job already scheduled).
                  </p>
                </Section>

                <Section id="cookies" title="9. Cookies & Tracking">
                  <p>
                    Our website uses limited cookies and similar technologies to remember preferences, measure traffic, and improve performance. You can control cookies through your browser settings. Disabling cookies may affect site functionality.
                  </p>
                </Section>

                <Section id="children" title="10. Children's Privacy">
                  <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us so we can delete it.
                  </p>
                </Section>

                <Section id="changes" title="11. Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time. When we do, we'll update the effective date at the top of the page. Material changes will be communicated through our website or directly when appropriate.
                  </p>
                </Section>

                <Section id="contact" title="12. Contact Us">
                  <p>
                    Questions about this Privacy Policy or how your information is handled? We're happy to help.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-5">
                    <a
                      href="tel:+12064188749"
                      className="flex items-center gap-3 rounded-2xl bg-brand-black/40 border border-white/8 hover:border-brand-gold/40 p-4 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0">
                        <Phone size={15} className="text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/35 font-semibold">Call or Text</p>
                        <p className="text-white font-bold group-hover:text-brand-gold transition-colors">(206) 418-8749</p>
                      </div>
                    </a>
                    <a
                      href="mailto:Equinoxlandscapellc@gmail.com"
                      className="flex items-center gap-3 rounded-2xl bg-brand-black/40 border border-white/8 hover:border-brand-gold/40 p-4 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0">
                        <Mail size={15} className="text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/35 font-semibold">Email</p>
                        <p className="text-white font-medium text-sm break-all group-hover:text-brand-gold transition-colors">Equinoxlandscapellc@gmail.com</p>
                      </div>
                    </a>
                  </div>
                  <p className="mt-5 text-sm text-white/45">
                    Equinox Landscape LLC<br />
                    Seattle, Washington · King County
                  </p>
                </Section>
              </div>

              {/* Bottom links */}
              <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/terms"
                  className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-white transition-colors text-sm"
                >
                  Read our Terms & Conditions <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors text-sm"
                >
                  Contact us <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />

      <div className="hidden md:block fixed top-1/4 -left-20 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="hidden md:block fixed bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
        {title}
      </h2>
      <div className="text-white/65 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
