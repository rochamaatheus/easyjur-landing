import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EASE } from '@/lib/motion'

const plans = [
  {
    name: 'START',
    volume: '30 créditos / mês',
    price: 'R$ 1.800',
    note: null,
    description: 'Para começar a tirar o operacional das suas costas.',
    featured: false,
  },
  {
    name: 'PREMIUM',
    volume: '60 créditos / mês',
    price: 'R$ 3.000',
    note: null,
    description: 'Para o escritório que já delega e quer constância.',
    featured: false,
  },
  {
    name: 'STANDARD',
    volume: '120 créditos / mês',
    price: 'R$ 5.400',
    note: null,
    description: 'O melhor custo por crédito, escolha da maioria.',
    featured: true,
  },
  {
    name: 'GROWTH',
    volume: '200 créditos / mês',
    price: 'R$ 8.000',
    note: '+ setup no 1° mês',
    description: 'Para operações de alto volume que precisam de escala.',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header — centered */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Planos</span>
            <div className="w-6 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight max-w-lg">
            Escolha pelo volume. Cresça sem trocar de fornecedor.
          </h2>

          {/* Credit info box */}
          <div className="mt-2 bg-card border border-border rounded-xl px-6 py-4 max-w-lg text-sm text-center text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Cada crédito = uma demanda</span>
            {' '}(uma petição, uma audiência ou uma diligência). Você escolhe o volume de créditos e a operação
            acompanha o ritmo do seu escritório.
          </div>
        </div>

        {/* Pricing cards */}
        <div data-own-cta className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
              className={cn(
                'relative bg-card rounded-2xl border flex flex-col gap-5 overflow-hidden shadow-sm',
                plan.featured
                  ? 'order-first sm:order-none border-2 border-primary shadow-lg shadow-primary/10 pt-14 px-6 pb-6'
                  : 'border-border p-6'
              )}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-[10px] font-bold text-center px-4 py-3 leading-snug">
                  O mais escolhido · melhor custo por crédito
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-lg text-foreground">{plan.name}</span>
                <span className="text-xs text-muted-foreground">{plan.volume}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className={cn('text-4xl font-extrabold leading-none tracking-tight', plan.featured ? 'text-primary' : 'text-foreground')}>
                  {plan.price}
                </span>
                {plan.note && (
                  <span className="text-xs text-muted-foreground mt-1">{plan.note}</span>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{plan.description}</p>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'w-full inline-flex items-center justify-center font-semibold text-sm px-4 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20'
                    : 'border border-border text-foreground hover:bg-muted'
                )}
              >
                Falar com especialista
              </motion.a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
