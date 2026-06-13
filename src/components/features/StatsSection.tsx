import { useRef } from "react";
import { useCountUp } from "@/hooks/useScrollReveal";
import { STATS } from "@/constants/data";
import factoryImg from "@/assets/factory.jpg";

function StatItem({ stat, index }: { stat: { value: number; suffix: string; label: string }; index: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCountUp(numRef as React.RefObject<HTMLElement>, stat.value, 2000);

  return (
    <div
      className={`reveal reveal-up reveal-delay-${index + 1} flex flex-col items-center text-center p-8 border-r border-white/10 last:border-r-0`}
    >
      <div className="text-6xl lg:text-7xl font-black text-amber-500 mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        <span ref={numRef}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background factory image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${factoryImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal reveal-up">
          <h2
            className="text-4xl font-black text-white uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
          >
            Numbers That{" "}
            <span className="metallic-text">Speak</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y lg:divide-y-0">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
