import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tagColor?: "brand" | "red" | "light";
  className?: string;
}

const tagColorMap = {
  brand: "text-brand  border-brand/40  bg-brand/10",
  light: "text-brand-light border-brand-light/40 bg-brand-light/10",
  red:   "text-neon-red  border-neon-red/40  bg-neon-red/10",
};

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  tagColor = "brand",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <span
        className={cn(
          "inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest mb-4",
          tagColorMap[tagColor]
        )}
      >
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-smoke text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
