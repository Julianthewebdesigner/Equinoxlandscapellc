import type { ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { ScrollText, MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";
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
      name: "Terms & Conditions",
      item: `${SITE_URL}/terms`,
    },
  ],
};

const sections: { id: string; title: string }[] = [
  { id: "agreement", title: "1. Agreement to Terms" },
  { id: "services", title: "2. Services Provided" },
  { id: "estimates", title: "3. Estimates & Pricing" },
  { id: "scheduling", title: "4. Scheduling & Cancellations" },
  { id: "payment", title: "5. Payment Terms" },
  { id: "site-conditions", title: "6. Site Conditions & Customer Responsibilities" },
  { id: "warranty", title: "7. Workmanship & Warranty" },
  { id: "liability", title: "8. Liability Limitations" },
  { id: "communication-consent", title: "9. Communication Consent" },
  { id: "sms-terms", title: "10. SMS Terms" },
  { id: "opt-out", title: "11. Opt-Out & Cancellation of Messages" },
  { id: "intellectual-property", title: "12. Intellectual Property" },
  { id: "governing-law", title: "13. Governing Law" },
  { id: "changes", title: "14. Changes to These Terms" },
  { id: "contact", title: "15. Contact Us" },
];

export default function TermsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <SEOHead
        title="Terms & Conditions | Equinox Landscape LLC | Seattle, WA"
        description="Terms and Conditions for Equinox Landscape LLC services in Seattle, WA. Service terms, estimate policies, payment expectations, liability, and SMS communication terms."
        canonical="/terms"
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
              Terms & <span className="text-brand-gold italic">Conditions</span>
            </h1>
            <p className="mt-6 text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              The terms that govern services, estimates, communication, and
              your relationship with Equinox Landscape LLC. Written in plain
              language — read closely before requesting an estimate.
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
                  <ScrollText size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white font-bold">Equinox Landscape LLC</p>
                  <p className="text-white/45 text-sm">
                    Seattle, Washington · Licensed & insured
                  </p>
                </div>
              </div>

              <div className="text-white/70 leading-relaxed space-y-10">
                <Section id="agreement" title="1. Agreement to Terms">
                  <p>
                    These Terms & Conditions ("Terms") govern your use of the Equinox Landscape LLC website (the "Site") and any services we provide. By visiting the Site, submitting a form, accepting an estimate, or using our services, you agree to be bound by these Terms.
                  </p>
                  <p>
                    If you do not agree with these Terms, please do not use the Site or our services.
                  </p>
                </Section>

                <Section id="services" title="2. Services Provided">
                  <p>
                    Equinox Landscape LLC provides residential and light commercial exterior property services in Seattle, Washington and surrounding King County areas. Services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Landscape design and installation</li>
                    <li>Lawn care and seasonal maintenance</li>
                    <li>Pressure washing of driveways, patios, siding, and decks</li>
                    <li>Yard cleanups and debris removal</li>
                    <li>Moss removal from roofs, walkways, and hardscape surfaces</li>
                    <li>Hardscaping, paver installation, and retaining walls</li>
                    <li>Other exterior property services as agreed in writing</li>
                  </ul>
                  <p className="mt-3">
                    The specific scope of work for each project is defined in the estimate or written agreement provided before work begins.
                  </p>
                </Section>

                <Section id="estimates" title="3. Estimates & Pricing">
                  <p>
                    Estimates are provided free of charge and are based on the information available to us at the time of the visit or inquiry. Estimates are valid for <strong className="text-white">30 days</strong> from the date issued, unless otherwise noted.
                  </p>
                  <p>
                    Estimates may be revised if the scope of work changes, if hidden site conditions are discovered after work begins, or if customer-requested additions are made. Any change in price will be communicated and authorized before the additional work proceeds.
                  </p>
                  <p>
                    Verbal estimates are non-binding. A written estimate signed or confirmed in writing by the customer is required for work to be scheduled.
                  </p>
                </Section>

                <Section id="scheduling" title="4. Scheduling & Cancellations">
                  <p>
                    Once an estimate is approved, we will schedule your project based on crew availability, weather, and the agreed start window. We make every effort to honor scheduled dates but reserve the right to reschedule due to weather, equipment issues, or other reasonable causes.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Please provide at least <strong className="text-white">24 hours' notice</strong> for cancellations or reschedules.</li>
                    <li>Same-day cancellations may be subject to a trip fee to cover crew time and travel.</li>
                    <li>If we need to reschedule, we will contact you as soon as reasonably possible.</li>
                  </ul>
                </Section>

                <Section id="payment" title="5. Payment Terms">
                  <p>
                    Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Payment is due upon completion of the work for most service jobs.</li>
                    <li>Larger installation or hardscape projects may require a deposit and a milestone-based payment schedule outlined in the estimate.</li>
                    <li>We accept cash, check, credit card, and approved electronic payment methods.</li>
                    <li>Past-due balances may accrue interest at the maximum rate permitted by Washington State law and may be subject to collection costs.</li>
                  </ul>
                </Section>

                <Section id="site-conditions" title="6. Site Conditions & Customer Responsibilities">
                  <p>
                    To allow our crew to work safely and efficiently, customers are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Providing reasonable access to the work area</li>
                    <li>Identifying private utilities, irrigation lines, or sensitive landscape features not visible from the surface</li>
                    <li>Securing pets and personal items in the work zone</li>
                    <li>Ensuring power and water access if required for the scope of work</li>
                  </ul>
                  <p className="mt-3">
                    Equinox Landscape LLC is not responsible for damage to unmarked private utilities, irrigation lines, or buried items not disclosed prior to work beginning.
                  </p>
                </Section>

                <Section id="warranty" title="7. Workmanship & Warranty">
                  <p>
                    We stand behind our work. Workmanship warranties, where applicable, are described in the project estimate or written agreement. Plant material warranties, where offered, are limited and require reasonable customer care (watering, weeding, etc.) and exclude damage from extreme weather, pets, or third-party actions.
                  </p>
                </Section>

                <Section id="liability" title="8. Liability Limitations">
                  <p>
                    Equinox Landscape LLC is licensed and insured in Washington State. To the maximum extent permitted by law, our total liability for any claim arising out of the services is limited to the amount paid by the customer for the specific service giving rise to the claim.
                  </p>
                  <p>
                    We are not liable for indirect, incidental, or consequential damages, including loss of use, lost profits, or damage to items not disclosed before work began. Nothing in these Terms limits liability for gross negligence, willful misconduct, or any liability that cannot lawfully be limited.
                  </p>
                </Section>

                <Section id="communication-consent" title="9. Communication Consent">
                  <p>
                    When you submit a form on this website, accept an estimate, or contact us, you consent to receive operational communication from Equinox Landscape LLC related to your inquiry or project. This may include phone calls, email, and SMS.
                  </p>
                  <p>
                    We only use the contact information you provide for the purpose of customer service and operational communication. We do not sell or share your contact information with third parties for marketing purposes.
                  </p>
                </Section>

                <Section id="sms-terms" title="10. SMS Terms">
                  <div className="rounded-2xl border border-brand-gold/25 bg-brand-gold/5 p-5 mb-4 flex gap-4">
                    <MessageSquare size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">SMS Program Notice:</strong> By submitting a form on this website and checking the SMS consent box, you agree to receive SMS messages from Equinox Landscape LLC regarding estimates, scheduling, appointment reminders, and service updates. Message frequency may vary. Message and data rates may apply. Reply <strong className="text-white">STOP</strong> to opt out. Reply <strong className="text-white">HELP</strong> for help.
                    </p>
                  </div>

                  <p className="font-semibold text-white">Program Description</p>
                  <p>
                    Equinox Landscape LLC sends transactional SMS messages to customers who have opted in. SMS is used exclusively for operational communication and customer service updates — never for unsolicited marketing or promotional blasts.
                  </p>

                  <p className="font-semibold text-white mt-4">Types of Messages</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Estimate confirmations and reminders</li>
                    <li>Appointment scheduling and crew-arrival notifications</li>
                    <li>Service updates while a project is in progress</li>
                    <li>Follow-up after work is completed</li>
                    <li>Replies to questions you initiate by text</li>
                  </ul>

                  <p className="font-semibold text-white mt-4">Message Frequency</p>
                  <p>
                    Message frequency varies based on your project status. Most customers receive a handful of messages during an active project and few or none between projects.
                  </p>

                  <p className="font-semibold text-white mt-4">Costs</p>
                  <p>
                    Message and data rates may apply, depending on your wireless plan. Equinox Landscape LLC does not charge for SMS messages, but your carrier may.
                  </p>

                  <p className="font-semibold text-white mt-4">Carrier Disclaimer</p>
                  <p>
                    Carriers (including but not limited to AT&T, Verizon, T-Mobile, and US Cellular) are not liable for delayed or undelivered messages. Equinox Landscape LLC is not responsible for issues caused by your carrier or mobile device.
                  </p>

                  <p className="font-semibold text-white mt-4">Privacy</p>
                  <p>
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontracted service providers (such as our SMS delivery platform) is limited to what is required to deliver messages. See our{" "}
                    <Link to="/privacy" className="text-brand-gold hover:text-white transition-colors">Privacy Policy</Link> for details.
                  </p>
                </Section>

                <Section id="opt-out" title="11. Opt-Out & Cancellation of Messages">
                  <p>
                    You may opt out of SMS messages at any time:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Reply <strong className="text-white">STOP</strong> to any message to unsubscribe. We will send a single confirmation and not text you again unless you re-opt in.</li>
                    <li>Reply <strong className="text-white">HELP</strong> for support, or contact us at (206) 418-8749.</li>
                  </ul>
                  <p className="mt-3">
                    Customers can opt out at any time with no penalty. Opting out of SMS will not prevent us from contacting you by phone or email when necessary to complete an active service you've already scheduled.
                  </p>
                </Section>

                <Section id="intellectual-property" title="12. Intellectual Property">
                  <p>
                    The Equinox Landscape LLC name, logo, photos, written content, and design elements on this Site are the property of Equinox Landscape LLC and are protected by applicable intellectual property laws. You may not reproduce, distribute, or use them commercially without our written permission.
                  </p>
                </Section>

                <Section id="governing-law" title="13. Governing Law">
                  <p>
                    These Terms are governed by the laws of the State of Washington, without regard to its conflict of laws provisions. Any dispute arising from these Terms or our services will be resolved in the state or federal courts located in King County, Washington.
                  </p>
                </Section>

                <Section id="changes" title="14. Changes to These Terms">
                  <p>
                    We may update these Terms from time to time. The effective date at the top of the page reflects the most recent revision. Continued use of the Site or our services after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </Section>

                <Section id="contact" title="15. Contact Us">
                  <p>
                    Questions about these Terms? Reach out and we'll respond within one business day.
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

              <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-white transition-colors text-sm"
                >
                  Read our Privacy Policy <ArrowRight size={14} />
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
