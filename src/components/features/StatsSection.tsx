import { useEffect, useRef, useState } from "react";
import useCounter from "@/hooks/useCounter";

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence", color: "#4ade80" },
  { value: 500, suffix: "+", label: "Happy Clients", color: "#4ade80" },
  { value: 50, suffix: "M+", label: "Cans Produced", color: "#4ade80" },
  { value: 100, suffix: "%", label: "Quality Assurance", color: "#4ade80" },
];

function CounterItem({ value, suffix, label, color, start }: { value: number; suffix: string; label: string; color: string; start: boolean }) {
  const count = useCounter(value, 2200, start);
  return (
    <div className="text-center group">
      <div
        className="font-display font-extrabold text-5xl lg:text-6xl mb-2 tabular-nums leading-none transition-transform duration-300 group-hover:scale-105"
        style={{ color }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#0a2e1a] relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-widest">Numbers That Speak</span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mt-3">
            Our Track Record
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <CounterItem key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
