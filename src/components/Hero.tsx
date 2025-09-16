// Option 1: Add margin and positioning like navbar
export default function Hero() {
    return (
      <section className="relative overflow-hidden bg-white/30 backdrop-blur-[2px] mx-6 mt-35 md:mx-8 2xl:mx-30 mb-6 rounded-2xl px-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
              Nutrition that adapts to{' '}
              <span className="text-green-800">you</span>.
            </h1>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Personalised plans for pregnancy, PCOS, and sustainable weight
              management—guided by evidence, designed for real life.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-green-800 px-5 py-3 text-white font-semibold hover:bg-green-700"
              >
                View Plans
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-xl border border-green-800 px-5 py-3 text-green-800 font-semibold hover:bg-green-100"
              >
                Explore Programs
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              * WhatsApp onboarding in 24 hours · Flexible meal styles · India &
              Global clients
            </div>
          </div>
          <div className="aspect-[4/3] md:aspect-square rounded-2xl bg-white/30 backdrop-blur-sm shadow-inner border border-white/20 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl">🥗</div>
              <p className="mt-3 text-sm text-slate-500">
                Add your brand photo here
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }