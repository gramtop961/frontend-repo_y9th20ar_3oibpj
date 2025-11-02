import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesShowcase from './components/GamesShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <GamesShowcase />

        <section id="studio" className="relative py-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">About the studio</h2>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Devello Games is a mobile-first game studio focused on expressive design, fast gameplay, and player-friendly systems. We prototype quickly, iterate with our community, and ship experiences that feel great in your hands.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Performance focused</p>
                <p className="mt-1 text-white font-semibold">60 FPS on modern devices</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Player-first</p>
                <p className="mt-1 text-white font-semibold">Fair and accessible</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Global-ready</p>
                <p className="mt-1 text-white font-semibold">Localized experiences</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
