import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical installation take?",
    answer:
      "Project timelines vary by scope. A standard landscape installation usually takes 5–10 business days. We provide a detailed schedule during consultation so you know exactly what to expect.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Kent and serve the greater Seattle / King County area, including Renton, Auburn, Federal Way, Des Moines, Covington, and Maple Valley.",
  },
  {
    question: "Is Equinox Landscape licensed and insured?",
    answer:
      "Yes, we are fully licensed, bonded, and insured in the state of Washington. We prioritize safety and professionalism on every job site.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We offer free, no-obligation estimates for all our services. One of our experts will visit your property to provide a transparent quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  const Item = ({ faq, idx }: { faq: (typeof faqs)[0]; idx: number }) => {
    const isOpen = openIndex === idx;
    return (
      <div className="border-t border-white/10">
        <button
          onClick={() => setOpenIndex(isOpen ? null : idx)}
          className="w-full py-5 flex items-start justify-between gap-4 text-left group"
        >
          <span className="font-semibold text-[15px] leading-snug tracking-wide group-hover:text-brand-gold transition-colors duration-200">
            {faq.question}
          </span>
          <span className="mt-0.5 flex-shrink-0 text-xl leading-none text-white/40 group-hover:text-brand-gold transition-colors duration-200">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-white/50 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-28 bg-brand-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase leading-tight mb-4">
            Questions? We Have Answers.{" "}
            <br className="hidden sm:block" />
            Equinox Landscape Is Your Trusted Choice.
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            We anticipate your concerns, ensuring complete peace of mind.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {left.map((faq) => {
              const idx = faqs.indexOf(faq);
              return <Item key={idx} faq={faq} idx={idx} />;
            })}
            <div className="border-t border-white/10" />
          </div>
          <div>
            {right.map((faq) => {
              const idx = faqs.indexOf(faq);
              return <Item key={idx} faq={faq} idx={idx} />;
            })}
            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-brand-gold text-brand-black px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Feel Confident. Get Your Instant Estimate
          </motion.button>
        </div>
      </div>
    </section>
  );
}
