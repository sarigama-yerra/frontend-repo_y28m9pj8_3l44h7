import { ArrowRight, UserRound } from "lucide-react";

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium mb-4">
              Victoria, BC • Canada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Mission‑driven entrepreneur helping people grow with AI, community, and real talk
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              I’m Steve Arneson — part operator, part community builder, always human. I mix real estate, AI, and
              meaningful relationships to build work and lives we’re proud of.
            </p>
            <p className="mt-3 text-slate-600">
              Currently “fun employed,” consulting on AI, building projects, and supporting masterminds and
              communities.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleScroll("contact")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm"
              >
                Connect with me <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll("about")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                My story <UserRound size={18} />
              </button>
            </div>
          </div>

          {/* Photo area */}
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
              <div className="h-full w-full grid place-items-center text-slate-400">
                <div className="text-center px-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4" />
                  <p className="text-sm">Headshot placeholder. Add a warm, approachable photo here.</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-28 h-28 rounded-xl bg-emerald-100 border border-emerald-200" />
            <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 rounded-xl bg-sky-100 border border-sky-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
