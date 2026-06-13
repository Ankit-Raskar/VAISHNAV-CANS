import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal bg-gradient-to-br from-[#0a2e1a] to-[#0f4a26] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4ade80]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-widest">Request a Quote</span>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mt-2 max-w-lg leading-tight">
                Ready to start your packaging project with us?
              </h2>
              <p className="text-white/60 mt-3 max-w-md">
                Tell us your requirements and we'll respond within 2 business hours with competitive pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:+919999988888"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center gap-2 bg-[#4ade80] text-[#0a2e1a] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#22c55e] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
