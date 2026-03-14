import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const serviceAreas = [
    "Kent", "Seattle", "Renton", "Auburn", 
    "Federal Way", "Des Moines", "Covington", "Maple Valley"
  ];

  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/images/hero/Transparent-Equinox-logo.png"
                alt="Equinox Landscape"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/60 leading-relaxed">
              Premium landscaping services that elevate your property. 
              Grounded in tradition, driven by excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/equinoxlandscapellc" target="_blank" rel="noopener noreferrer" aria-label="Equinox Landscape on Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/equinoxlandscapellc" target="_blank" rel="noopener noreferrer" aria-label="Equinox Landscape on Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-brand-gold font-semibold mb-6 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/60 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <MapPin size={12} className="text-brand-gold/50" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="text-white/60 hover:text-white transition-colors">Recent Projects</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-gold font-semibold mb-6 uppercase tracking-wider text-sm">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <a href="tel:+12064188749" className="text-white font-medium hover:text-brand-gold transition-colors">(206) 418-8749</a>
                  <p className="text-white/40 text-sm">Mon - Sat: 8am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <a href="mailto:Equinoxlandscapellc@gmail.com" className="text-white font-medium hover:text-brand-gold transition-colors break-all">Equinoxlandscapellc@gmail.com</a>
                  <p className="text-white/40 text-sm">Reply within 24 hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Equinox Landscape LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
