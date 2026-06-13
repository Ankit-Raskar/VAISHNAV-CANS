import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import factoryImg from "@/assets/factory.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

const certs = [
  "ISO 9001:2015 Certified",
  "BIS Approved",
  "FSSAI Compliant",
  "Export Quality Approved",
];

export default function QualityBanner() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
          >
            <div className="relative rounded-3xl overflow-hidden h-[420px] lg:h-[520px]">
              <img
                src={factoryImg}
                alt="Vaishnav Cans Manufacturing Facility"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1a]/70 via-transparent to-transparent" />
              {/* Bottom stat */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#0f4a26]">99.7%</div>
                      <div className="text-[#0a2e1a]/60 text-sm mt-0.5">Quality Pass Rate</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#e85a1e]">2M+</div>
                      <div className="text-[#0a2e1a]/60 text-sm mt-0.5">Cans/Month Capacity</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#0f4a26]">7-Step</div>
                      <div className="text-[#0a2e1a]/60 text-sm mt-0.5">Quality Inspection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4ade80] rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-[#0a2e1a] font-display font-extrabold text-xl leading-none">25+</div>
                <div className="text-[#0a2e1a]/70 text-[9px] font-semibold uppercase tracking-wide mt-0.5">Years</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            <span className="text-[#e85a1e] text-sm font-semibold uppercase tracking-widest">Award winning manufacturer</span>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#0a2e1a] mt-3 mb-5 leading-tight">
              Crafting Excellence
              <br />
              <span className="text-[#e85a1e]">Since 1999</span>
            </h2>
            <p className="text-[#0a2e1a]/60 text-base leading-relaxed mb-8">
              Vaishnav Cans Pvt. Ltd. combines traditional craftsmanship with modern automation to produce cans meeting the most demanding quality specifications. Every can that leaves our factory is a testament to our commitment.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {certs.map((cert, i) => (
                <div
                  key={cert}
                  className={`flex items-center gap-2.5 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <CheckCircle size={16} className="text-[#0f4a26] shrink-0" />
                  <span className="text-[#0a2e1a] text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-glow inline-flex items-center gap-2 bg-[#0a2e1a] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0f4a26] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
