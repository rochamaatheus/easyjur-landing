import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

const volumeOptions = [
  '1 a 10 peças/mês',
  '11 a 30 peças/mês',
  '31 a 60 peças/mês',
  '61 a 100 peças/mês',
  'Acima de 100 peças/mês',
]

/* O card do formulário é branco nos dois temas — cores fixas para não herdar tokens do dark */
const inputClass =
  'w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all'

const labelClass = 'text-sm font-medium text-slate-700'

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 sm:py-28 px-4 scroll-mt-20"
      style={{
        background:
          'radial-gradient(circle at 18% 42%, rgba(150,18,18,0.62) 0%, transparent 52%), radial-gradient(circle at 83% 75%, rgba(0,75,65,0.38) 0%, transparent 48%), var(--ink)',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              Comece agora
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.15]">
            Pare de contratar para dar conta do volume. Comece a delegar para uma rede ranqueada por desempenho.
          </h2>
          <p className="text-sm sm:text-base text-white/55 leading-relaxed">
            Em 5 minutos com um especialista, conte o volume do seu escritório e veja: quanto você economiza, qual plano cabe no seu ritmo e por que o prazo travado de 3 a 4 dias é contrato, não boa vontade. Sem aumentar a folha.
          </p>
          <p className="text-xs text-white/35 tracking-wide">
            Resposta rápida · sem compromisso · plano sob medida para o seu volume
          </p>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="mb-5">
            <h3 className="text-base font-bold text-slate-900">Falar com especialista</h3>
            <p className="text-sm text-slate-500 mt-1 leading-snug">
              Em 30 segundos, o especialista já chega sabendo o plano certo para o seu volume.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {/* Volume select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-volume" className={labelClass}>Volume mensal de demandas</label>
              <div className="relative">
                <select
                  id="cta-volume"
                  className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>Selecione a faixa</option>
                  {volumeOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-nome" className={labelClass}>Seu nome</label>
              <input id="cta-nome" type="text" autoComplete="name" placeholder="Nome completo" className={inputClass} />
            </div>

            {/* Escritório */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-escritorio" className={labelClass}>Escritório</label>
              <input id="cta-escritorio" type="text" autoComplete="organization" placeholder="Nome do escritório" className={inputClass} />
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-email" className={labelClass}>E-mail</label>
              <input id="cta-email" type="email" autoComplete="email" placeholder="voce@escritorio.com.br" className={inputClass} />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cta-whatsapp" className={labelClass}>WhatsApp</label>
              <input id="cta-whatsapp" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full mt-1 bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Falar com especialista
            </button>

            <p className="text-center text-[10px] text-slate-400 leading-relaxed">
              [INTEGRAÇÃO HubSpot: substituir este form pelo embed real · GTM dataLayer no submit]
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
