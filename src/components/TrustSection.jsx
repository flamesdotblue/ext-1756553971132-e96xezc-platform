import { Shield, Lock, Fingerprint, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_20%_10%,rgba(99,102,241,0.18),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Built for trust</h3>
          <p className="mt-2 text-white/60 max-w-2xl mx-auto">
            Enterprise-grade security from day one. Meet compliance faster and protect your users with strong, phishing-resistant authentication.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<Shield className="h-5 w-5 text-emerald-400" />}
            title="WebAuthn & FIDO2"
            desc="Standards-based, passkey-native authentication."
          />
          <Card
            icon={<Lock className="h-5 w-5 text-blue-400" />}
            title="End-to-end integrity"
            desc="Public-key crypto with attestation and challenge binding."
          />
          <Card
            icon={<Fingerprint className="h-5 w-5 text-purple-400" />}
            title="Biometrics on device"
            desc="Keys live in the Secure Enclave/TPM — never leave the device."
          />
          <Card
            icon={<CheckCircle className="h-5 w-5 text-amber-400" />}
            title="SOC 2-ready"
            desc="Controls aligned with SOC 2. Pen tests and reports on request."
          />
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <div className="flex items-center gap-4 text-white/70">
              <Badge>WebAuthn</Badge>
              <Badge>Passkeys</Badge>
              <Badge>FIDO2</Badge>
              <Badge>GDPR</Badge>
            </div>
            <div className="text-white/60">
              Uptime: <span className="text-emerald-400 font-medium">99.99%</span> • Average auth time: <span className="text-emerald-400 font-medium">~180ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4">
      <div className="flex items-center gap-2">
        {icon}
        <div className="font-medium text-white">{title}</div>
      </div>
      <p className="mt-2 text-sm text-white/60">{desc}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}
