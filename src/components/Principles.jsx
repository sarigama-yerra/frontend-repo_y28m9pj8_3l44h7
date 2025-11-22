const Principles = () => {
  const principles = [
    {
      title: "Tell the truth, kindly but clearly",
      body:
        "Direct doesn’t mean harsh. I value honesty that helps us make better decisions and build trust.",
    },
    {
      title: "Build relationships that last decades",
      body:
        "I optimize for long‑term trust over short‑term gains. The best opportunities come from real friendships.",
    },
    {
      title: "Protect health and family first",
      body:
        "I cap work around 60 hours a week to protect my health and my relationships with Rebecca, family, and friends.",
    },
    {
      title: "Use technology to free humans, not replace them",
      body:
        "AI should remove busywork and create space for more meaningful, human work and connection.",
    },
    {
      title: "Be a student for life",
      body:
        "Curiosity compounds. I’m always learning and sharing what works in the real world.",
    },
    {
      title: "Lead with compassion and never give up",
      body:
        "Tough problems require soft hearts and persistent effort. Both matter.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Principles for work and life</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
              <h4 className="font-semibold text-slate-900">{p.title}</h4>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
