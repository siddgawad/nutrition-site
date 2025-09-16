import Banner from "../../components/Banner";
import Navbar from "@/components/Navbar";


export default function AboutPage() {
    return (
      <div className="bg-green-200" >
           <Navbar />
        <div className="pt-20 lg:mx-8 xl:mx-10">
        <Banner
          title="About NutriWell"
          subtitle="The story of how we transformed our health and now help others do the same."
          // To use a background image, pass the `backgroundImage` prop with the
          // relative path to your image inside the public folder, e.g.
          // backgroundImage="/about-banner.jpg"
        />
        <div>
          <section className="bg-white/30 backdrop-blur-[2px] mx-6 mt-20 rounded-2xl px-10 py-20">
            <h2 className="text-2xl font-bold text-green-800 mb-4">A Normal Life</h2>
            <p className="text-slate-700 leading-relaxed">
              Not all health coaches have a history of clean eating and regular workouts.
              Some are shaped by years of eating junk food and a sedentary lifestyle. At
              NutriWell we were one of them. Like many, we gained weight after major
              life changes and struggled with the physical and mental consequences.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Instead of chasing fad diets, we adopted evidence‑based nutrition and
              lifestyle changes that worked within our constraints. The journey was hard
              at first but eventually became a habit—and it transformed our lives.
            </p>
          </section>
          <section className="bg-white/30 backdrop-blur-[2px] mx-6 mt-20 rounded-2xl px-10 py-20">
            <h2 className="text-2xl font-bold text-green-800 mb-4">The Turning Point</h2>
            <p className="text-slate-700 leading-relaxed">
              Health issues like PCOS and back pain forced us to confront the reality
              that we needed a sustainable approach. By focusing on balanced meals,
              joyful movement and mindful habits, we shed weight, improved our
              energy levels and rediscovered confidence.
            </p>
          </section>
          <section className="bg-white/30 backdrop-blur-[2px] mx-6 mt-20 rounded-2xl px-10 py-20">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              The NutriWell Mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We know the struggles of being busy and trying to prioritise health.
              NutriWell exists to guide women through their own journeys with
              personalised nutrition coaching, empathetic support and a science‑first
              mindset. Whether you are managing PCOS, preparing for pregnancy, or
              aiming for sustainable weight loss, we design plans that fit into
              your life.
            </p>
          </section>
        </div>
        </div>
      
      </div>
    );
  }