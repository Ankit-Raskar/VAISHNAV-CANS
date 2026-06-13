import { CATEGORIES } from "@/constants/data";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8" style={{ background: "hsl(20,10%,4%)" }}>
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center bg-amber-500/10">
                <span className="text-amber-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>V</span>
              </div>
              <div>
                <div className="text-white font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  <span className="text-amber-500">Vaishnav</span> Cans
                </div>
                <div className="text-amber-500/60 text-xs tracking-widest">PVT. LTD.</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              India's premium tin can manufacturer. Quality, precision, and reliability since 1999.
            </p>
            <div className="text-amber-500/70 text-sm font-light italic">
              "I Can · You Can · We Can"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 text-sm hover:text-amber-500 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5 border-b border-white/10 pb-3">
              Products
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollTo("#products")}
                    className="text-white/40 text-sm hover:text-amber-500 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5 border-b border-white/10 pb-3">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:+919999988888" className="flex gap-3 text-white/40 hover:text-amber-500 transition-colors duration-300 text-sm group">
                <Phone size={14} className="flex-shrink-0 mt-0.5 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                +91 99999 88888
              </a>
              <a href="mailto:info@vaishnavcans.com" className="flex gap-3 text-white/40 hover:text-amber-500 transition-colors duration-300 text-sm group">
                <Mail size={14} className="flex-shrink-0 mt-0.5 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                info@vaishnavcans.com
              </a>
              <div className="flex gap-3 text-white/40 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-amber-500/50" />
                Industrial Area, Ahmedabad, Gujarat - 380025
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Vaishnav Cans Pvt. Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 border border-white/10 text-white/30 text-xs uppercase tracking-widest hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
