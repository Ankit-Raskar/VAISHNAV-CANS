import { useState } from "react";
import { PRODUCTS } from "@/constants/data";
import { ArrowRight, Package } from "lucide-react";

const FILTER_TABS = ["All", "Round", "Rectangular", "Conical", "Industrial", "Food Grade"];

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="relative py-32 bg-black">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsla(43,84%,47%,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal reveal-up reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Package size={12} />
            Our Products
          </div>
          <h2
            className="reveal reveal-up reveal-delay-2 text-6xl sm:text-7xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PREMIUM{" "}
            <span className="metallic-text">CAN RANGE</span>
          </h2>
          <p className="reveal reveal-up reveal-delay-3 text-white/50 text-lg max-w-2xl mx-auto">
            Engineering precision-crafted tin containers for every industry — from food-grade to industrial applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal reveal-up reveal-delay-4 flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === tab
                  ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/30"
                  : "border-white/20 text-white/60 hover:border-amber-500/50 hover:text-amber-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`reveal reveal-up reveal-delay-${Math.min(i + 1, 6)} group relative overflow-hidden border border-white/10 hover-glow transition-all duration-500 cursor-pointer ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ background: "hsl(20,10%,7%)" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-amber-500/10 transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors duration-300"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="px-2 py-0.5 text-xs border border-amber-500/30 text-amber-400/70 rounded-sm"
                    >
                      {size}
                    </span>
                  ))}
                  {product.sizes.length > 4 && (
                    <span className="px-2 py-0.5 text-xs border border-white/10 text-white/30 rounded-sm">
                      +{product.sizes.length - 4} more
                    </span>
                  )}
                </div>

                {/* Applications */}
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <span className="font-semibold text-amber-500/60 uppercase tracking-wider">For:</span>
                  {product.applications.join(" · ")}
                </div>

                {/* Bottom hover bar */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${
                    hoveredId === product.id ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Material tag */}
              <div className="absolute top-4 right-4 text-xs text-white/30 bg-black/50 px-2 py-1 rounded-sm">
                {product.material}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal reveal-up reveal-delay-3">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 px-10 py-4 border border-amber-500 text-amber-500 font-bold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-all duration-300"
          >
            Request Custom Order
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
