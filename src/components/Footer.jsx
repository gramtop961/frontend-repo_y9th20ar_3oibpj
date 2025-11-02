import { Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    alert(`Thanks! We'll reach out to ${email}`);
    form.reset();
  };

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white text-2xl font-bold">Let’s build something fun</h3>
            <p className="text-white/70 mt-2 max-w-md">
              Business inquiries, publishing partnerships, or press—drop us a line and we’ll get back within 1–2 business days.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:hello@devello.co"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail className="w-4 h-4" /> hello@devello.co
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/5">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/5">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Your email
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
                <button
                  type="submit"
                  className="rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
                >
                  Contact us
                </button>
              </div>
              <p className="mt-2 text-xs text-white/60">We’ll only use your email to reply.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Devello Games. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#studio" className="hover:text-white">About</a>
            <a href="#games" className="hover:text-white">Games</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
