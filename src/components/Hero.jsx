import { Github, Rocket, ShieldCheck } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              FIDO2 + WebAuthn • SOC 2 in progress
            </div>
            <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Ship passwordless, biometric logins in one line. Fast to add, invisible to users, secure by default.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#code"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <Rocket className="h-4 w-4" />
                Get started in 30s
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <Github className="h-4 w-4" />
                View SDKs
              </a>
            </div>

            <form id="waitlist" className="mt-8 flex w-full max-w-lg gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-white/20"
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-400 hover:to-indigo-400"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget.closest('form');
                  const input = form?.querySelector('input[type="email"]');
                  if (input && input.value) {
                    alert('Thanks! We\'ll be in touch soon.');
                    input.value = '';
                  }
                }}
              >
                Join waitlist
              </button>
            </form>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
