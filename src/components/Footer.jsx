export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Vanish Labs, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-xs text-white/60">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
