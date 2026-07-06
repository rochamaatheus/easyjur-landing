import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const stats = [
  {
    value: '+200.000',
    label: 'peças jurídicas entregues',
    note: null as string | null,
    accent: 'border-t-primary',
    valueColor: 'text-foreground',
  },
  {
    value: '1.500',
    label: 'escritórios atendidos',
    note: null as string | null,
    accent: 'border-t-primary',
    valueColor: 'text-foreground',
  },
  {
    value: '100%',
    label: 'das demandas dentro do SLA de 3 a 4 dias',
    note: 'medido nas últimas 200.000 entregas',
    accent: 'border-t-emerald-500',
    valueColor: 'text-emerald-500',
  },
]

export function ProofStats() {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Prova</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Não é promessa. É histórico.
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            Números medidos na plataforma. Cada demanda é registrada e rastreável.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className={`bg-card rounded-xl border-t-[3px] border border-border shadow-sm p-6 flex flex-col gap-2 ${stat.accent}`}
            >
              <span className={`text-5xl font-extrabold leading-none tracking-tight ${stat.valueColor}`}>
                {stat.value}
              </span>
              <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
              {stat.note && (
                <p className="text-[11px] text-muted-foreground/60 italic">{stat.note}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
