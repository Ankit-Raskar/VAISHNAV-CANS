import { CheckCircle2, Award, Factory, Leaf } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";
import { CERTIFICATIONS } from "@/constants/data";

const VALUES = [
  {
    icon: Factory,
    title: "State-of-the-Art Manufacturing",
    desc: "Our modern facility is equipped with cutting-edge CNC machinery and automated production lines for unmatched precision.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    desc: "ISO 9001:2015 certified with strict multi-stage quality control ensuring every can meets international standards.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    desc: "We prioritize eco-friendly processes, using recyclable materials and minimizing waste throughout our manufacturing cycle.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: "hsl(20,10%,5%)" }}>
      {/* Decorative side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image with overlays */}
          <div className="relative reveal reveal-left">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={factoryImg}
                alt="Vaishnav Cans Factory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />

              {/* Gold frame accent */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-amber-500" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-amber-500" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 lg:right-8 glass border border-amber-500/30 p-6 rounded-sm">
              <div
                className="text-5xl font-black text-amber-500 mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                25+
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Years of Excellence</div>
              <div className="mt-3 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-4 h-1 bg-amber-500 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:pl-8">
            <div className="reveal reveal-right reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
              About Us
            </div>

            <h2
              className="reveal reveal-right reveal-delay-2 text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              CRAFTING{" "}
              <span className="metallic-text">EXCELLENCE</span>
              <br />
              SINCE 1999
            </h2>

            <p className="reveal reveal-right reveal-delay-3 text-white/60 text-lg leading-relaxed mb-6">
              Vaishnav Cans Pvt. Ltd. has been at the forefront of India's tin can manufacturing industry for over two decades. Founded with the vision of delivering superior packaging solutions, we have grown into a trusted partner for industries ranging from food processing to industrial chemicals.
            </p>

            <p className="reveal reveal-right reveal-delay-4 text-white/50 leading-relaxed mb-8">
              Our state-of-the-art facility in India combines traditional craftsmanship with modern automation to produce cans that meet the most demanding quality specifications. Every can that leaves our factory is a testament to our unwavering commitment to quality.
            </p>

            {/* Certifications */}
            <div className="reveal reveal-right reveal-delay-5 grid grid-cols-2 gap-3 mb-8">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className={`reveal reveal-right reveal-delay-${i + 3} flex gap-4 p-4 border border-white/10 hover:border-amber-500/30 transition-colors duration-300 group`}
                  style={{ background: "hsla(20,10%,8%,0.8)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 rounded-sm flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                    <v.icon size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{v.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
