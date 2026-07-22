import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/motion'
import { HeroMedia } from '@/components/sections/HeroMedia'

const ctaFocus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[70%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, color-mix(in oklch, var(--primary) 12%, transparent) 0%, color-mix(in oklch, var(--primary) 6%, transparent) 40%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                Sistema Operacional do Trabalho Jurídico
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight text-foreground"
            >
              Toda peça do seu escritório, com{' '}
              <span className="text-primary">SLA travado em contrato</span>:
              triagem em até 4h, minuta em até 48h.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-sm font-semibold text-primary tracking-tight"
            >
              Advogado comanda. IA executa. Pessoas cobrem o resto.
            </motion.p>

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-muted-foreground text-base leading-relaxed max-w-lg"
            >
              Petições, audiências e diligências entregues pelo{' '}
              <strong className="text-foreground font-semibold">
                time próprio de advogados e engenheiros jurídicos da EasyJur
              </strong>
              , integrado ao seu escritório e rastreável na plataforma, por{' '}
              <span className="text-primary font-semibold">até 80% menos</span>{' '}
              do que produzir dentro de casa. Você delega o operacional e volta
              a advogar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              data-own-cta
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'inline-flex items-center justify-center bg-primary text-white font-semibold px-7 py-3.5 rounded-lg text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25',
                  ctaFocus
                )}
              >
                Falar com especialista
              </motion.a>
              <motion.a
                href="#calculadora"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'inline-flex items-center justify-center border border-border text-foreground font-semibold px-7 py-3.5 rounded-lg text-sm hover:bg-muted transition-colors',
                  ctaFocus
                )}
              >
                Calcular quanto eu economizo
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center gap-1.5 pt-1"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden="true"
                  className={cn(
                    'w-4 h-4',
                    i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-200 text-amber-200'
                  )}
                />
              ))}
              <span className="text-sm font-semibold text-foreground ml-1">
                4,9 de 5 <span className="font-normal text-muted-foreground">em 1.000+ avaliações</span>
              </span>
            </motion.div>
          </div>

          {/* Right column — media */}
          <HeroMedia />
        </div>
      </div>
    </section>
  )
}
