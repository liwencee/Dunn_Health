import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/hero-slider";
import { StatsBar } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { ContactPreview } from "@/components/sections/contact-preview";

export const metadata: Metadata = {
  title: "Dunn Behavioral Health | Kingsland, GA – Compassionate Mental Health Care",
  description:
    "Dunn Behavioral Health in Kingsland, Georgia offers individual therapy, couples counseling, family therapy, and more. Evidence-based care. Telehealth available. Most insurance accepted.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <ContactPreview />
    </>
  );
}
