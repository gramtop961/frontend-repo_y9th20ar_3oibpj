import { Rocket, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-violet-700/10 to-black" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
              <Rocket className="w-3.5 h-3.5" />
              Building mobile-first game worlds
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Playful worlds crafted by Devello Games
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl">
              We design and publish delightful mobile games that millions can enjoy anywhere. Fast, beautiful, and made with heart.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#games"
                className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
              >
                Explore our games
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">iOS & Android</span>
              </div>
              <div className="text-sm">No ads, fair play</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[9/16] rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/80 text-sm">Sneak peek of our latest mobile title</p>
                <div className="mt-2 h-2 w-32 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
