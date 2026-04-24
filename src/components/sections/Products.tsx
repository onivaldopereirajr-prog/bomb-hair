import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PRODUCTS } from '@/lib/utils'

export function Products() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <Section
      id="produtos"
      title="Nossos Produtos"
      subtitle="Fórmulas científicas com ingredientes botânicos para transformar sua rotina capilar."
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <Card variant="product" className="group h-full flex flex-col">
              <div className="relative h-64 bg-gradient-to-br from-gold-50 to-cream-400 flex items-center justify-center overflow-hidden">
                <span
                  className="text-8xl group-hover:scale-110 transition-transform duration-500"
                  role="img"
                  aria-label={product.name}
                >
                  {product.emoji}
                </span>
                <div className="absolute top-4 right-4 bg-gold-400 text-charcoal-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Premium
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="font-display text-h3 text-charcoal-800 group-hover:text-gold-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-gold-500 font-semibold uppercase tracking-widest mt-1">
                    {product.subtitle}
                  </p>
                </div>
                <p className="font-body text-sm text-charcoal-800/70 leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6 flex-1" aria-label={`Benefícios do ${product.name}`}>
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 font-body text-sm text-charcoal-800/80">
                      <Check size={16} className="text-gold-400 flex-shrink-0" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="md" className="w-full group/btn">
                  Saiba Mais
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

