import { Zap, Shield, Truck, Settings, HeadphonesIcon, TrendingUp } from "lucide-react";
import { useState } from "react";

const REASONS = [
  {
    icon: Shield,
    title: "Uncompromised Quality",
    description: "Every can undergoes 7-step quality inspection including pressure testing, seam integrity, and coating adhesion checks before dispatch.",
    metric: "99.7%",
    metricLabel: "Quality Pass Rate",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Strategically located near major industrial hubs with a dedicated logistics fleet ensuring your orders arrive on schedule, every time.",
    metric: "98%",
    metricLabel: "On-Time Delivery",
  },
  {
    icon: Settings,
    title: "Custom Manufacturing",
    description: "From unique shapes to custom dimensions and printing — our CNC-equipped facility can produce tailored solutions for your specific needs.",
    metric: "500+",
    metricLabel: "Custom Designs",
  },
  {
    icon: Zap,
    title: "High-Speed Production",
    description: "Advanced automated production lines capable of producing up to 2 million cans per month, scaling with your demand.",
    metric: "2M+",
    metricLabel: "Monthly Capacity",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "A dedicated account manager for each client, with 24/7 support for urgent queries and technical assistance.",
    metric: "24/7",
    metricLabel: "Support Available",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Vertical integration across our supply chain allows us to offer premium quality at market-competitive prices with bulk discounts.",
    metric: "30%",
    metricLabel: "Cost Savings",
  },
];

export default function WhyUsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="why-us" className="relative py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/3 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal reveal-up reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Why Choose Us
          </div>
          <h2
            className="reveal reveal-up reveal-delay-2 text-6xl sm:text-7xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            THE{" "}
            <span className="metallic-text">VAISHNAV</span>{" "}
            ADVANTAGE
          </h2>
          <p className="reveal reveal-up reveal-delay-3 text-white/50 text-lg max-w-2xl mx-auto">
            Six pillars that make us India's most trusted tin can manufacturer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal reveal-up reveal-delay-${Math.min(i + 1, 6)} relative p-8 border transition-all duration-500 cursor-default overflow-hidden group ${
                hoveredIdx === i
                  ? "border-amber-500 bg-amber-500/5"
                  : "border-white/10 hover:border-amber-500/30"
              }`}
              style={{ background: hoveredIdx === i ? "hsla(43,84%,47%,0.05)" : "hsl(20,10%,6%)" }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 text-6xl font-black text-white/3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 mb-6 flex items-center justify-center rounded-sm transition-all duration-300 ${
                  hoveredIdx === i ? "bg-amber-500 text-black" : "bg-amber-500/10 text-amber-500"
                }`}
              >
                <reason.icon size={22} />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-black text-white mb-3 transition-colors duration-300 group-hover:text-amber-400"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              >
                {reason.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{reason.description}</p>

              {/* Metric */}
              <div className="flex items-end gap-2 border-t border-white/10 pt-4">
                <span
                  className="text-3xl font-black text-amber-500"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {reason.metric}
                </span>
                <span className="text-white/30 text-xs uppercase tracking-widest mb-1">
                  {reason.metricLabel}
                </span>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-700 ${
                  hoveredIdx === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
