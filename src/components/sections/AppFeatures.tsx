import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { APP_FEATURES } from '@/lib/utils'

export function AppFeatures() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      id="app"
      title="Recursos do Aplicativo"
      subtitle="Um ecossistema completo para transformar sua rotina capilar em uma experiência personalizada e gamificada."
      className="bg-cream-400/20"
    >
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {APP_FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="group h-full">
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block"
                role="img"
                aria-label={feature.title}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal-800 mb-2 group-hover:text-gold-500 transition-colors">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-charcoal-800/70 leading-relaxed">{feature.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

