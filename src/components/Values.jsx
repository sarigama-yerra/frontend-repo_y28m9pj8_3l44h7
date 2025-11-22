const Values = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">How I try to live each day</h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Run twice a week to clear my head and take care of my body.</li>
              <li>• Stay social and close to my people — Rebecca, family, and friends.</li>
              <li>• Stack small wins every day that make life happier and healthier.</li>
              <li>• Keep learning about what I’m genuinely curious about.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-slate-900">Core values</h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Intentional + moral high ground",
                  body:
                    "Every action is on purpose and aligned with what’s right, even when it’s inconvenient.",
                },
                {
                  title: "The Golden Rule",
                  body: "Treat people how you want to be treated. Simple, not easy.",
                },
                {
                  title: "Compassion + grit",
                  body: "Lead with kindness and never give up on what matters.",
                },
                {
                  title: "Gratitude daily",
                  body: "Live with a smile. There’s always something good in front of us.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h5 className="font-semibold text-slate-900">{card.title}</h5>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
