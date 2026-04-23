"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import GlowButton from "./ui/GlowButton";

const steps = [
  {
    number: "01",
    emoji: "📅",
    title: "Book Online",
    description: "Pick your service, choose a date and send us a WhatsApp. Takes less than 60 seconds.",
    borderColor: "border-brand/30",
    bgColor: "bg-brand/5",
    numColor: "text-brand",
  },
  {
    number: "02",
    emoji: "🚗",
    title: "We Collect",
    description: "Drop off at 96 Vorster Ave, Glenanda, or let us come to you — free collection and delivery across Johannesburg.",
    borderColor: "border-brand-light/30",
    bgColor: "bg-brand-light/5",
    numColor: "text-brand-light",
  },
  {
    number: "03",
    emoji: "✨",
    title: "Receive Fresh Kicks",
    description: "Your sneakers are returned cleaned, restored and smelling great. Looking better than the day you copped them.",
    borderColor: "border-brand/30",
    bgColor: "bg-brand/5",
    numColor: "text-brand",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-24 bg-bg-secondary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            tag="🔁 Process"
            title="How It Works"
            subtitle="From booking to fresh kicks — it's that simple."
          />
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-brand/20 via-brand-light/40 to-brand/20 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl border ${step.borderColor} ${step.bgColor} p-8 flex flex-col items-center text-center`}
            >
              <div className={`text-xs font-bold uppercase tracking-widest ${step.numColor} mb-4`}>
                Step {step.number}
              </div>
              <div className="text-5xl mb-4">{step.emoji}</div>
              <h3 className="text-xl font-black mb-3">{step.title}</h3>
              <p className="text-smoke text-sm leading-relaxed">{step.description}</p>
              <div className={`absolute bottom-4 right-4 text-6xl font-black opacity-5 ${step.numColor} pointer-events-none leading-none`}>
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-14"
        >
          <GlowButton href="#booking" size="lg">Start Your Booking</GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
