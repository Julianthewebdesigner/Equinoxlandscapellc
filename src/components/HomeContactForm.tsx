import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Landscape Design",
  "Landscape Services / Maintenance",
  "Paver Installation",
  "Turf / Grass Installation",
  "Multiple Services",
  "Not Sure Yet",
];

export default function HomeContactForm() {
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
        "Something went wrong sending your message. Please try again or call us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="estimate"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-charcoal/30" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[3px] bg-brand-gold" />
            <span className="text-brand-gold font-bold tracking-[0.25em] uppercase text-xs">
              Free Estimate
            </span>
            <span className="block w-8 h-[3px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">
            Get Your Instant <span className="text-brand-gold italic">Estimate</span>
          </h2>
          <p className="text-white/45 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Tell us about your project and Julian will personally follow up within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto rounded-3xl bg-brand-charcoal/50 border border-white/8 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />

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
                Your request has been received. Julian will follow up within 24 hours.
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
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project — what you're looking to do, size of the area, your timeline, and any other details."
                  className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all resize-none leading-relaxed"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center leading-relaxed">
                  {error}
                </p>
              )}

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
                We respond within 24 hours. No spam, no pressure.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
