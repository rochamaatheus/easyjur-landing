import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE } from '@/lib/motion'

const faqs = [
  {
    q: 'Como vocês conseguem cravar prazo de peça se o resto do mercado não consegue?',
    a: 'Nosso painel define SLA por tipo de peça e distribui automaticamente para advogados verificados com histórico de entrega. Monitoramos em tempo real e acionamos backup se algum prazo estiver em risco, antes de você perceber.',
  },
  {
    q: 'Quem produz as minhas peças?',
    a: 'Advogados com OAB ativa, perfil verificado e avaliação baseada em histórico de entregas na plataforma. Você acompanha o responsável por cada pedido e pode avaliar a entrega.',
  },
  {
    q: 'E a qualidade?',
    a: 'Cada peça passa por checklist de qualidade antes de chegar até você. Se não estiver no seu padrão, refazemos sem custo adicional. Sua assinatura, nossa responsabilidade de entrega.',
  },
  {
    q: 'Quanto eu economizo de verdade?',
    a: 'Até 80% por peça frente ao custo de produzir internamente (salário, encargos e estrutura de um advogado CLT). Use a calculadora acima com os seus números reais para ver a diferença no seu contexto.',
  },
  {
    q: 'E se meu volume crescer?',
    a: 'Upgrade de plano a qualquer momento, sem fila de espera. Nossa rede de advogados escala com a sua demanda — você não fica limitado por headcount interno.',
  },
  {
    q: 'Como vejo o andamento?',
    a: 'Em tempo real pelo painel de Legal Operations. Status de cada pedido, prazo estimado, responsável e histórico completo de entregas, tudo em um lugar, sem precisar cobrar ninguém no WhatsApp.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-background py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              Dúvidas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Perguntas que todo sócio faz antes de delegar.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm sm:text-base font-medium text-foreground leading-snug">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="flex items-center justify-center"
                    >
                      <Plus className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} aria-hidden="true" />
                    </motion.div>
                  </div>
                </button>

                {/* Painel: anima grid-template-rows (0fr → 1fr), sem reflow de height */}
                <motion.div
                  id={panelId}
                  role="region"
                  initial={false}
                  animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  style={{ display: 'grid' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
