import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProofStats } from '@/components/sections/ProofStats'
import { PainPoints } from '@/components/sections/PainPoints'
import { Solution } from '@/components/sections/Solution'
import { Calculator } from '@/components/sections/Calculator'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      {/* LogoStrip oculto: sem logos de clientes (André: "não temos") — reativar quando houver marcas autorizadas */}
      <ProofStats />
      <PainPoints />
      <Solution />
      <Calculator />
      {/* SocialProof oculto: depoimentos ainda são skeletons "bloqueados" — reativar quando houver depoimentos reais (nome/OAB) */}
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
