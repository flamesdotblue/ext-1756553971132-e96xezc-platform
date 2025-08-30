import { useState } from 'react';
import { Clipboard, ClipboardCheck, TerminalSquare } from 'lucide-react';

const tabs = [
  {
    id: 'js',
    label: 'JavaScript',
    code: `// npm i @vanish/auth
import { vanish } from '@vanish/auth';

// 1 line to add biometric login
await vanish.login();

// get a signed user token
const token = await vanish.getToken();
// send token to your backend`,
  },
  {
    id: 'swift',
    label: 'iOS (Swift)',
    code: `import Vanish

// Present Face ID / Touch ID
let token = try await Vanish.login()
// Send token to your API`,
  },
  {
    id: 'kotlin',
    label: 'Android (Kotlin)',
    code: `import com.vanish.auth.Vanish

val token = Vanish.login(context)
// Post token to your backend`,
  },
];

export default function CodeSection() {
  const [active, setActive] = useState('js');
  const [copied, setCopied] = useState(false);

  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="code" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(16,185,129,0.18),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <TerminalSquare className="h-5 w-5 text-emerald-400" />
          <h2 className="text-xl tracking-tight text-white/90">Add biometrics in one line</h2>
        </div>
        <p className="mt-2 text-sm text-white/60 max-w-2xl">
          Standards-compliant WebAuthn under the hood. Use our SDKs or the REST API — your users get instant Face ID/Touch ID or platform passkeys.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-3 sm:px-4">
            <div className="flex gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`mt-2 inline-flex items-center rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                    active === t.id
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 py-2">
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <ClipboardCheck className="h-3.5 w-3.5 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Clipboard className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3 h-3 w-3 rounded-full bg-emerald-400 blur-md opacity-60" />
            <pre className="overflow-x-auto p-4 sm:p-6 text-sm leading-relaxed">
              <code>
                {activeTab.code}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Feature
            title="Invisible UX"
            desc="No passwords, no OTPs. One tap with Face ID, Touch ID, or passkeys."
          />
          <Feature
            title="Drop-in SDKs"
            desc="Web, iOS, Android, and Node. Keep your stack — we handle WebAuthn."
          />
          <Feature
            title="Zero secrets"
            desc="Public-key crypto end to end. Nothing sensitive stored on our side."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-white font-medium">{title}</div>
      <div className="mt-1 text-sm text-white/60">{desc}</div>
    </div>
  );
}
