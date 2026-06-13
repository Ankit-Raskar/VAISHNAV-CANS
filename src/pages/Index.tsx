import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/features/HeroSection";
import MarqueeSection from "@/components/features/MarqueeSection";
import ProductsSection from "@/components/features/ProductsSection";
import StatsSection from "@/components/features/StatsSection";
import AboutSection from "@/components/features/AboutSection";
import WhyUsSection from "@/components/features/WhyUsSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import ContactSection from "@/components/features/ContactSection";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/features/Loader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCursor } from "@/hooks/useCursor";

export default function Index() {
  useScrollReveal();
  useCursor();

  // Smooth scroll progress indicator
  useEffect(() => {
    const indicator = document.createElement("div");
    indicator.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, hsl(43,84%,47%), hsl(45,90%,65%));
      transform-origin: left; transform: scaleX(0); z-index: 9998;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(indicator);

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / total;
      indicator.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (document.body.contains(indicator)) document.body.removeChild(indicator);
    };
  }, []);

  return (
    <>
      <Loader />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProductsSection />
        <StatsSection />
        <AboutSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
