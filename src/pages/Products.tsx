import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import canRound from "@/assets/can-round.png";
import canRect from "@/assets/can-rectangular.png";
import canConical from "@/assets/can-conical.png";
import MarqueeStrip from "@/components/features/MarqueeStrip";
import CtaBanner from "@/components/features/CtaBanner";

const allProducts = [
  {
    id: "round",
    name: "Round Tin Cans",
    category: "Round",
    desc: "Classic round tin cans engineered for maximum durability and airtight preservation.",
    sizes: ["100ml", "250ml", "500ml", "1L", "2L", "5L"],
    for: ["Food & Beverages", "Paint & Coatings", "Chemicals"],
    material: "Premium Tin Plate",
    accent: "#e85a1e",
    bg: "#fdf0e8",
    img: canRound,
  },
  {
    id: "rectangular",
    name: "Rectangular Cans",
    category: "Rectangular",
    desc: "Space-efficient rectangular cans with superior stacking capability.",
    sizes: ["500ml", "1L", "2L", "4L", "5L"],
    for: ["Lubricants & Oils", "Industrial Fluids", "Adhesives"],
    material: "Electrolytic Tin Plate",
    accent: "#0f4a26",
    bg: "#e8f5ee",
    img: canRect,
  },
  {
    id: "conical",
    name: "Conical Cans",
    category: "Conical",
    desc: "Uniquely shaped conical cans offering ergonomic handling and premium shelf presence.",
    sizes: ["250ml", "500ml", "1L", "2L"],
    for: ["Premium Foods", "Cosmetics", "Gift Packaging"],
    material: "Cold Rolled Steel",
    accent: "#d4920a",
    bg: "#fdf6e3",
    img: canConical,
  },
  {
    id: "paint",
    name: "Paint Cans",
    category: "Industrial",
    desc: "Heavy-duty paint cans with reinforced rims and secure lid systems.",
    sizes: ["500ml", "1L", "2L", "4L", "10L"],
    for: ["Paints", "Varnishes", "Wood Stains"],
    material: "Heavy Gauge Tin Plate",
    accent: "#7c3aed",
    bg: "#f3f0ff",
    img: canRect,
  },
  {
    id: "spice",
    name: "Spice & Food Cans",
    category: "Food Grade",
    desc: "Food-grade certified cans with oxygen barrier technology to preserve freshness.",
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    for: ["Spices", "Dry Foods", "Tea & Coffee"],
    material: "Food-Grade Tin Plate",
    accent: "#0891b2",
    bg: "#e8f7fb",
    img: canRound,
  },
  {
    id: "drums",
    name: "Chemical Drums",
    category: "Industrial",
    desc: "Industrial-grade containers for safe storage and transport of chemicals and solvents.",
    sizes: ["10L", "20L", "25L", "50L"],
    for: ["Chemicals", "Solvents", "Industrial Use"],
    material: "Steel with Coating",
    accent: "#64748b",
    bg: "#f1f5f9",
    img: canConical,
  },
];

const categories = ["All", "Round", "Rectangular", "Conical", "Industrial", "Food Grade"];

export default function Products() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeFilter === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

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
            Premium Range
          </span>
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-none mb-4">
            Our Product <span className="text-[#4ade80]">Range</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Complete packaging solutions engineered for every industry — food, industrial, and consumer.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      {/* Products Grid */}
      <section className="py-20 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter */}
          <div className="reveal flex items-center gap-3 mb-12 overflow-x-auto pb-2">
            <Filter size={16} className="text-[#0a2e1a]/40 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#0f4a26] text-white scale-105"
                    : "bg-white text-[#0a2e1a] border border-black/10 hover:border-[#0f4a26] hover:text-[#0f4a26]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="reveal card-hover bg-white rounded-3xl overflow-hidden border border-black/5 group cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Image area */}
                <div
                  className="flex justify-center items-end px-10 pt-12 pb-4 h-[260px] relative"
                  style={{ backgroundColor: product.bg }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500 ease-out drop-shadow-xl"
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-display font-extrabold text-xl mb-1.5"
                    style={{ color: product.accent }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[#0a2e1a]/55 text-sm leading-relaxed mb-4">{product.desc}</p>

                  {/* Material */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#0a2e1a]/40 text-[11px] uppercase tracking-wider font-medium">Material:</span>
                    <span className="text-[#0a2e1a] text-[11px] font-semibold">{product.material}</span>
                  </div>

                  {/* Sizes */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.sizes.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
                        style={{ color: product.accent, borderColor: product.accent + "40", backgroundColor: product.accent + "10" }}
                      >
                        {s}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-500">
                        +{product.sizes.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-black/5 pt-4">
                    <div className="flex flex-wrap gap-1">
                      {product.for.map((f, idx) => (
                        <span key={f} className="text-[10px] text-[#0a2e1a]/40 font-medium">
                          {f}{idx < product.for.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="shrink-0 ml-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ backgroundColor: product.accent }}
                      >
                        <ArrowRight size={14} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom order CTA */}
          <div className="reveal mt-12 text-center">
            <div className="bg-white rounded-3xl p-10 border border-black/5 max-w-2xl mx-auto">
              <h3 className="font-display font-bold text-2xl text-[#0a2e1a] mb-2">Need a Custom Shape?</h3>
              <p className="text-[#0a2e1a]/55 mb-6 text-sm">
                Our CNC-equipped facility can produce tailored solutions for your specific requirements.
              </p>
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center gap-2 bg-[#0f4a26] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0a2e1a] transition-all duration-300 hover:scale-105"
              >
                Request Custom Order <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
