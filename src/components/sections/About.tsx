import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const ABOUT_CARDS = [
  {
    icon: '🔬',
    iconBg: 'bg-blue-50',
    title: 'Ciência Premium',
    desc: 'Fórmulas desenvolvidas com ingredientes botânicos e ativos científicos comprovados para máxima eficácia e resultados visíveis.',
  },
  {
    icon: '📱',
    iconBg: 'bg-gold-50',
    title: 'Tecnologia Inteligente',
    desc: 'Aplicativo que acompanha sua evolução capilar com gamificação, notificações personalizadas e comunidade engajada.',
  },
  {
    icon: '✨',
    iconBg: 'bg-purple-50',
    title: 'Experiência Premium',
    desc: 'Design minimalista, embalagens luxuosas e uma jornada de cuidado capilar totalmente personalizada para você.',
  },
] as const

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <Section
      id="sobre"
      title="Sobre a Bomb-Hair"
      subtitle="Nascemos da fusão entre a ciência dos ingredientes naturais e a inovação tecnológica para redefinir o cuidado capilar."
      className="bg-cream-400/30"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ABOUT_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Card variant="feature" className="h-full group">
              <div
                className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}
                role="img"
                aria-label={card.title}
              >
                {card.icon}
              </div>
              <h3 className="font-display text-h3 text-charcoal-800 mb-3 group-hover:text-gold-500 transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-sm text-charcoal-800/70 leading-relaxed">{card.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

