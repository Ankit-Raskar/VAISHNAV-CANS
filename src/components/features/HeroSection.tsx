import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroCan from "@/assets/hero-can.png";

const slides = [
  {
    tag: "PREMIUM PACKAGING SOLUTIONS",
    title: "India's Most Trusted",
    titleAccent: "Can Manufacturer",
    sub: "Engineering precision-crafted tin containers for every industry — from food-grade to chemical applications since 1999.",
    bg: "from-[#0a2e1a] via-[#0f4a26] to-[#155e32]",
    tagline: "I Can · You Can · We Can",
  },
  {
    tag: "ISO 9001:2015 CERTIFIED",
    title: "25+ Years of",
    titleAccent: "Crafting Excellence",
    sub: "Over 50 million cans delivered across 500+ clients. Quality that speaks louder than words.",
    bg: "from-[#0d2a3a] via-[#0f3a52] to-[#1a4d6e]",
    tagline: "Quality · Precision · Reliability",
  },
  {
    tag: "CUSTOM MANUFACTURING",
    title: "Your Vision,",
    titleAccent: "Our Precision",
    sub: "From unique shapes to custom dimensions and printing — our CNC-equipped facility delivers tailored solutions.",
    bg: "from-[#2a1a0a] via-[#3d2810] to-[#4f3518]",
    tagline: "Custom · Scalable · Fast",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 350);
  };

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [active]);

  const slide = slides[active];

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-700`}>
      {/* Decorative radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/4 rounded-full blur-2xl" />
      </div>

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vertical text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex">
        <span
          className="text-white/20 text-xs font-display font-bold tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {slide.tagline}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-500 ${animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
            <div className={`transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
                {slide.tag}
              </span>
            </div>

            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-4 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontWeight: 800 }}
            >
              {slide.title}
              <br />
              <span className="text-[#4ade80]">{slide.titleAccent}</span>
            </h1>

            <p className={`text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-10 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {slide.sub}
            </p>

            <div className={`flex items-center gap-4 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link
                to="/products"
                className="btn-glow group inline-flex items-center gap-2 bg-white text-[#0f4a26] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#4ade80] hover:text-[#0a2e1a] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors border-b border-white/30 hover:border-white pb-0.5"
              >
                Get Quote →
              </Link>
            </div>

            {/* Stats row */}
            <div className={`flex items-center gap-8 mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { value: "25+", label: "Years" },
                { value: "500+", label: "Clients" },
                { value: "50M+", label: "Cans Made" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-display font-extrabold text-2xl">{stat.value}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Can Image */}
          <div className="relative flex justify-center items-end h-[480px] lg:h-[580px]">
            {/* Splash background circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[380px] h-[380px] lg:w-[480px] lg:h-[480px] bg-white/8 rounded-full splash-anim" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] bg-[#4ade80]/15 rounded-full blur-xl" />
            </div>

            {/* Can image */}
            <img
              src={heroCan}
              alt="Premium Tin Can"
              className={`relative z-10 float-anim h-[420px] lg:h-[520px] object-contain drop-shadow-2xl transition-all duration-700 delay-200 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            />

            {/* Floating badges */}
            <div className={`absolute top-12 right-4 bg-white rounded-2xl px-4 py-3 shadow-xl transition-all duration-700 delay-600 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="text-[#0f4a26] text-xs font-bold">ISO 9001:2015</div>
              <div className="text-gray-500 text-[10px]">Certified</div>
            </div>
            <div className={`absolute bottom-16 left-4 bg-[#4ade80] rounded-2xl px-4 py-3 shadow-xl transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="text-[#0a2e1a] text-xs font-bold">100% Food Safe</div>
              <div className="text-[#0a2e1a]/70 text-[10px]">FSSAI Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-7 h-2 bg-[#4ade80]" : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
