import { Gamepad2, Smartphone, Star } from 'lucide-react';

const games = [
  {
    title: 'Sky Dash',
    description: 'Arcade runner with fluid controls and vibrant worlds.',
    color: 'from-sky-500/30 to-cyan-400/20',
  },
  {
    title: 'Puzzle Bloom',
    description: 'Relaxing logic puzzles that grow with you.',
    color: 'from-emerald-500/30 to-lime-400/20',
  },
  {
    title: 'Neon Drift',
    description: 'High-speed racing with synthwave vibes.',
    color: 'from-fuchsia-500/30 to-violet-500/20',
  },
];

function GameCard({ title, description, color }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-black/40 border border-white/10">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Smartphone className="w-4 h-4" />
            <span className="text-xs">iOS • Android</span>
          </div>
        </div>
        <p className="mt-3 text-white/70 text-sm">{description}</p>
        <div className="mt-5 flex items-center gap-1 text-amber-300">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4" />
          <span className="ml-2 text-xs text-white/70">4.0</span>
        </div>
      </div>
    </div>
  );
}

export default function GamesShowcase() {
  return (
    <section id="games" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-600/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured games</h2>
            <p className="text-white/70 mt-1 text-sm sm:text-base">A snapshot of what we build for players on the go.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white/90 hover:bg-white/10 text-sm">
            Work with us
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}
