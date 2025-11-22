import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      // Simple demo: POST to a placeholder endpoint if backend set; otherwise simulate success
      const base = import.meta.env.VITE_BACKEND_URL;
      if (base) {
        const res = await fetch(`${base}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Network error");
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("Thanks for reaching out — I’ll get back to you soon.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again or email me on LinkedIn.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">If this resonates, let’s talk</h3>
          <p className="mt-2 text-slate-600">
            Reach out if you want to collaborate, talk AI or real estate, or you’re navigating your own identity shift
            and want a real conversation.
          </p>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors">
                Send
              </button>
              <div className="text-sm text-slate-600">
                <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <span className="mx-2">•</span>
                <a className="underline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
            {status && <p className="text-sm text-emerald-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
