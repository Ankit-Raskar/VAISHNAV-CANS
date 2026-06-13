import { useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import factoryImg from "@/assets/factory.jpg";
import MarqueeStrip from "@/components/features/MarqueeStrip";
import WhyUsSection from "@/components/features/WhyUsSection";
import StatsSection from "@/components/features/StatsSection";
import CtaBanner from "@/components/features/CtaBanner";
import { CheckCircle } from "lucide-react";

const timeline = [
  { year: "1999", event: "Founded in Ahmedabad, Gujarat with a vision for premium packaging." },
  { year: "2005", event: "Expanded to 10,000 sq. ft. facility with automated production lines." },
  { year: "2010", event: "Achieved ISO 9001:2008 certification. 100+ clients milestone." },
  { year: "2015", event: "Launched food-grade certified product line with FSSAI compliance." },
  { year: "2019", event: "Upgraded to ISO 9001:2015. Crossed 500+ client partnerships." },
  { year: "2024", event: "50 million+ cans produced. BIS approved for all product lines." },
];

export default function About() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0a2e1a] via-[#0f4a26] to-[#155e32] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/20 mb-6">
            Since 1999
          </span>
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-none mb-4">
            Crafting <span className="text-[#4ade80]">Excellence</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            25+ years of delivering precision-engineered tin packaging solutions across India.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="reveal text-[#e85a1e] text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="reveal font-display font-extrabold text-4xl lg:text-5xl text-[#0a2e1a] mt-3 mb-5 leading-tight">
                Built on Trust,<br />
                <span className="text-[#0f4a26]">Driven by Quality</span>
              </h2>
              <p className="reveal text-[#0a2e1a]/60 text-base leading-relaxed mb-5">
                Vaishnav Cans Pvt. Ltd. has been at the forefront of India's tin can manufacturing industry for over two decades. Founded with the vision of delivering superior packaging solutions, we have grown into a trusted partner for industries ranging from food processing to industrial chemicals.
              </p>
              <p className="reveal text-[#0a2e1a]/60 text-base leading-relaxed mb-8">
                Our state-of-the-art facility in Ahmedabad combines traditional craftsmanship with modern automation to produce cans that meet the most demanding quality specifications.
              </p>
              <div className="reveal grid grid-cols-2 gap-3">
                {["ISO 9001:2015 Certified", "BIS Approved", "FSSAI Compliant", "Export Quality Approved"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#0f4a26] shrink-0" />
                    <span className="text-[#0a2e1a] text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="rounded-3xl overflow-hidden h-[420px]">
                <img src={factoryImg} alt="Vaishnav Cans Factory" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#4ade80] rounded-2xl p-5 shadow-xl">
                <div className="text-[#0a2e1a] font-display font-extrabold text-2xl">25+</div>
                <div className="text-[#0a2e1a]/70 text-xs font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="reveal text-[#e85a1e] text-sm font-semibold uppercase tracking-widest">Journey</span>
            <h2 className="reveal font-display font-extrabold text-4xl text-[#0a2e1a] mt-2">
              Our Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[#0f4a26]/20 -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`reveal relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0f4a26] border-4 border-white shadow-md z-10 top-4" />

                  <div className={`ml-16 md:ml-0 md:w-[44%] bg-white rounded-2xl p-5 border border-black/5 card-hover ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <span className="text-[#e85a1e] font-display font-extrabold text-2xl">{item.year}</span>
                    <p className="text-[#0a2e1a]/70 text-sm mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <WhyUsSection />
      <CtaBanner />
    </main>
  );
}
