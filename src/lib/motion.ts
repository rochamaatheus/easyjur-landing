import type { Variants } from 'framer-motion'

/** Curva de easing padrão da landing page (cubic-bezier). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Fade + subida suave. Aceita `custom={index}` para stagger por item. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: EASE },
  }),
}
