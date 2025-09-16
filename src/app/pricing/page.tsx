import Banner from "../../components/Banner";
import Pricing from "../../components/Pricing";
import CTASection from "../../components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="bg-green-200">
        <Navbar />
        <section className="pt-20 lg:mx-8 xl:mx-10">
        <Banner
        title="Plans & Pricing"
        subtitle="Flexible, transparent pricing for every stage of your journey."
      />
      <Pricing />
      <CTASection />
          </section>
          <Footer />
    </div>
  );
}