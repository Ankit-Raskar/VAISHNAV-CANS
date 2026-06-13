import { Shield, Clock, Settings, Zap, Headphones, DollarSign } from "lucide-react";

const advantages = [
  {
    num: "01",
    icon: Shield,
    title: "Uncompromised Quality",
    desc: "Every can undergoes 7-step quality inspection including pressure testing, seam integrity, and coating adhesion checks.",
    stat: "99.7%",
    statLabel: "Quality Pass Rate",
    color: "#e85a1e",
  },
  {
    num: "02",
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Strategically located near major industrial hubs with a dedicated logistics fleet ensuring orders arrive on schedule.",
    stat: "98%",
    statLabel: "On-Time Delivery",
    color: "#0f4a26",
  },
  {
    num: "03",
    icon: Settings,
    title: "Custom Manufacturing",
    desc: "From unique shapes to custom dimensions and printing — our CNC-equipped facility produces tailored solutions.",
    stat: "500+",
    statLabel: "Custom Designs",
    color: "#d4920a",
  },
  {
    num: "04",
    icon: Zap,
    title: "High-Speed Production",
    desc: "Advanced automated production lines capable of producing up to 2 million cans per month, scaling with demand.",
    stat: "2M+",
    statLabel: "Monthly Capacity",
    color: "#e85a1e",
  },
  {
    num: "05",
    icon: Headphones,
    title: "Dedicated Support",
    desc: "A dedicated account manager for each client, with 24/7 support for urgent queries and technical assistance.",
    stat: "24/7",
    statLabel: "Support Available",
    color: "#0f4a26",
  },
  {
    num: "06",
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Vertical integration across our supply chain allows us to offer premium quality at market-competitive prices.",
    stat: "30%",
    statLabel: "Cost Savings",
    color: "#d4920a",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="reveal text-[#e85a1e] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="reveal font-display font-extrabold text-4xl lg:text-5xl text-[#0a2e1a] mt-3">
            The Vaishnav <span className="text-[#0f4a26]">Advantage</span>
          </h2>
          <p className="reveal text-[#0a2e1a]/50 text-base mt-4 max-w-xl mx-auto">
            Six pillars that make us India's most trusted tin can manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="reveal card-hover bg-white rounded-3xl p-7 border border-black/5 group relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 font-display font-extrabold text-6xl opacity-5 leading-none pointer-events-none select-none"
                  style={{ color: item.color }}
                >
                  {item.num}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.color + "15" }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                <h3 className="font-display font-bold text-xl text-[#0a2e1a] mb-2">{item.title}</h3>
                <p className="text-[#0a2e1a]/55 text-sm leading-relaxed mb-5">{item.desc}</p>

                {/* Stat */}
                <div className="flex items-end gap-2 pt-4 border-t border-black/5">
                  <span
                    className="font-display font-extrabold text-2xl"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-[#0a2e1a]/40 text-xs uppercase tracking-wide mb-0.5">{item.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
