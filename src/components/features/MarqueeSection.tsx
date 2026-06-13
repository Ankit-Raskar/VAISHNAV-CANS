import { CATEGORIES } from "@/constants/data";

export default function MarqueeSection() {
  const items = [...CATEGORIES, ...CATEGORIES]; // double for seamless loop

  return (
    <div className="relative bg-amber-500 py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {items.map((cat, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-black font-bold uppercase tracking-widest text-sm whitespace-nowrap"
          >
            {cat}
            <span className="text-black/40 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
