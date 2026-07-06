import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Assignee {
  initials: string
  name: string
  sla: string
}

interface DemandCard {
  title: string
  sub: string
  stars?: number
  people: Assignee[]
}

interface Column {
  label: string
  count: number
  accent: string // top border color
  countColor: string // header count + label color
}

const columns: (Column & { cards: DemandCard[] })[] = [
  {
    label: 'AGENDADO',
    count: 5,
    accent: 'before:bg-amber-400',
    countColor: 'text-amber-400',
    cards: [
      {
        title: 'Audiência · TRT-3 · Belo Horizonte',
        sub: 'agendada 28/05 · R$ 2.400',
        people: [
          { initials: 'CM', name: 'Camila', sla: '4h' },
          { initials: 'PS', name: 'Pedro', sla: '4h' },
        ],
      },
    ],
  },
  {
    label: 'EM EXECUÇÃO',
    count: 8,
    accent: 'before:bg-blue-400',
    countColor: 'text-blue-400',
    cards: [
      {
        title: 'Petição inicial · ação de cobrança',
        sub: 'R$ 138k · em análise',
        people: [{ initials: 'PS', name: 'Pedro', sla: '24h' }],
      },
      {
        title: 'Petição contestação · TJSP foro central',
        sub: 'docs originais',
        people: [{ initials: 'DR', name: 'Daniel', sla: '24h' }],
      },
    ],
  },
  {
    label: 'EM REVISÃO',
    count: 6,
    accent: 'before:bg-teal-400',
    countColor: 'text-teal-400',
    cards: [
      {
        title: 'Audiência · interior MG',
        sub: 'prestador 5 estrelas',
        stars: 5,
        people: [{ initials: 'DR', name: 'Daniel', sla: '24h' }],
      },
      {
        title: 'Sustentação oral · TJSP pleno',
        sub: 'parecer técnico em curso',
        people: [{ initials: 'JL', name: 'Júlia', sla: '24h' }],
      },
    ],
  },
  {
    label: 'CONCLUÍDO',
    count: 14,
    accent: 'before:bg-emerald-400',
    countColor: 'text-emerald-400',
    cards: [
      {
        title: 'Diligência presencial cartório · Certidão imóvel',
        sub: 'finalizado · hoje 14h',
        people: [{ initials: 'JL', name: 'Júlia', sla: 'agora' }],
      },
      {
        title: 'Conferência de prazos · semanal',
        sub: 'banca completa · 1.247 processos',
        people: [{ initials: 'CM', name: 'Camila', sla: 'agora' }],
      },
    ],
  },
]

function CardRow({ person }: { person: Assignee }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white/70 text-[9px] font-bold flex items-center justify-center"
        >
          {person.initials}
        </span>
        <span className="text-[11px] text-white/60 truncate">{person.name}</span>
      </div>
      <span className="flex-shrink-0 text-[10px] font-semibold text-emerald-400 tracking-wide">
        SLA · {person.sla}
      </span>
    </div>
  )
}

export function DemandPanel() {
  return (
    <div className="rounded-2xl border border-border shadow-md overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[10px] text-muted-foreground font-mono truncate">
          app.easyjur.com · demandas por estágio · esta semana
        </span>
      </div>

      {/* Dark kanban */}
      <div className="bg-ink p-3 sm:p-4 overflow-x-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 min-w-[520px] lg:min-w-0">
          {columns.map((col) => (
            <div key={col.label} className="flex flex-col gap-2">
              {/* Column header */}
              <div className="flex items-center justify-between px-1">
                <span className={cn('text-[10px] font-bold tracking-widest', col.countColor)}>
                  {col.label}
                </span>
                <span className="w-5 h-5 rounded-full bg-white/10 text-white/70 text-[10px] font-bold flex items-center justify-center">
                  {col.count}
                </span>
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-2">
                {col.cards.map((card) => (
                  <div
                    key={card.title}
                    className={cn(
                      'relative bg-white/[0.04] border border-white/10 rounded-lg p-3 flex flex-col gap-2.5 overflow-hidden',
                      'before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]',
                      col.accent
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-bold text-white leading-snug">{card.title}</p>
                      <p className="text-[10px] text-white/45 leading-snug">{card.sub}</p>
                      {card.stars ? (
                        <div className="flex items-center gap-0.5 mt-0.5" aria-label={`${card.stars} de 5 estrelas`}>
                          {Array.from({ length: card.stars }).map((_, i) => (
                            <Star key={i} aria-hidden="true" className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                      {card.people.map((p) => (
                        <CardRow key={p.initials + p.name} person={p} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
