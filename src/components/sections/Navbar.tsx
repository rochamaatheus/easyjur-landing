import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* storage indisponível (ex.: modo privado) — o tema só não persiste */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" aria-label="EasyJur — Legal Operations, voltar ao topo" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <img
              src="./logo-easyjur.svg"
              alt="EasyJur"
              width={129}
              height={28}
              className="h-7 w-auto dark:hidden"
            />
            <img
              src="./logo-easyjur-branco.svg"
              alt="EasyJur"
              width={129}
              height={28}
              className="h-7 w-auto hidden dark:block"
            />
            <span className="hidden sm:inline-block border-l border-border pl-3 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              Legal Operations
            </span>
          </a>

          <div className="flex items-center gap-3">
            <ThemeToggle />
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
  )
}
