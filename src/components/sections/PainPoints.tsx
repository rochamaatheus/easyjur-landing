import { motion } from 'framer-motion'
import { Banknote, CornerDownRight, Hourglass, TriangleAlert } from 'lucide-react'
import { EASE } from '@/lib/motion'

const cards = [
  {
    icon: Banknote,
    title: 'A folha te engole antes da primeira petição sair.',
    body: 'Um júnior CLT custa de R$ 6 a 8 mil por mês com encargos, férias e 13°, fixo, todo mês, chova ou faça sol. Se a contratação der errado, você ainda paga a rescisão.',
  },
  {
    icon: TriangleAlert,
    title: 'Um prazo perdido não custa um prazo, custa o cliente.',
    body: 'O correspondente avulso some no WhatsApp, atrasa, entrega fora do padrão. Mas quem responde pela perda não é ele. É o seu nome, na sua OAB, com o seu cliente.',
  },
  {
    icon: Hourglass,
    title: 'O dia inteiro some no operacional.',
    body: 'Enquanto você revisa peça e cobra diligência, ninguém está atendendo cliente, fechando contrato ou estudando tese.',
  },
]

export function PainPoints() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              A realidade de muitos escritórios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight max-w-xl">
            Você abriu um escritório para advogar. Não para virar gerente de produção.
          </h2>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <card.icon className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base text-foreground leading-snug">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex items-start gap-4"
        >
          <CornerDownRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-emerald-900 leading-relaxed font-medium">
            Agora imagine esse volume entregue no prazo, no seu padrão, sem um nome novo na folha,
            cada peça nas mãos do time próprio da EasyJur, não de um desconhecido do WhatsApp.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
