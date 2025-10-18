export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl h-16 px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">Kokoro</a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/#collection" className="hover:opacity-70 transition">Collection</a>
          <a href="/about" className="hover:opacity-70 transition">About</a>
          <a href="/journal" className="hover:opacity-70 transition">Journal</a>
          <a href="/contact" className="hover:opacity-70 transition">Contact</a>
        </nav>

        <a
          href="/notify"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
        >
          Notify me
        </a>
      </div>
    </header>
  );
}
