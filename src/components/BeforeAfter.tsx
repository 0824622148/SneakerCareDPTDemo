"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

type Category = "all" | "cleaning" | "restoration";

const items = [
  {
    id: 1,
    category: "cleaning" as Category,
    label: "Jordan 1 Bred",
    beforeSrc: "/images/sneaker-jordan-bred.png",
    afterSrc: "/images/promo-r99.png",
  },
  {
    id: 2,
    category: "restoration" as Category,
    label: "Jordan 1 Low Royal",
    beforeSrc: "/images/restoration-work.png",
    afterSrc: "/images/sneaker-jordan-bred.png",
  },
  {
    id: 3,
    category: "cleaning" as Category,
    label: "Air Max Clean",
    beforeSrc: "/images/promo-r99.png",
    afterSrc: "/images/lifestyle-3.png",
  },
  {
    id: 4,
    category: "restoration" as Category,
    label: "Sole Restore",
    beforeSrc: "/images/vault-jordan4.png",
    afterSrc: "/images/restoration-work.png",
  },
  {
    id: 5,
    category: "cleaning" as Category,
    label: "Deep Clean #1",
    beforeSrc: "/images/lifestyle-4.png",
    afterSrc: "/images/promo-r99.png",
  },
  {
    id: 6,
    category: "restoration" as Category,
    label: "Full Restoration",
    beforeSrc: "/images/shop-interior.png",
    afterSrc: "/images/restoration-work.png",
  },
];

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label,
  onExpand,
}: {
  beforeSrc: string;
  afterSrc: string;
  label: string;
  onExpand: () => void;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-col-resize select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After (base layer) */}
      <Image src={afterSrc} alt={`${label} after`} fill className="object-cover" />

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={`${label} before`} fill className="object-cover" />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8L2 5m0 6l3-3M11 8l3-3m0 6l-3-3" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md pointer-events-none">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 bg-neon-green/80 backdrop-blur-sm text-black text-xs font-semibold px-2 py-1 rounded-md pointer-events-none">
        AFTER
      </span>

      {/* Expand button */}
      <button
        className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/80 transition-colors"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onExpand}
        aria-label="Expand"
      >
        <ZoomIn size={14} />
      </button>

      {/* Label overlay */}
      <div className="absolute bottom-3 left-3 pointer-events-none">
        <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<(typeof items)[0] | null>(null);

  const filtered = items.filter((i) => filter === "all" || i.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-bg-primary overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neon-blue/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeader
            tag="📸 Gallery"
            title="The Transformations"
            subtitle="Drag the slider to see the before and after. Results speak for themselves."
            tagColor="blue"
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {(["all", "cleaning", "restoration"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 border ${
                filter === cat
                  ? "bg-neon-green text-black border-neon-green"
                  : "text-text-muted border-white/15 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <BeforeAfterSlider
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  label={item.label}
                  onExpand={() => setLightbox(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 w-full max-w-xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <BeforeAfterSlider
                beforeSrc={lightbox.beforeSrc}
                afterSrc={lightbox.afterSrc}
                label={lightbox.label}
                onExpand={() => {}}
              />
              <button
                className="absolute -top-4 -right-4 bg-white text-black rounded-full p-1.5 hover:bg-neon-green transition-colors shadow-lg"
                onClick={() => setLightbox(null)}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
