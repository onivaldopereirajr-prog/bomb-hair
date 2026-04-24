import { motion, type Variants } from 'framer-motion'
import { ChevronDown, Droplets, Leaf, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
}

const floatingParticles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
}))

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero"
      aria-label="Seção principal Bomb-Hair"
    >
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-400/20 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-50/50 -translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 z-10">
            <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 bg-gold-50 text-gold-600 text-xs font-body font-semibold px-4 py-2 rounded-full border border-gold-200 uppercase tracking-widest">
                <Sparkles size={12} aria-hidden="true" />
                Beauty Tech Innovation · Fundada 2026
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-h1 text-charcoal-800 leading-tight"
            >
              A Ciência do{' '}
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
                Crescimento Capilar
              </span>
              , Potencializada pela{' '}
              <span className="relative">
                Tecnologia
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-gold-400 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="font-body text-body text-charcoal-800/70 max-w-lg leading-relaxed"
            >
              Conheça a <strong className="text-gold-500">Bomb-Hair</strong>: a primeira Beauty Tech que une cosméticos
              de alta performance a um aplicativo inteligente para transformar sua rotina capilar. Ciência. Tecnologia.
              Comunidade.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                variant="gold"
                size="lg"
                className="group"
                onClick={() => document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Descobrir os tratamentos Bomb-Hair"
              >
                Descobrir Tratamento
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" className="group" aria-label="Assistir demonstração do aplicativo">
                <Play size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                Assistir Demo
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8 pt-4 border-t border-gold-100"
            >
              {[
                { value: '2', label: 'Produtos Premium' },
                { value: '6', label: 'Recursos no App' },
                { value: '∞', label: 'Potencial de Crescimento' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-gold-400">{stat.value}</p>
                  <p className="font-body text-xs text-charcoal-800/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="relative flex items-center justify-center z-10"
            aria-label="Ilustração dos produtos Bomb-Hair"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200 via-gold-100 to-cream-300 shadow-gold-lg" />
              <div className="absolute inset-4 rounded-full bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 shadow-inner">
                <span className="text-6xl" role="img" aria-label="Produtos Bomb-Hair">
                  💆
                </span>
                <div className="text-center px-6">
                  <p className="font-display text-xl font-bold text-charcoal-800">Bomb-Hair</p>
                  <p className="font-body text-xs text-charcoal-800/60 tracking-wider uppercase">Premium Collection</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl" role="img" aria-label="Botânico">
                    🌿
                  </span>
                  <span className="text-2xl" role="img" aria-label="Ciência">
                    🔬
                  </span>
                  <span className="text-2xl" role="img" aria-label="Tecnologia">
                    📱
                  </span>
                </div>
              </div>

              {[
                {
                  icon: <Leaf size={14} />,
                  label: 'Natural',
                  pos: '-top-4 -right-4 bg-green-50 text-green-700 border-green-200',
                },
                {
                  icon: <Droplets size={14} />,
                  label: 'Científico',
                  pos: '-bottom-4 -left-4 bg-blue-50 text-blue-700 border-blue-200',
                },
                {
                  icon: <Sparkles size={14} />,
                  label: 'Premium',
                  pos: 'top-1/2 -right-12 bg-gold-50 text-gold-700 border-gold-200',
                },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
                  className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${badge.pos}`}
                  aria-label={badge.label}
                >
                  {badge.icon}
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="Rolar para baixo"
      >
        <span className="font-body text-xs text-charcoal-800/40 tracking-widest uppercase">Explorar</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-gold-400" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}

