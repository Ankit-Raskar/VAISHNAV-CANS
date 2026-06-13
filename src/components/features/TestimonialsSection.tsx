import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/constants/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
      setAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "hsl(20,10%,5%)" }}>
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Big quote mark bg */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[300px] font-black text-white/2 leading-none pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        "
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal reveal-up reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Testimonials
          </div>
          <h2
            className="reveal reveal-up reveal-delay-2 text-6xl font-black text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            WHAT OUR{" "}
            <span className="metallic-text">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`relative glass border border-amber-500/20 p-10 lg:p-14 text-center transition-all duration-300 ${
            animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Gold quote icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/10 rounded-full border border-amber-500/30 mb-8 mx-auto">
            <Quote size={24} className="text-amber-500" />
          </div>

          {/* Quote */}
          <blockquote className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed mb-10 italic">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full border-2 border-amber-500/50 object-cover"
            />
            <div className="text-left">
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-amber-500/70 text-sm">{t.role}</div>
              <div className="text-white/30 text-xs">{t.company}</div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-amber-500/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-amber-500/40" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 border border-white/20 text-white/50 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimating(true); setTimeout(() => { setActive(i); setAnimating(false); }, 300); }}
                className={`transition-all duration-300 rounded-full ${
                  active === i ? "w-8 h-2 bg-amber-500" : "w-2 h-2 bg-white/20 hover:bg-amber-500/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 border border-white/20 text-white/50 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
