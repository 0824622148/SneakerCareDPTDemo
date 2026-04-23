"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Zap, Wrench, Star } from "lucide-react";
import GlowCard from "./ui/GlowCard";
import GlowButton from "./ui/GlowButton";
import SectionHeader from "./ui/SectionHeader";
import { buildWhatsAppURL } from "@/lib/utils";

const services = [
  {
    icon: <Droplets size={28} />,
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
    glowColor: "blue" as const,
    title: "Basic Clean",
    description:
      "Surface clean of upper, sole scrub and basic deodorising. Perfect for lightly worn kicks that just need a refresh.",
    price: "From R60",
    features: ["Upper cleaning", "Sole scrub", "Deodorise"],
    whatsappMsg: "Hi! I'd like to book a Basic Clean service.",
  },
  {
    icon: <Zap size={28} />,
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    glowColor: "green" as const,
    title: "Deep Clean",
    description:
      "Full deep clean including lace wash, midsole whitening, and stain removal. The full works for your most loved pairs.",
    price: "From R99",
    features: ["Full deep clean", "Lace wash", "Midsole whitening", "Stain removal"],
    whatsappMsg: "Hi! I'd like to book a Deep Clean service.",
    popular: true,
  },
  {
    icon: <Wrench size={28} />,
    color: "text-neon-red",
    bgColor: "bg-neon-red/10",
    glowColor: "red" as const,
    title: "Sole Restoration",
    description:
      "Yellowed or cracked soles restored to near-original condition. Icy soles, midsole repaints and more.",
    price: "From R150",
    features: ["Sole de-yellowing", "Midsole repaint", "Crack repair", "Re-gluing"],
    whatsappMsg: "Hi! I'd like to book a Sole Restoration service.",
  },
  {
    icon: <Star size={28} />,
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    glowColor: "none" as const,
    title: "Premium Care",
    description:
      "The white-glove treatment. Full restoration, conditioning, sneaker protection spray and VAULT cologne finish.",
    price: "From R250",
    features: ["Full restoration", "Leather conditioning", "Protection spray", "VAULT finish"],
    whatsappMsg: "Hi! I'd like to book the Premium Care service.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 bg-bg-secondary overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-green/4 blur-[120px] pointer-events-none" />

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
                  <span className="bg-neon-green text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <GlowCard
                glowColor={svc.glowColor}
                className={`p-6 h-full flex flex-col ${svc.popular ? "border-neon-green/30" : ""}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${svc.bgColor} flex items-center justify-center mb-4 ${svc.color}`}>
                  {svc.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {svc.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-2xl font-bold text-white mb-4">{svc.price}</div>

                <GlowButton
                  href={buildWhatsAppURL(svc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
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
