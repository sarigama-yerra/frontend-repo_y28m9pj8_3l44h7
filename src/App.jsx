import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Work from "./components/Work";
import Personal from "./components/Personal";
import Principles from "./components/Principles";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-semibold">Steve Arneson</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="work"><Work /></div>
        <About />
        <Values />
        <Personal />
        <Principles />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6">
          <p>Short bio: I’m a mission‑driven entrepreneur and community builder exploring AI, investing, and meaningful work. Based in Victoria, BC.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
