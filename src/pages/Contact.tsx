import { useEffect, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import MarqueeStrip from "@/components/features/MarqueeStrip";

const productOptions = [
  "Round Tin Cans", "Rectangular Cans", "Conical Cans",
  "Paint Cans", "Food Grade Cans", "Chemical Drums", "Custom Design",
];

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", quantity: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Quote request received! We'll respond within 2 hours.");
    }, 1500);
  };

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
            Get In Touch
          </span>
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-none mb-4">
            Request a <span className="text-[#4ade80]">Quote</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Tell us your requirements and we'll get back to you with competitive pricing within 2 business hours.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      <section className="py-20 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="reveal">
                <h2 className="font-display font-extrabold text-2xl text-[#0a2e1a] mb-6">
                  Contact Info
                </h2>
              </div>
              {[
                { icon: Phone, label: "Phone", value: "+91 99999 88888", sub: "Mon–Sat, 9AM–6PM", color: "#0f4a26" },
                { icon: Mail, label: "Email", value: "info@vaishnavcans.com", sub: "We reply within 2 hours", color: "#e85a1e" },
                { icon: MapPin, label: "Factory", value: "Industrial Area, Ahmedabad", sub: "Gujarat, India — 380025", color: "#d4920a" },
                { icon: Clock, label: "Working Hours", value: "9:00 AM – 6:00 PM", sub: "Monday to Saturday", color: "#0f4a26" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="reveal card-hover bg-white rounded-2xl p-5 flex items-start gap-4 border border-black/5"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.color + "15" }}>
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-[#0a2e1a]/40 text-xs uppercase tracking-wider font-medium mb-0.5">{item.label}</div>
                      <div className="text-[#0a2e1a] font-semibold text-sm">{item.value}</div>
                      <div className="text-[#0a2e1a]/50 text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="reveal bg-white rounded-3xl p-8 lg:p-10 border border-black/5 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center scale-in">
                    <div className="w-20 h-20 bg-[#4ade80]/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-[#0f4a26]" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0a2e1a] mb-2">Quote Request Sent!</h3>
                    <p className="text-[#0a2e1a]/60 max-w-sm">
                      Thank you! Our team will get back to you within 2 business hours with competitive pricing.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-[#0f4a26] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#0a2e1a] transition-all duration-300 hover:scale-105"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-extrabold text-2xl text-[#0a2e1a] mb-6">
                      I CAN · YOU CAN · WE CAN
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Company *</label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company name"
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Product Type *</label>
                          <select
                            name="product"
                            required
                            value={form.product}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all bg-white"
                          >
                            <option value="">Select product</option>
                            {productOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Quantity *</label>
                          <input
                            type="text"
                            name="quantity"
                            required
                            value={form.quantity}
                            onChange={handleChange}
                            placeholder="e.g. 10,000 units"
                            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0a2e1a] mb-1.5">Additional Requirements</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about custom sizes, printing requirements, or any special needs..."
                          className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4a26]/40 focus:border-[#0f4a26] transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-glow w-full bg-[#0f4a26] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#0a2e1a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : "Send Quote Request"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
