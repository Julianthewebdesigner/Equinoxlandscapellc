import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[3px] bg-brand-gold" />
            <span className="font-serif text-brand-gold tracking-[0.25em] uppercase text-sm font-semibold">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold uppercase tracking-wide leading-none">
            Our Services
          </h2>
          <p className="font-display text-white/45 text-base mt-4 max-w-xl leading-relaxed">
            From design to installation — we handle every aspect of your outdoor space with precision and craftsmanship.
          </p>
        </div>

        {/* Desktop: Expanding Cards */}
        <div
          className="hidden md:flex h-[600px] gap-3"
          onMouseLeave={() => setHovered(null)}
        >
          {services.map((service, idx) => {
            const isHovered = hovered === idx;
            const isOther = hovered !== null && !isHovered;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                className="relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  flex: isHovered ? "3.5 1 0%" : isOther ? "0.65 1 0%" : "1 1 0%",
                  transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  minWidth: 0,
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    transform: isHovered ? "scale(1.07)" : "scale(1.01)",
                    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isHovered
                      ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.08) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 100%)",
                    transition: "background 0.5s ease",
                  }}
                />

                {/* Gold top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}
                />

                {/* Card number — visible when not hovered */}
                <div
                  className="absolute top-5 left-5 font-serif text-white/20 text-5xl font-bold leading-none select-none"
                  style={{
                    opacity: isHovered ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-3">

                  {/* Title */}
                  <h3
                    className="font-serif font-bold uppercase tracking-widest text-white leading-tight"
                    style={{
                      fontSize: isHovered ? "1.85rem" : "1.1rem",
                      transition: "font-size 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                      whiteSpace: isHovered ? "normal" : "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Divider line */}
                  <div
                    className="h-[1px] bg-brand-gold/60"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      width: isHovered ? "48px" : "0px",
                      transition: "opacity 0.4s ease 0.1s, width 0.4s ease 0.1s",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="font-display text-white/70 text-sm leading-relaxed"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(12px)",
                      transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                      maxWidth: "400px",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div
                    className="flex items-center gap-2 mt-1"
                    style={{
                      opacity: isHovered ? 1 : 0.5,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <span className="font-serif text-brand-gold text-xs tracking-[0.2em] uppercase font-semibold">
                      Learn More
                    </span>
                    <ArrowRight
                      size={13}
                      className="text-brand-gold"
                      style={{
                        transform: isHovered ? "translateX(5px)" : "translateX(0)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <span className="font-serif text-white/20 text-3xl font-bold leading-none select-none">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase tracking-widest text-white">
                  {service.title}
                </h3>
                <p className="font-display text-white/65 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-serif text-brand-gold text-xs tracking-[0.2em] uppercase font-semibold">
                    Learn More
                  </span>
                  <ArrowRight size={12} className="text-brand-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
