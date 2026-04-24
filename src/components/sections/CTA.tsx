import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function CTA() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500"
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0 bg-shimmer-gold bg-[length:200%_100%] animate-shimmer opacity-50 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles size={48} className="text-charcoal-900/60" aria-hidden="true" />
          </div>
          <h2 id="cta-title" className="font-display text-h2 text-charcoal-900 mb-4">
            Pronto para Transformar Sua Rotina Capilar?
          </h2>
          <p className="font-body text-body text-charcoal-900/70 max-w-2xl mx-auto mb-10">
            Junte-se aos primeiros usuários que já estão vendo resultados reais com Bomb-Hair. Ciência, tecnologia e
            comunidade ao seu alcance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="gold"
              size="lg"
              className="bg-charcoal-900 text-white hover:bg-charcoal-800 border-0 shadow-lg"
            >
              <Download size={18} aria-hidden="true" />
              Baixar App Agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white"
            >
              Saiba Mais
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

