import { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Devello Games</span>
          </a>

          <nav className="hidden md:flex items-center">
            {navLink('#games', 'Games')}
            {navLink('#studio', 'Studio')}
            {navLink('#contact', 'Contact')}
            <a
              href="#games"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition"
            >
              Explore
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-lg border border-white/10 bg-black/60">
              {navLink('#games', 'Games')}
              {navLink('#studio', 'Studio')}
              {navLink('#contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
