import Banner from "../../components/Banner";
import Pricing from "../../components/Pricing";
import CTASection from "../../components/CTASection";
import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <div>
        <Navbar />
      <Banner
        title="Plans & Pricing"
        subtitle="Flexible, transparent pricing for every stage of your journey."
      />
      <Pricing />
      <CTASection />
    </div>
  );
}