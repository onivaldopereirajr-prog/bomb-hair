import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ROADMAP } from '@/lib/utils'

export function Roadmap() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      title="Nossa Jornada"
      subtitle="Cada etapa é um passo rumo ao futuro do cuidado capilar inteligente."
      className="bg-cream-400/20"
    >
      <div ref={ref} className="relative">
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gold-200">
          <motion.div
            className="h-full bg-gold-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROADMAP.map((step, i) => (
            <motion.div
              key={step.quarter}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 shadow-md ${
                  step.status === 'current'
                    ? 'bg-gold-400 shadow-gold-md'
                    : step.status === 'upcoming'
                      ? 'bg-gold-100 border-2 border-gold-400'
                      : 'bg-gray-100 border-2 border-gray-200'
                }`}
              >
                <span role="img" aria-label={step.title}>
                  {step.icon}
                </span>
              </div>
              <span
                className={`font-body text-xs font-bold uppercase tracking-widest mb-2 ${
                  step.status === 'current' ? 'text-gold-500' : 'text-charcoal-800/50'
                }`}
              >
                {step.quarter}
              </span>
              <h4 className="font-display text-lg font-semibold text-charcoal-800 mb-2">{step.title}</h4>
              <p className="font-body text-sm text-charcoal-800/60 leading-relaxed">{step.description}</p>
              {step.status === 'current' && (
                <span className="mt-3 bg-gold-400/15 text-gold-600 text-xs font-semibold px-3 py-1 rounded-full border border-gold-300">
                  Em progresso
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

