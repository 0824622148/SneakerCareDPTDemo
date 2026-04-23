"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import GlowButton from "./ui/GlowButton";
import { buildWhatsAppURL, PHONE } from "@/lib/utils";

const services = [
  "Basic Clean (from R60)",
  "Deep Clean (from R99)",
  "Sole Restoration (from R150)",
  "Premium Care (from R250)",
  "Crease Guards (R99/pair)",
  "Full Package",
];

const perks = [
  "Free collection & delivery",
  "Same-week turnaround",
  "WhatsApp progress updates",
  "100% satisfaction guarantee",
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    pairs: "1",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to book a sneaker service.

📋 *Service:* ${form.service || "Not specified"}
👟 *Pairs:* ${form.pairs}
📅 *Preferred Date:* ${form.date || "Flexible"}
👤 *Name:* ${form.name}
📱 *Phone:* ${form.phone}
${form.notes ? `📝 *Notes:* ${form.notes}` : ""}

Please confirm availability. Thanks!`;

    window.open(buildWhatsAppURL(msg), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-neon-green/50 focus:bg-white/8 transition-all duration-200";

  return (
    <section id="booking" className="relative py-24 bg-bg-primary overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-green/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              tag="📅 Booking"
              title="Book Your Clean"
              subtitle="Fill in the form and we'll confirm via WhatsApp within the hour."
              align="left"
            />

            <ul className="mt-8 space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-neon-green flex-shrink-0" />
                  <span className="text-text-muted text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 glass rounded-2xl p-6 border border-white/8">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Call / WhatsApp</p>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="text-2xl font-bold text-white hover:text-neon-green transition-colors"
              >
                {PHONE}
              </a>
              <p className="text-text-muted text-sm mt-1">Mon – Sat, 8:00 – 18:00</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 border border-white/8 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+27 66 123 4567"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                  Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled className="bg-bg-secondary">
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-bg-secondary">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                    Number of Pairs
                  </label>
                  <input
                    name="pairs"
                    type="number"
                    min="1"
                    max="20"
                    value={form.pairs}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-1.5">
                  Special Instructions
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="e.g. suede uppers, specific stains, colour restore…"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </button>

              <p className="text-xs text-text-muted text-center">
                Clicking the button will open WhatsApp with your booking details pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
