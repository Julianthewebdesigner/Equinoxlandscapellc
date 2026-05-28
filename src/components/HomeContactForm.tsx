import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";

const serviceOptions = [
  "Landscape Design",
  "Landscape Services / Maintenance",
  "Paver Installation",
  "Turf / Grass Installation",
  "Pressure Washing",
  "Yard Cleanup",
  "Moss Removal",
  "Multiple Services",
  "Not Sure Yet",
];

type FormErrors = Partial<{
  name: string;
  email: string;
  message: string;
}>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HomeContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!emailRegex.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim())
      next.message = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) return;
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_kpekwme",
        "template_4qj8fap",
        formRef.current!
      );
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch {
      setError(
        "Something went wrong sending your message. Please try again or call us directly at (206) 418-8749."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="estimate" className="py-24 relative overflow-hidden">
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
            Request Your Free{" "}
            <span className="text-brand-gold italic">Estimate</span>
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
          className="max-w-3xl mx-auto rounded-3xl bg-brand-charcoal/50 border border-white/8 p-6 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/60 via-brand-gold/30 to-transparent" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 gap-5 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center">
                <CheckCircle2 size={28} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold uppercase text-white">
                Request Received
              </h3>
              <p className="text-white/55 max-w-sm leading-relaxed">
                Thanks for reaching out. Julian will personally follow up by email within 24 hours to confirm details and next steps.
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
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="home-name"
                  className="text-xs font-semibold text-white/50 uppercase tracking-widest"
                >
                  Full Name <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="home-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "home-name-error" : undefined}
                  className={`bg-brand-black/60 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:bg-brand-black/80 transition-all ${
                    errors.name
                      ? "border-red-400/60 focus:border-red-400"
                      : "border-white/10 focus:border-brand-gold/50"
                  }`}
                />
                {errors.name && (
                  <p id="home-name-error" className="text-red-400 text-xs">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="home-email"
                  className="text-xs font-semibold text-white/50 uppercase tracking-widest"
                >
                  Email <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="home-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? "home-email-error" : undefined
                  }
                  className={`bg-brand-black/60 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:bg-brand-black/80 transition-all ${
                    errors.email
                      ? "border-red-400/60 focus:border-red-400"
                      : "border-white/10 focus:border-brand-gold/50"
                  }`}
                />
                {errors.email && (
                  <p id="home-email-error" className="text-red-400 text-xs">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Service Type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="home-service"
                  className="text-xs font-semibold text-white/50 uppercase tracking-widest"
                >
                  Service Needed
                </label>
                <select
                  id="home-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="bg-brand-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-black/80 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-brand-charcoal text-white/60">
                    Select a service…
                  </option>
                  {serviceOptions.map((s) => (
                    <option
                      key={s}
                      value={s}
                      className="bg-brand-charcoal text-white"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="home-message"
                  className="text-xs font-semibold text-white/50 uppercase tracking-widest"
                >
                  Project Details <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project — what you're looking to do, size of the area, your timeline, and any other details."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "home-message-error" : undefined
                  }
                  className={`bg-brand-black/60 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:bg-brand-black/80 transition-all resize-none leading-relaxed ${
                    errors.message
                      ? "border-red-400/60 focus:border-red-400"
                      : "border-white/10 focus:border-brand-gold/50"
                  }`}
                />
                {errors.message && (
                  <p id="home-message-error" className="text-red-400 text-xs">
                    {errors.message}
                  </p>
                )}
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
                {sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-brand-black/30 border-t-brand-black animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send My Request <Send size={15} />
                  </>
                )}
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-white/35 text-xs">
                <ShieldCheck size={12} className="text-brand-gold/70" />
                <span>
                  Your information is kept private. No spam — ever.
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
