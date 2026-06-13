import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = ["home", "products", "about", "why-us", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3 shadow-2xl shadow-black/50"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center bg-amber-500/10 group-hover:bg-amber-500/20 transition-all duration-300">
                <span className="text-amber-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>V</span>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/40 scale-125 animate-ping opacity-30" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                <span className="text-amber-500">Vaishnav</span>
                <span> Cans</span>
              </div>
              <div className="text-amber-500/70 text-[10px] font-light tracking-widest">PVT. LTD.</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-amber-500"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {active === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-500 rounded-full" />
                )}
                <span className="gold-underline">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav("#contact")}
              className="relative px-6 py-2.5 bg-amber-500 text-black font-bold text-sm uppercase tracking-wider rounded-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full gap-8 transition-all duration-500 ${
            mobileOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-4xl font-bold text-white hover:text-amber-500 transition-colors duration-300"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.1em",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-4 px-8 py-3 bg-amber-500 text-black font-bold text-lg uppercase tracking-wider rounded-sm"
          >
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
}
