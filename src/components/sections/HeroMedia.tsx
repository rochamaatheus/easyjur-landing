import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

const kanbanColumns = [
  {
    label: 'A RECEBER',
    count: 23,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    cards: ['Petição', 'Diligência', 'Audiência'],
    cardColor: 'bg-amber-100 text-amber-700',
  },
  {
    label: 'EM PRODUÇÃO',
    count: 57,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    cards: ['Petição', 'Contestação', 'Recurso'],
    cardColor: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'ENTREGUE',
    count: 39,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    cards: ['Petição', 'Diligência', 'Audiência'],
    cardColor: 'bg-emerald-100 text-emerald-700',
  },
]

export function HeroMedia() {
  return (
    <div className="flex flex-col gap-4 lg:pt-2">
      {/* Video / photo card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        className="relative rounded-2xl border border-border bg-card shadow-xl shadow-black/5 overflow-hidden"
      >
        {/* 100% no prazo badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-card border border-border rounded-xl px-3 py-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-foreground">100%</div>
            <div className="text-[10px] text-muted-foreground font-medium">no prazo</div>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center gap-2 min-h-[200px]">
          <div className="w-10 h-10 rounded-full bg-white/80 shadow flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-600 border-b-[6px] border-b-transparent ml-0.5" />
          </div>
          <p className="text-xs text-muted-foreground font-medium px-8 text-center">
            Vídeo 30 a 60s · autoplay mudo
          </p>
        </div>
      </motion.div>

      {/* Kanban card — oculto no mobile: pendente acesso à tela real ou vídeo para substituir por prova em formato mobile-friendly */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
        className="hidden sm:block rounded-2xl border border-border bg-card shadow-xl shadow-black/5 overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-muted/60">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] text-muted-foreground font-mono">
            app.easyjur.com · demandas
          </span>
        </div>

        <div className="p-3 grid grid-cols-3 gap-2">
          {kanbanColumns.map((col) => (
            <div key={col.label} className={cn('rounded-lg p-2', col.bg)}>
              <div className="flex items-center justify-between mb-2">
                <span className={cn('text-[9px] font-bold tracking-wide', col.color)}>
                  {col.label}
                </span>
                <span className={cn('text-[10px] font-bold', col.color)}>{col.count}</span>
              </div>
              <div className="flex flex-col gap-1">
                {col.cards.map((card) => (
                  <div
                    key={card}
                    className={cn(
                      'text-[9px] font-semibold px-1.5 py-1 rounded-md truncate',
                      col.cardColor
                    )}
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 pb-3">
          <p className="text-[10px] text-muted-foreground text-center">
            Operação real de um escritório cliente esta semana.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
