import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Vaishnav Cans has been our packaging partner for over 10 years. Their quality is unmatched, and delivery is always on time. Highly recommend to any manufacturer.",
    name: "Rajesh Sharma",
    role: "Procurement Head",
    company: "Sharma Foods Ltd.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Exceptional quality and customer service. The custom printing on our premium food cans has helped us stand out on retail shelves significantly.",
    name: "Priya Mehta",
    role: "Brand Manager",
    company: "Mehta Spices Pvt. Ltd.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "We've been ordering chemical drums for 5+ years. The durability and leakage-proof design is exactly what we needed for our industrial applications.",
    name: "Arun Patel",
    role: "Operations Director",
    company: "Gujarat Chemicals Inc.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((active + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-[#0a2e1a] overflow-hidden relative">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0f4a26] rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-widest">Client Stories</span>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative bg-white/5 rounded-3xl p-10 lg:p-14 border border-white/10 backdrop-blur-sm">
          <Quote size={40} className="text-[#4ade80]/40 mb-6" />

          <blockquote className="text-white/90 text-xl lg:text-2xl font-display font-medium leading-relaxed mb-8 transition-all duration-500">
            "{t.quote}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#4ade80]/50"
              />
              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/50 text-sm">{t.role} · {t.company}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-[#4ade80] flex items-center justify-center text-[#0a2e1a] hover:bg-[#22c55e] transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-[#4ade80]" : "w-2 h-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
