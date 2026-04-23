"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlowCard from "./ui/GlowCard";
import GlowButton from "./ui/GlowButton";
import SectionHeader from "./ui/SectionHeader";
import { buildWhatsAppURL } from "@/lib/utils";

const services = [
  {
    emoji: "🫧",
    iconBg: "bg-brand/10",
    title: "Basic Clean",
    description: "Surface clean of upper, sole scrub and basic deodorising. Perfect for lightly worn kicks that need a refresh.",
    price: "From R60",
    features: ["Upper cleaning", "Sole scrub", "Deodorise"],
    whatsappMsg: "Hi! I'd like to book a Basic Clean service.",
    popular: false,
  },
  {
    emoji: "✨",
    iconBg: "bg-brand/15",
    title: "Deep Clean",
    description: "Full deep clean including lace wash, midsole whitening and stain removal. The full works for your most loved pairs.",
    price: "R150",
    features: ["Full deep clean", "Lace wash", "Midsole whitening", "Stain removal"],
    whatsappMsg: "Hi! I'd like to book a Deep Clean service.",
    popular: true,
  },
  {
    emoji: "🔧",
    iconBg: "bg-brand-light/10",
    title: "Restoration",
    description: "Yellowed or cracked soles restored to near-original condition. Icy soles, midsole repaints and more.",
    price: "R250",
    features: ["Sole de-yellowing", "Midsole repaint", "Crack repair", "Re-gluing"],
    whatsappMsg: "Hi! I'd like to book a Restoration service.",
    popular: false,
  },
  {
    emoji: "🛡️",
    iconBg: "bg-brand/10",
    title: "Protection",
    description: "Sneaker protection spray, crease guards and conditioning — keep your heat looking factory-fresh for longer.",
    price: "R100",
    features: ["Protection spray", "Crease guards", "Leather conditioning", "VAULT finish"],
    whatsappMsg: "Hi! I'd like to book a Protection service.",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 bg-bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(74,159,245,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionHeader
            tag="🧼 Services"
            title="What We Do"
            subtitle="Every pair gets the attention it deserves. Choose your clean."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {svc.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <GlowCard
                glowColor="brand"
                className={`p-6 h-full flex flex-col ${svc.popular ? "border-brand/30 bg-bg-elevated" : ""}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center text-2xl mb-4`}>
                  {svc.emoji}
                </div>

                <h3 className="text-xl font-black mb-2">{svc.title}</h3>
                <p className="text-smoke text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-smoke">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="text-2xl font-black text-white mb-4">{svc.price}</div>

                <GlowButton
                  href={buildWhatsAppURL(svc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={svc.popular ? "primary" : "ghost"}
                  size="sm"
                  className="w-full"
                >
                  Book This Service
                </GlowButton>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
