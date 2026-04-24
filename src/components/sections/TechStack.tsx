import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { TECH_STACK } from '@/lib/utils'

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      title="Tecnologia que Potencializa"
      subtitle="Stack moderno e robusto para entregar performance, escalabilidade e excelente experiência."
    >
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_STACK.map((stack, i) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div
              className={`rounded-2xl border p-6 hover:shadow-card-hover hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 ${stack.color}`}
            >
              <span className="text-4xl mb-4 block" role="img" aria-label={stack.category}>
                {stack.icon}
              </span>
              <h3 className="font-display text-lg font-bold text-charcoal-800 mb-3">{stack.category}</h3>
              <ul className="space-y-1.5">
                {stack.items.map((item) => (
                  <li key={item} className="font-body text-sm text-charcoal-800/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

