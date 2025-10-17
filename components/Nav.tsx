export default function Nav() {
  return (
    <header className="border-b border-neutral-200 bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <a href="/" className="font-[var(--font-playfair)] text-xl">Kokoro</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-primary text-xs" href="#notify">Notify me</a>
      </div>
    </header>
  );
}
