import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  product: z.string().min(1, "Please select a product type"),
  quantity: z.string().min(1, "Please enter quantity"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+91 99999 88888", sub: "Mon–Sat, 9AM–6PM" },
  { icon: Mail, label: "Email", value: "info@vaishnavcans.com", sub: "We reply within 2 hours" },
  { icon: MapPin, label: "Factory", value: "Industrial Area, Ahmedabad", sub: "Gujarat, India — 380025" },
  { icon: Clock, label: "Working Hours", value: "9:00 AM – 6:00 PM", sub: "Monday to Saturday" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    toast.success("Quote request sent! We'll contact you within 2 hours.");
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsla(43,84%,47%,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsla(43,84%,47%,0.2) 0%, transparent 50%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal reveal-up reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Get In Touch
          </div>
          <h2
            className="reveal reveal-up reveal-delay-2 text-6xl sm:text-7xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            REQUEST A{" "}
            <span className="metallic-text">QUOTE</span>
          </h2>
          <p className="reveal reveal-up reveal-delay-3 text-white/50 text-lg max-w-xl mx-auto">
            Tell us your requirements and we'll get back to you with competitive pricing within 2 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal reveal-left">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="flex gap-4 p-5 border border-white/10 hover:border-amber-500/30 transition-colors duration-300 group"
                style={{ background: "hsl(20,10%,6%)" }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 rounded-sm flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <info.icon size={18} className="text-amber-500" />
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-white font-semibold text-sm">{info.value}</div>
                  <div className="text-white/40 text-xs">{info.sub}</div>
                </div>
              </div>
            ))}

            {/* Tagline block */}
            <div className="p-6 border border-amber-500/20 bg-amber-500/5">
              <p
                className="text-2xl font-black text-amber-500 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                I CAN · YOU CAN · WE CAN
              </p>
              <p className="text-white/40 text-sm mt-2">
                Partnering with India's best since 1999.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal reveal-right">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full p-12 text-center border border-amber-500/30 bg-amber-500/5">
                <CheckCircle2 size={56} className="text-amber-500 mb-6 animate-bounce" />
                <h3
                  className="text-4xl font-black text-white mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  QUOTE REQUEST SENT!
                </h3>
                <p className="text-white/60 mb-8">Our team will contact you within 2 business hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 border border-amber-500 text-amber-500 font-semibold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  {/* Company */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Company *</label>
                    <input
                      {...register("company")}
                      className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300"
                      placeholder="Your company"
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300"
                      placeholder="email@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Phone *</label>
                    <input
                      {...register("phone")}
                      className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Product */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Product Type *</label>
                    <select
                      {...register("product")}
                      className="w-full bg-[hsl(20,10%,6%)] border border-white/10 focus:border-amber-500 text-white px-4 py-3 text-sm outline-none transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select product</option>
                      <option value="round">Round Tin Cans</option>
                      <option value="rectangular">Rectangular Cans</option>
                      <option value="conical">Conical Cans</option>
                      <option value="paint">Paint Cans</option>
                      <option value="food">Food Grade Cans</option>
                      <option value="chemical">Chemical Drums</option>
                      <option value="custom">Custom Design</option>
                    </select>
                    {errors.product && <p className="text-red-400 text-xs mt-1">{errors.product.message}</p>}
                  </div>
                  {/* Quantity */}
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Quantity *</label>
                    <input
                      {...register("quantity")}
                      className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300"
                      placeholder="e.g. 10,000 units"
                    />
                    {errors.quantity && <p className="text-red-400 text-xs mt-1">{errors.quantity.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Additional Requirements</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 focus:border-amber-500 text-white placeholder:text-white/20 px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none"
                    placeholder="Describe your specific requirements, sizes, printing needs, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 py-4 bg-amber-500 text-black font-bold text-base uppercase tracking-widest hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Quote Request
                      <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
