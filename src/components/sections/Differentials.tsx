import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const DIFFERENTIALS = [
  { icon: '🔗', title: 'Ecossistema Integrado', desc: 'Produtos + app trabalhando juntos para maximizar resultados.' },
  { icon: '✅', title: 'Verificação de Autenticidade', desc: 'Segurança e rastreabilidade com validação inteligente.' },
  { icon: '🏆', title: 'Gamificação Completa', desc: 'Pontos, badges e desafios para manter sua consistência.' },
  { icon: '🤖', title: 'IA Personalizada', desc: 'Rotinas e recomendações adaptadas ao seu perfil capilar.' },
  { icon: '🌍', title: 'Comunidade Global', desc: 'Conexão, apoio e evolução compartilhada com outros usuários.' },
] as const

export function Differentials() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      title="Por Que Bomb-Hair?"
      subtitle="Um ecossistema completo que combina ciência, tecnologia e comunidade para acelerar sua evolução."
      className="bg-white"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {DIFFERENTIALS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <div>
                  <p className="font-display font-semibold text-charcoal-800">{item.title}</p>
                  <p className="font-body text-sm text-charcoal-800/70 mt-1">{item.desc}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

