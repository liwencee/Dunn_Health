import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/hero-slider";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WellnessPreview } from "@/components/sections/wellness-preview";
import { CTASection } from "@/components/sections/cta";
import { ContactPreview } from "@/components/sections/contact-preview";

export const metadata: Metadata = {
  title: "Dunn Behavioral Health | Kingsland, GA – Compassionate Mental Health Care",
  description:
    "Dunn Behavioral Health in Kingsland, Georgia offers individual therapy, teen support, family therapy, and more. Evidence-based care. Telehealth available across GA. CareSource, Amerigroup & self-pay accepted.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <WellnessPreview />
      <CTASection />
      <ContactPreview />
    </>
  );
}
