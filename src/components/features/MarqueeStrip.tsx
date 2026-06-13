import { Diamond } from "lucide-react";

const items = [
  "Round Cans", "Rectangular Cans", "Conical Cans", "Paint Cans",
  "Food Grade", "Chemical Drums", "Spice Cans", "Oil Containers",
  "Custom Shapes", "ISO Certified", "BIS Approved",
];

interface MarqueeStripProps {
  dark?: boolean;
}

export default function MarqueeStrip({ dark }: MarqueeStripProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`py-4 overflow-hidden border-y ${dark ? "bg-[#0f4a26] border-white/10" : "bg-[#f0ede6] border-[#0f4a26]/15"}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-3 mx-6 text-sm font-semibold uppercase tracking-widest whitespace-nowrap ${
              dark ? "text-white/70" : "text-[#0f4a26]/70"
            }`}
          >
            <Diamond size={8} className={dark ? "text-[#4ade80]" : "text-[#e85a1e]"} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
