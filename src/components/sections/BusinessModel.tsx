import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const PILLARS = [
  { icon: '🛒', title: 'Venda Direta', desc: 'Produtos premium vendidos diretamente ao consumidor, com kits e combos.' },
  { icon: '💎', title: 'Assinatura Premium', desc: 'Recursos avançados no app, comunidade exclusiva e benefícios recorrentes.' },
  { icon: '🤝', title: 'Parcerias', desc: 'Colaborações com salões, creators e marcas para expandir o ecossistema.' },
] as const

export function BusinessModel() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      title="Como Monetizamos"
      subtitle="Um modelo sustentável para escalar tecnologia, comunidade e produtos premium."
      className="bg-cream-400/20"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <Card className="h-full">
              <div className="text-3xl mb-4" role="img" aria-label={p.title}>
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal-800 mb-2">{p.title}</h3>
              <p className="font-body text-sm text-charcoal-800/70 leading-relaxed">{p.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

