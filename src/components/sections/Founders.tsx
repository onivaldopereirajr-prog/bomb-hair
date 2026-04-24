import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FOUNDERS } from '@/lib/utils'

export function Founders() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      id="fundadores"
      title="Fundadores"
      subtitle="As mentes por trás da revolução capilar."
      className="bg-gradient-to-br from-charcoal-800 to-charcoal-900"
      dark
    >
      <div ref={ref} className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
        {FOUNDERS.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex-1"
          >
            <Card variant="founder" className="bg-white/10 border-white/10 hover:border-gold-400 hover:bg-white/15">
              <div
                className={`w-20 h-20 rounded-full ${founder.color} flex items-center justify-center mx-auto mb-4 text-charcoal-900 font-display text-2xl font-bold shadow-gold-md`}
              >
                {founder.initials}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">{founder.name}</h3>
              <p className="font-body text-sm text-gold-400 font-semibold mb-3 tracking-wide uppercase">{founder.role}</p>
              <p className="font-body text-sm text-white/60 leading-relaxed">{founder.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

