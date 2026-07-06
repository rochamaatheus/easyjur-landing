const logos = [
  { id: 1, label: 'LOGO 01' },
  { id: 2, label: 'LOGO 02' },
  { id: 3, label: 'LOGO 03' },
  { id: 4, label: 'LOGO 04' },
  { id: 5, label: 'LOGO 05' },
  { id: 6, label: 'LOGO 06' },
]

export function LogoStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-12 px-4">
      {/* Subtle teal glow top-left */}
      <div
        className="absolute top-0 left-0 w-72 h-48 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, oklch(0.88 0.08 185 / 0.35) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-foreground/40 uppercase text-center">
          Escritórios que já delegam a operação para a EasyJur
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center border border-border rounded-lg h-14 text-[11px] font-semibold tracking-widest text-foreground/25 uppercase select-none"
            >
              {logo.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
