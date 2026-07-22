export function Footer() {
  return (
    <footer className="bg-ink px-4 pt-10 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top: logo + links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pb-8">
          {/* Logo */}
          <div className="flex flex-col gap-1.5">
            <img
              src="./logo-easyjur-branco.svg"
              alt="EasyJur"
              width={147}
              height={32}
              className="h-8 w-auto self-start"
            />
            <div className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">Sistema Operacional do Trabalho Jurídico</div>
          </div>

          {/* Nav links */}
          <nav className="grid grid-cols-3 sm:flex sm:items-center sm:gap-8 gap-x-4">
            <a href="#" className="text-sm text-white/45 hover:text-white/70 transition-colors leading-snug">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-white/45 hover:text-white/70 transition-colors leading-snug">
              Política de Cookies
            </a>
            <a href="#cta" data-own-cta className="text-sm text-white/45 hover:text-white/70 transition-colors leading-snug">
              Falar com especialista
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Copyright */}
        <p className="text-center text-xs text-white/30 mt-6 leading-relaxed">
          © 2026 EasyJur. Todos os direitos reservados. · Mockup de referência, claims pendentes de validação.
        </p>
        <p className="text-center text-xs text-white/30 mt-1">
          CNPJ: 00.000.000/0000-00
        </p>

      </div>
    </footer>
  )
}
