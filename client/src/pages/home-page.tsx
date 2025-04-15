import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import TargetSection from "@/components/sections/target-section";
import AboutSection from "@/components/sections/about-section";
import BenefitsSection from "@/components/sections/benefits-section";
import OutcomesSection from "@/components/sections/outcomes-section";
import PricingSection from "@/components/sections/pricing-section";
import WhyNowSection from "@/components/sections/why-now-section";
import ContactSection from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800">
      <Header />
      <main>
        <HeroSection />
        <TargetSection />
        <AboutSection />
        <BenefitsSection />
        <OutcomesSection />
        <PricingSection />
        <WhyNowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
