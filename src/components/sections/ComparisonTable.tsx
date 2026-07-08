import { Check, X } from 'lucide-react'

const tableRows = [
  {
    label: 'Custo por peça',
    internal: 'Salário + encargos + estrutura',
    outsource: 'Variável, sem previsibilidade',
    easyjur: 'Fixo e até 80% menor',
  },
  {
    label: 'Prazo',
    internal: 'Depende da agenda da equipe',
    outsource: '"Quando der"',
    easyjur: 'SLA travado 3 a 4 dias',
  },
  {
    label: 'Quem produz',
    internal: 'Seu time (e o limite dele)',
    outsource: 'Quem aparecer no WhatsApp',
    easyjur: 'Rede ranqueada, você vê o desempenho de cada um na plataforma',
  },
  {
    label: 'Controle',
    internal: 'Planilha e cobrança manual',
    outsource: 'Nenhum',
    easyjur: 'Rastreável na plataforma',
  },
  {
    label: 'Risco de contratação',
    internal: 'Alto (CLT, rescisão)',
    outsource: 'Você assume tudo',
    easyjur: 'Zero, é assinatura',
  },
  {
    label: 'Escala',
    internal: 'Contratar mais gente',
    outsource: 'Não escala',
    easyjur: 'Sobe junto com a sua demanda',
  },
]

export function ComparisonTable() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
        O veredito visual, lado a lado.
      </h2>

      {/* Desktop/tablet: tabela completa com as 3 colunas */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="border-b border-border">
              <th className="bg-card text-left p-4 font-medium text-muted-foreground w-[22%]" />
              <th className="bg-card text-left p-4 font-semibold text-foreground w-[26%]">
                Produção interna
              </th>
              <th className="bg-card text-left p-4 font-semibold text-foreground w-[26%]">
                Correspondente avulso (WhatsApp)
              </th>
              <th className="bg-primary text-left p-4 font-semibold text-white rounded-t-lg w-[26%]">
                EasyJur Legal Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr key={row.label} className={i < tableRows.length - 1 ? 'border-b border-border' : ''}>
                <td className="bg-card p-4 text-muted-foreground text-xs font-medium">{row.label}</td>
                <td className="bg-card p-4 text-muted-foreground text-xs">{row.internal}</td>
                <td className="bg-card p-4 text-muted-foreground text-xs">{row.outsource}</td>
                <td className="bg-emerald-50 p-4 text-emerald-800 text-xs font-medium">
                  <span className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 flex-shrink-0 mt-px" strokeWidth={2.5} aria-hidden="true" />
                    {row.easyjur}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: comparação dupla, lado a lado, sem a coluna de correspondente avulso */}
      <div className="sm:hidden rounded-2xl border border-border shadow-sm overflow-hidden">
        {/* Header fixo das duas colunas */}
        <div className="grid grid-cols-2">
          <div className="bg-muted text-center py-3 text-xs font-bold text-muted-foreground uppercase tracking-wide">
            Produção interna
          </div>
          <div className="bg-primary text-center py-3 text-xs font-bold text-white uppercase tracking-wide">
            EasyJur
          </div>
        </div>

        {tableRows.map((row, i) => (
          <div key={row.label} className={i < tableRows.length - 1 ? 'border-b border-border' : ''}>
            <div className="bg-card px-4 pt-3 pb-1 text-xs font-semibold text-foreground text-center">
              {row.label}
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 pt-2 flex items-start gap-1.5">
                <X className="w-3.5 h-3.5 flex-shrink-0 mt-px text-muted-foreground/50" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-xs text-muted-foreground leading-snug">{row.internal}</span>
              </div>
              <div className="p-4 pt-2 bg-emerald-50 flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 flex-shrink-0 mt-px text-emerald-600" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-xs text-emerald-800 font-medium leading-snug">{row.easyjur}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
