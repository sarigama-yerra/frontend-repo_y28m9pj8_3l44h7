const Work = () => {
  const past = [
    "Real estate investing and masterminds",
    "Corporate aviation tech sales and enterprise deals",
    "Community building and experiential events",
  ];
  const now = [
    "AI strategy and implementation for entrepreneurs and mid‑market businesses",
    "Workshops and education on practical AI",
    "Exploratory projects and collaborations aligned with freedom, family, contribution",
  ];

  const collaborate = [
    "Bring me in as a fractional CAIO to help you adopt AI the right way",
    "Run a practical AI workshop for your team",
    "Partner on community or mastermind experiences",
    "Explore a real estate or tech project that aligns with our values",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">What I’ve done</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {past.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">What I’m doing now</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {now.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 p-6 bg-slate-50">
          <h4 className="text-lg font-semibold text-slate-900">Ways we can work together</h4>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-700">
            {collaborate.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
