import { MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { INSTAGRAM_URL, LOCATION, PHONE, buildWhatsAppURL } from "@/lib/utils";

const serviceLinks = [
  "Basic Clean",
  "Deep Clean",
  "Sole Restoration",
  "Premium Care",
  "Crease Guards",
  "VAULT Cologne",
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-neon-green flex items-center justify-center">
                <span className="text-black text-xs font-bold">SCD</span>
              </div>
              <span className="font-bold text-lg">
                Sneaker<span className="text-neon-green">Care</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Johannesburg&apos;s premium sneaker cleaning and restoration studio. From beaters to heat — guaranteed.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-green hover:border-neon-green/40 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@weluvsneakercare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-green hover:border-neon-green/40 transition-colors text-xs font-bold"
              >
                TT
              </a>
              <a
                href={buildWhatsAppURL("Hi! I'd like to book a sneaker service.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors text-sm"
              >
                💬
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-neon-green mt-0.5 flex-shrink-0" />
                <span className="text-text-muted text-sm leading-snug">{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-neon-green flex-shrink-0" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-text-muted text-sm hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-neon-green flex-shrink-0" />
                <span className="text-text-muted text-sm">Mon – Sat, 8:00 – 18:00</span>
              </li>
            </ul>
          </div>

          {/* Quick CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
              Book Now
            </h4>
            <p className="text-text-muted text-sm mb-5">
              Ready to get your kicks looking fresh? Book online in under a minute.
            </p>
            <a
              href="#booking"
              className="inline-block bg-neon-green text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Book a Service →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Sneaker Care Department. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with 🔥 in Johannesburg
          </p>
        </div>
      </div>
    </footer>
  );
}
