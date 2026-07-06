import { motion } from 'framer-motion'
import { ClipboardList, Target, Timer, TrendingDown } from 'lucide-react'
import { EASE } from '@/lib/motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as number },
  transition: { duration: 0.45, delay, ease: EASE },
})

const steps = [
  {
    n: 1,
    title: 'Você delega',
    body: 'Abre a demanda na plataforma e anexa as orientações. Leva minutos.',
  },
  {
    n: 2,
    title: 'A rede produz',
    body: 'A demanda vai para os advogados mais bem ranqueados naquele tipo de peça. Você acompanha o status em tempo real.',
  },
  {
    n: 3,
    title: 'Você recebe no prazo travado',
    body: 'A peça chega em 3 a 4 dias, no padrão do seu escritório. Se atrasar, o crédito volta.',
  },
]

export function Solution() {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">A Solução</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Não é correspondente avulso. É a sua operação jurídica inteira, só que você não precisa contratá-la.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Como a EasyJur entrega 100% das demandas no prazo? Pelo{' '}
            <strong className="text-foreground">Ranqueamento por Desempenho</strong>: cada peça vai para o
            advogado com a melhor nota naquele tipo de demanda. É por isso que o prazo é contrato, não promessa.
          </p>
        </div>

        {/* Mechanism cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Card 01 */}
          <motion.div {...fadeUp(0)} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/10 select-none leading-none">01</span>
            <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base text-foreground leading-snug pr-10">Ranqueamento por Desempenho</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sua peça não vai para quem está livre. Vai para o advogado com a melhor nota naquele tipo de
                demanda, medida pela qualidade e pontualidade das entregas anteriores.
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div {...fadeUp(0.08)} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/10 select-none leading-none">02</span>
            <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <Timer className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base text-foreground leading-snug pr-10">
                SLA travado de 3 a 4 dias
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada tipo de peça tem um prazo medido em +200.000 entregas. Sempre há mais de um profissional
                habilitado na fila: se um trava, outro assume, sem reiniciar o relógio.{' '}
                <strong className="text-foreground">Se atrasar, o crédito volta para você.</strong>
              </p>
            </div>
          </motion.div>

          {/* Card 03 */}
          <motion.div {...fadeUp(0.16)} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/10 select-none leading-none">03</span>
            <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base text-foreground leading-snug pr-10">Tudo rastreável na plataforma</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada demanda tem status, responsável e histórico. O prazo é monitorado demanda por demanda, em
                tempo real, não no fim do mês.
              </p>
            </div>
          </motion.div>

          {/* Card 04 — full-width */}
          <motion.div {...fadeUp(0.24)} className="sm:col-span-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 relative overflow-hidden">
            <span className="absolute top-4 right-5 text-5xl font-extrabold text-emerald-600/10 select-none leading-none">04</span>
            <div className="flex flex-col gap-1 sm:w-40 flex-shrink-0">
              <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
              </div>
              <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight mt-2">até<br />80%</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base text-emerald-900 dark:text-emerald-100 leading-snug pr-10">
                Até 80% mais barato que produzir internamente
              </h3>
              <p className="text-sm text-emerald-800/80 dark:text-emerald-200/70 leading-relaxed">
                A operação de um escritório grande, pelo custo que cabe no caixa do seu. Sem folha, sem encargos,
                sem rescisão.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Como funciona — 3 passos */}
        <div className="flex flex-col gap-6 pt-2">
          <motion.h3
            {...fadeUp(0)}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            Da demanda à peça pronta, sem você sair da cadeira.
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.07)} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.n}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-bold text-sm text-foreground leading-snug">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-7 py-3.5 rounded-lg text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Falar com especialista
            </motion.a>
            <span className="text-xs text-muted-foreground">em minutos você está delegando</span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
