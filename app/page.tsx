import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="card overflow-hidden">
        <div className="grid md:grid-cols-5">
          <div className="p-8 md:col-span-2 flex flex-col justify-center gap-4">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl leading-tight">
              Crafted pieces for everyday ritual.
            </h1>
            <p className="text-neutral-600">
              Limited drops. Handmade. Sustainable. Quiet, elegant and functional.
            </p>
            <div className="flex gap-3">
              <a className="btn btn-primary" href="#collection">View Collection</a>
              <a className="btn btn-ghost" href="#about">About</a>
            </div>
          </div>
          <div className="relative md:col-span-3 h-[360px] md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop"
              alt="Kokoro hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur card p-4">
              <span className="badge mb-2">Drop 01</span>
              <p className="font-medium">Sample card</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="collection" className="space-y-8">
        <h3 className="font-[var(--font-playfair)] text-2xl">Featured</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=>(
            <article key={i} className="card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553532435-93d532a45f15?q=80&w=1400&auto=format&fit=crop"
                alt="featured"
                width={1400}
                height={900}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Body scrub coconut</h4>
                  <span className="text-sm text-neutral-600">€ 28</span>
                </div>
                <div className="mt-3 flex gap-3">
                  <span className="badge">Sage</span>
                  <span className="badge">Comfort</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
