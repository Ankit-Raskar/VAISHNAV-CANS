import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="text-7xl font-black metallic-text mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
        >
          VAISHNAV CANS
        </div>
        <div className="text-amber-500/50 text-xs tracking-[0.3em] uppercase">
          I Can · You Can · We Can
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-0.5 bg-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-100"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="text-white/20 text-xs mt-3 tracking-widest">
        {Math.min(Math.round(progress), 100)}%
      </div>

      {/* Spinning ring */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 rounded-full border border-amber-500/5 animate-spin-slow" />
        <div
          className="absolute w-80 h-80 rounded-full border border-amber-500/8"
          style={{ animation: "rotate360 6s linear infinite reverse" }}
        />
      </div>
    </div>
  );
}
