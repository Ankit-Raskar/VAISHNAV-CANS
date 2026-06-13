import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-cans.jpg";
import canImg from "@/assets/can-hero.png";
import { ChevronDown } from "lucide-react";

const PARTICLES = [
  { top: "15%", left: "8%", size: "6px", delay: "0s" },
  { top: "25%", left: "88%", size: "4px", delay: "0.5s" },
  { top: "60%", left: "5%", size: "8px", delay: "1s" },
  { top: "70%", left: "92%", size: "5px", delay: "0.3s" },
  { top: "40%", left: "95%", size: "3px", delay: "1.2s" },
  { top: "80%", left: "15%", size: "7px", delay: "0.8s" },
  { top: "10%", left: "50%", size: "4px", delay: "0.4s" },
  { top: "55%", left: "78%", size: "6px", delay: "1.5s" },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll(".letter");
    letters?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${0.5 + i * 0.07}s`;
      (el as HTMLElement).style.animationFillMode = "both";
    });
  }, []);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(43,84%,47%) 1px, transparent 1px), linear-gradient(90deg, hsl(43,84%,47%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-amber-500 animate-particle-${(i % 5) + 1}`}
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
          style={{ animation: "floatSlow 4s ease-in-out infinite", top: "30%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-24 pb-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest w-fit mb-8"
            style={{ animation: "slideInLeft 0.8s ease 0.2s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Premium Can Manufacturer Since 1999
          </div>

          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            {"VAISHNAV".split("").map((l, i) => (
              <span
                key={i}
                className="letter inline-block text-amber-500"
                style={{ animation: "slideInUp 0.5s ease both" }}
              >
                {l}
              </span>
            ))}
            <br />
            {"CANS".split("").map((l, i) => (
              <span
                key={i}
                className="letter inline-block text-white"
                style={{ animation: "slideInUp 0.5s ease both" }}
              >
                {l}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: "slideInLeft 0.8s ease 1.2s both" }}
          >
            <div className="h-0.5 w-12 bg-amber-500" />
            <p className="text-amber-400/80 text-lg font-light tracking-widest uppercase">
              I Can · You Can · We Can
            </p>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
          </div>

          <p
            className="text-white/60 text-lg leading-relaxed max-w-lg mb-10"
            style={{ animation: "slideInLeft 0.8s ease 1.4s both" }}
          >
            India's leading tin can manufacturer delivering premium quality packaging solutions
            for food, industrial, and consumer applications.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "slideInLeft 0.8s ease 1.6s both" }}
          >
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-4 bg-amber-500 text-black font-bold text-base uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40"
            >
              <span className="relative z-10">Explore Products</span>
              <span className="absolute inset-0 bg-amber-300 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold text-base uppercase tracking-wider hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300"
            >
              Get Quote
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10"
            style={{ animation: "slideInLeft 0.8s ease 1.8s both" }}
          >
            {[
              { value: "25+", label: "Years" },
              { value: "500+", label: "Clients" },
              { value: "50M+", label: "Cans Made" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl font-black text-amber-500"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Can Visual */}
        <div className="flex items-center justify-center relative">
          {/* Glow ring */}
          <div className="absolute w-72 h-72 rounded-full border border-amber-500/20 animate-spin-slow" />
          <div className="absolute w-80 h-80 rounded-full border border-amber-500/10" style={{ animation: "rotate360 12s linear infinite reverse" }} />

          {/* Gold circle backdrop */}
          <div className="absolute w-64 h-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute w-48 h-48 rounded-full bg-amber-500/10 blur-xl" />

          {/* Main can image */}
          <img
            src={canImg}
            alt="Premium Tin Can"
            className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-contain animate-float-can animate-glow drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 30px hsla(43,84%,47%,0.4))" }}
          />

          {/* Floating labels */}
          <div
            className="absolute top-8 right-4 glass px-3 py-2 rounded-lg text-xs font-semibold text-amber-400 border border-amber-500/30"
            style={{ animation: "floatSlow 3s ease-in-out infinite 0.5s" }}
          >
            ISO 9001:2015 ✓
          </div>
          <div
            className="absolute bottom-16 left-0 glass px-3 py-2 rounded-lg text-xs font-semibold text-amber-400 border border-amber-500/30"
            style={{ animation: "floatSlow 3.5s ease-in-out infinite" }}
          >
            100% Food Safe ✓
          </div>
          <div
            className="absolute top-1/2 right-0 glass px-3 py-2 rounded-lg text-xs font-semibold text-amber-400 border border-amber-500/30"
            style={{ animation: "floatSlow 4s ease-in-out infinite 1s" }}
          >
            BIS Approved ✓
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-amber-500 transition-colors duration-300"
        style={{ animation: "fadeIn 1s ease 2.5s both" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
