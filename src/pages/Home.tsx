import { useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import HeroSection from "@/components/features/HeroSection";
import MarqueeStrip from "@/components/features/MarqueeStrip";
import ProductCards from "@/components/features/ProductCards";
import QualityBanner from "@/components/features/QualityBanner";
import StatsSection from "@/components/features/StatsSection";
import WhyUsSection from "@/components/features/WhyUsSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import CtaBanner from "@/components/features/CtaBanner";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <ProductCards />
      <QualityBanner />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CtaBanner />
    </main>
  );
}
