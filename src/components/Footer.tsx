import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { INSTAGRAM_URL, LOCATION, PHONE, buildWhatsAppURL } from "@/lib/utils";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const serviceLinks = ["Basic Clean", "Deep Clean", "Restoration", "Protection", "Crease Guards", "VAULT Cologne"];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand/30 flex-shrink-0">
                <Image src="/images/logo.png" alt="SCD" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <span className="font-black text-base tracking-tight">
                Sneaker<span className="text-brand"> Care</span>
              </span>
            </div>
            <p className="text-smoke text-sm leading-relaxed">
              Johannesburg&apos;s premium sneaker cleaning and restoration studio. From beaters to heat — guaranteed.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-smoke hover:text-brand hover:border-brand/40 transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@weluvsneakercare" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-smoke hover:text-brand hover:border-brand/40 transition-colors text-xs font-bold">
                TT
              </a>
              <a href={buildWhatsAppURL("Hi! I'd like to book a sneaker service.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-smoke hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors text-sm">
                💬
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-smoke text-sm hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand mt-0.5 flex-shrink-0" />
                <span className="text-smoke text-sm leading-snug">{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand flex-shrink-0" />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-smoke text-sm hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-brand flex-shrink-0" />
                <span className="text-smoke text-sm">Mon – Sat, 8:00 – 18:00</span>
              </li>
            </ul>
          </div>

          {/* Quick CTA */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-white">Book Now</h4>
            <p className="text-smoke text-sm mb-5">Ready to get your kicks looking fresh? Book online in under a minute.</p>
            <a href="#booking"
              className="inline-block bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-light transition-colors hover:shadow-[0_0_20px_rgba(74,159,245,0.4)]">
              Book a Service →
            </a>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-smoke text-xs">© {new Date().getFullYear()} Sneaker Care Department. All rights reserved.</p>
          <p className="text-smoke text-xs">Built with 🔥 in Johannesburg</p>
        </div>
      </div>
    </footer>
  );
}
