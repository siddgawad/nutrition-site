import Banner from "../../components/Banner";
import Programs from "../../components/Programs";
import CTASection from "../../components/CTASection";
import Navbar from "@/components/Navbar";

/**
 * Programs page. It wraps the Programs component with a banner and ends
 * with a call‑to‑action. The Programs component lists the available
 * coaching options. Feel free to add more descriptive text here if
 * desired.
 */
export default function ProgramsPage() {
  return (
    <div>
        <Navbar />
      <Banner
        title="Our Programs"
        subtitle="Tailored nutrition coaching to support your unique needs."
      />
      <Programs />
      <CTASection />
    </div>
  );
}