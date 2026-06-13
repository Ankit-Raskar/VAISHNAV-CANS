import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2e1a] text-white relative overflow-hidden">
      {/* Marquee top strip */}
      <div className="border-t border-white/10 border-b border-white/10 py-3 overflow-hidden bg-[#0f4a26]">
        <div className="marquee-track">
          {Array(8).fill("I CAN · YOU CAN · WE CAN · PREMIUM QUALITY · ISO CERTIFIED · SINCE 1999 · ").map((text, i) => (
            <span key={i} className="text-white/80 text-sm font-medium tracking-widest uppercase mx-6 whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold font-display">VC</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight">VAISHNAV CANS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              India's leading tin can manufacturer delivering premium quality packaging solutions since 1999. ISO 9001:2015 certified.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001:2015", "BIS Approved", "FSSAI Compliant"].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 font-medium border border-white/10">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Why Choose Us", path: "/about#why-us" },
                { label: "Get Quote", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone size={14} className="mt-0.5 text-[#4ade80] shrink-0" />
                <span>+91 99999 88888</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail size={14} className="mt-0.5 text-[#4ade80] shrink-0" />
                <span>info@vaishnavcans.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 text-[#4ade80] shrink-0" />
                <span>Industrial Area, Ahmedabad<br />Gujarat, India — 380025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2024 Vaishnav Cans Pvt. Ltd. All rights reserved.</p>
          <p className="text-white/40 text-xs">Partnering with India's best since 1999</p>
        </div>
      </div>
    </footer>
  );
}
