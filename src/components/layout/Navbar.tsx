import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Why Us", path: "/about#why-us" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#0f4a26] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-xs font-bold font-display">VC</span>
          </div>
          <span
            className={`font-display font-800 text-lg tracking-tight transition-colors duration-300 ${
              scrolled || !isHome ? "text-[#0f4a26]" : "text-white"
            }`}
            style={{ fontWeight: 800 }}
          >
            VAISHNAV CANS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium hover-underline transition-colors duration-300 ${
                scrolled || !isHome ? "text-[#0a2e1a] hover:text-[#0f4a26]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-glow bg-[#0f4a26] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0a2e1a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? "text-[#0a2e1a]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-black/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block py-2.5 text-[#0a2e1a] font-medium hover:text-[#0f4a26] hover:pl-2 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-3 bg-[#0f4a26] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0a2e1a] transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
