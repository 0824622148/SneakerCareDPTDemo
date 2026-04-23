"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Zap } from "lucide-react";
import GlowCard from "./ui/GlowCard";
import GlowButton from "./ui/GlowButton";
import SectionHeader from "./ui/SectionHeader";
import { buildWhatsAppURL } from "@/lib/utils";

const deals = [
  {
    id: 1,
    icon: "🔥",
    badge: "MOST POPULAR",
    badgeClass: "bg-brand text-white",
    title: "3 For 2 Deal",
    price: "Pay for 2",
    priceNote: "when you book 3 pairs",
    description: "Book in any 3 pairs and only pay for 2. Includes main & additional services.",
    validity: "Valid for April 2026",
    glowColor: "brand" as const,
    whatsappMsg: "Hi! I'd like to book the 3 For 2 Deal.",
    variant: "primary" as const,
  },
  {
    id: 2,
    icon: "💥",
    badge: "LIMITED TIME",
    badgeClass: "bg-neon-red text-white",
    title: "Deep Clean Special",
    price: "R99",
    priceNote: "per pair",
    description: "Mid Month Mayham — full deep clean including sole scrub, upper clean and deodorise.",
    validity: "3+ pairs only",
    glowColor: "red" as const,
    whatsappMsg: "Hi! I'd like to book the R99 Deep Clean Special.",
    variant: "red" as const,
  },
  {
    id: 3,
    icon: "🛡️",
    badge: "ADD-ON",
    badgeClass: "bg-brand-light text-white",
    title: "Crease Guards",
    price: "R99",
    priceNote: "per pair",
    description: "Protect your toe box from unsightly creases. Fits most sneaker silhouettes.",
    validity: "Available now",
    glowColor: "brand" as const,
    whatsappMsg: "Hi! I'd like to add Crease Guards (R99) to my order.",
    variant: "ghost" as const,
  },
];

export default function Specials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specials" className="relative py-24 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-red/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionHeader
            tag="💰 Specials"
            title="Current Deals"
            subtitle="Exclusive offers for sneaker lovers. Book before they're gone."
            tagColor="red"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlowCard glowColor={deal.glowColor} className="p-6 h-full flex flex-col">
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${deal.badgeClass}`}>
                  {deal.badge}
                </span>
                <div className="text-4xl mb-3">{deal.icon}</div>
                <h3 className="text-2xl font-black mb-1">{deal.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-black text-brand">{deal.price}</span>
                  <span className="text-smoke text-sm">{deal.priceNote}</span>
                </div>
                <p className="text-smoke text-sm leading-relaxed mb-4 flex-1">{deal.description}</p>
                <div className="flex items-center gap-2 text-xs text-smoke mb-5">
                  <Clock size={12} />
                  <span>{deal.validity}</span>
                </div>
                <GlowButton
                  href={buildWhatsAppURL(deal.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={deal.variant}
                  className="w-full"
                >
                  Claim Deal
                </GlowButton>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Free delivery banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-bg-card rounded-2xl p-5 border border-brand/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
              <Zap size={18} className="text-brand" />
            </div>
            <div>
              <div className="font-bold">Free Collection &amp; Delivery</div>
              <div className="text-smoke text-sm">We come to you. Available across Johannesburg.</div>
            </div>
          </div>
          <GlowButton href="#booking" size="sm" variant="ghost">
            Book &amp; Get Free Delivery →
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
