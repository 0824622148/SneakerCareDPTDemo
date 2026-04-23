import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tagColor?: "green" | "blue" | "red";
  className?: string;
}

const tagColorMap = {
  green: "text-neon-green border-neon-green/40 bg-neon-green/10",
  blue: "text-neon-blue border-neon-blue/40 bg-neon-blue/10",
  red: "text-neon-red border-neon-red/40 bg-neon-red/10",
};

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  tagColor = "green",
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
      <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
