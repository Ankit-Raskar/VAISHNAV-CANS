import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import canRound from "@/assets/can-round.png";
import canRect from "@/assets/can-rectangular.png";
import canConical from "@/assets/can-conical.png";

const products = [
  {
    id: "round",
    name: "Round Tin Cans",
    tag: "Most Popular",
    desc: "Classic round tin cans engineered for maximum durability and airtight preservation.",
    sizes: ["100ml", "250ml", "500ml", "1L+"],
    for: ["Food & Beverages", "Paint & Coatings", "Chemicals"],
    accent: "#e85a1e",
    bg: "#fdf0e8",
    img: canRound,
  },
  {
    id: "rectangular",
    name: "Rectangular Cans",
    tag: "Best for Stacking",
    desc: "Space-efficient rectangular cans with superior stacking capability.",
    sizes: ["500ml", "1L", "2L", "4L"],
    for: ["Lubricants & Oils", "Industrial Fluids", "Adhesives"],
    accent: "#0f4a26",
    bg: "#e8f5ee",
    img: canRect,
    featured: true,
  },
  {
    id: "conical",
    name: "Conical Cans",
    tag: "Premium Design",
    desc: "Uniquely shaped conical cans offering ergonomic handling and premium shelf presence.",
    sizes: ["250ml", "500ml", "1L", "2L"],
    for: ["Premium Foods", "Cosmetics", "Gift Packaging"],
    accent: "#d4920a",
    bg: "#fdf6e3",
    img: canConical,
  },
];

export default function ProductCards() {
  return (
    <section className="py-24 bg-[#f7f5f0] overflow-hidden relative">
      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[#0f4a26]/5 font-display font-extrabold whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 18vw, 220px)" }}
        >
          Products
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="reveal text-[#e85a1e] text-sm font-semibold uppercase tracking-widest">Our Products</span>
            <h2 className="reveal font-display font-extrabold text-4xl lg:text-5xl text-[#0a2e1a] mt-2 leading-tight">
              <span className="text-[#0f4a26]">Vaishnav</span> delivers premium<br />
              quality at an{" "}
              <span className="text-[#e85a1e]">affordable price</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="reveal btn-glow shrink-0 bg-[#0f4a26] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0a2e1a] transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            View All Products
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal card-hover rounded-3xl overflow-hidden relative cursor-pointer group ${
                product.featured ? "md:-mt-6 md:shadow-2xl" : ""
              }`}
              style={{
                backgroundColor: product.bg,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Tag */}
              <div className="absolute top-5 left-5 z-20">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: product.accent, color: "#fff" }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Can image */}
              <div className="flex justify-center pt-16 pb-2 px-8 h-[280px] relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-contain group-hover:scale-110 group-hover:-translate-y-3 transition-transform duration-500 ease-out drop-shadow-xl"
                />
              </div>

              {/* Info */}
              <div className="px-7 pb-7">
                <h3
                  className="font-display font-extrabold text-2xl mb-1.5"
                  style={{ color: product.accent }}
                >
                  {product.name}
                </h3>
                <p className="text-[#0a2e1a]/60 text-sm mb-4 leading-relaxed">{product.desc}</p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                      style={{ color: product.accent, borderColor: product.accent + "40", backgroundColor: product.accent + "10" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* For */}
                <div className="flex flex-wrap gap-1.5">
                  {product.for.map((f) => (
                    <span key={f} className="text-[11px] text-[#0a2e1a]/50 font-medium">{f} ·</span>
                  ))}
                </div>
              </div>

              {/* Arrow hover */}
              <div
                className="absolute bottom-5 right-5 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: product.accent }}
              >
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
