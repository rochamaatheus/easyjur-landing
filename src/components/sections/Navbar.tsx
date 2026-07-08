import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

/* No mobile a barra fixa some (vira menu "raso"); um FAB cobre a ação de CTA,
   escondendo-se sempre que a seção visível já tem seu próprio botão. */
function MobileFab() {
  const [hasVisibleCta, setHasVisibleCta] = useState(false)

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-own-cta]'))
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        })
        setHasVisibleCta(visible.size > 0)
      },
      { rootMargin: '0px', threshold: 0 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sm:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center px-5 pointer-events-none">
      <AnimatePresence>
        {!hasVisibleCta && (
          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: EASE }}
            whileTap={{ scale: 0.97 }}
            className="pointer-events-auto w-full max-w-sm text-center bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-xl shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Falar com especialista
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  return (
    <>
      <header className="hidden sm:block sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" aria-label="EasyJur, Legal Operations, voltar ao topo" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <img
                src="./logo-easyjur.svg"
                alt="EasyJur"
                width={129}
                height={28}
                className="h-7 w-auto"
              />
              <span className="hidden sm:inline-block border-l border-border pl-3 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Legal Operations
              </span>
            </a>

            <div className="flex items-center gap-3">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Falar com especialista
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      <MobileFab />
    </>
  )
}
