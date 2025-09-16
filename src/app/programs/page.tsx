import Banner from "../../components/Banner";
import Programs from "../../components/Programs";
import CTASection from "../../components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Programs page. It wraps the Programs component with a banner and ends
 * with a call‑to‑action. The Programs component lists the available
 * coaching options. Feel free to add more descriptive text here if
 * desired.
 */
export default function ProgramsPage() {
  return (
    <div className="bg-green-200">
        <Navbar />
      <section className="pt-20 lg:mx-8 xl:mx-10">
      <Banner
        title="Our Programs"
        subtitle="Tailored nutrition coaching to support your unique needs."
      />
      <Programs />
      <CTASection />
      </section>
     <Footer />
    </div>
  );
}