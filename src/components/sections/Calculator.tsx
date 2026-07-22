import { useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { ComparisonTable } from '@/components/sections/ComparisonTable'

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

function SliderField({
  label,
  min,
  max,
  value,
  onChange,
  formatValue,
  formatMin,
  formatMax,
}: {
  label: string
  min: number
  max: number
  value: number
  onChange: (v: number) => void
  formatValue: (v: number) => string
  formatMin: string
  formatMax: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-foreground/80 leading-snug max-w-[75%]">{label}</span>
        <span className="text-sm font-bold text-primary">{formatValue(value)}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          aria-valuetext={formatValue(value)}
          className="slider-primary w-full"
          style={{
            background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`,
          }}
        />
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-muted-foreground">{formatMin}</span>
          <span className="text-[10px] text-muted-foreground">{formatMax}</span>
        </div>
      </div>
    </div>
  )
}

export function Calculator() {
  const [demands, setDemands] = useState(40)
  const [costPerPiece, setCostPerPiece] = useState(350)

  const totalInternal = demands * costPerPiece
  const savingsHigh = Math.round(totalInternal * 0.8)
  const suggestedPlan =
    demands <= 30 ? 'START' : demands <= 60 ? 'PREMIUM' : demands <= 120 ? 'STANDARD' : 'GROWTH'

  return (
    <section className="bg-background py-16 px-4 scroll-mt-20" id="calculadora">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Calculator */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Faça a conta</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight max-w-xl">
              Faça a conta. A produção interna é o seu maior custo invisível.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm grid grid-cols-1 sm:grid-cols-2"
          >
            {/* Left — sliders */}
            <div className="bg-card p-7 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base text-foreground">Quanto você economiza?</h3>
                <p className="text-xs text-muted-foreground">Mova os controles e veja a economia ao vivo.</p>
              </div>
              <SliderField
                label="Quantas demandas seu escritório produz por mês?"
                min={10}
                max={200}
                value={demands}
                onChange={setDemands}
                formatValue={(v) => String(v)}
                formatMin="10"
                formatMax="200"
              />
              <SliderField
                label="Quanto você gasta hoje, em média, por peça?"
                min={80}
                max={900}
                value={costPerPiece}
                onChange={setCostPerPiece}
                formatValue={(v) => `R$ ${v}`}
                formatMin="R$ 80"
                formatMax="R$ 900"
              />
            </div>

            {/* Right — result */}
            <div className="bg-ink-soft p-7 flex flex-col gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-xs text-white/50">Com esse volume, você economiza até</p>
                <p
                  aria-live="polite"
                  className="text-3xl sm:text-4xl font-extrabold text-emerald-400 leading-tight"
                >
                  {formatBRL(savingsHigh)} / mês
                </p>
                <p className="text-xs text-white/50">comparado a produzir as mesmas peças dentro de casa.</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-white/70">
                  E o plano certo para você é o{' '}
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">
                    {suggestedPlan}
                  </span>
                </p>
                <motion.a
                  href="#cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center bg-primary text-white font-semibold px-5 py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-soft"
                >
                  Falar com especialista e travar meu plano →
                </motion.a>
                <p className="text-[10px] text-white/30 leading-relaxed">
                  Estimativa com base na economia de até 80% por peça frente à produção interna. Base de
                  comparação: um advogado júnior CLT produzindo o mesmo volume. O número exato é confirmado
                  com o especialista.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison table */}
        <ComparisonTable />

      </div>
    </section>
  )
}
