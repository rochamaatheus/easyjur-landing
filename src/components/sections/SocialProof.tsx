import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { DemandPanel } from '@/components/sections/DemandPanel'

function TestimonialSkeleton() {
  return (
    <div className="relative bg-white border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-sm overflow-hidden">
      {/* Lock badge */}
      <div className="absolute top-3 right-3 bg-slate-100 text-slate-400 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
        bloqueado até depoimento real
      </div>

      {/* Quote mark */}
      <span className="text-4xl font-serif text-slate-200 leading-none select-none mt-1">"</span>

      {/* Skeleton lines */}
      <div className="flex flex-col gap-2 mt-1">
        <div className="h-2.5 bg-slate-100 rounded-full w-full" />
        <div className="h-2.5 bg-slate-100 rounded-full w-5/6" />
        <div className="h-2.5 bg-slate-100 rounded-full w-4/5" />
        <div className="h-2.5 bg-slate-100 rounded-full w-3/4" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mt-2 pt-3 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-slate-300" />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-2 bg-slate-100 rounded-full w-2/3" />
          <div className="h-2 bg-slate-100 rounded-full w-1/2" />
        </div>
      </div>
      <p className="text-[10px] text-slate-300 italic -mt-2">
        [FOTO depoente, bloqueado · nome/cargo/escritório/OAB reais]
      </p>
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Prova Social</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight max-w-2xl">
            Os escritórios que pararam de contratar para dar conta do volume.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
            >
              <TestimonialSkeleton />
            </motion.div>
          ))}
        </div>

        {/* Demand panel proof */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col gap-2 max-w-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight">
              Enquanto coletamos os depoimentos, mostramos o que já existe e é verificável.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O painel abaixo é a operação real de um escritório cliente esta semana, com nomes anonimizados.
              Não é mockup de marketing: é cada demanda por estágio, com responsável e SLA.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <DemandPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
