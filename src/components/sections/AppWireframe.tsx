import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function AppWireframe() {
  const { ref, isVisible } = useScrollAnimation()
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const routineItems = ['Aplicar Hair Tonic', 'Shampoo Bomba Strength', 'Hidratação profunda']

  return (
    <Section
      id="wireframe"
      title="Visualize a Experiência do App"
      subtitle="Interface intuitiva que transforma sua rotina capilar em uma jornada personalizada e motivadora."
      className="bg-charcoal-800"
      dark
    >
      <div ref={ref} className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
          aria-label="Mockup do aplicativo Bomb-Hair"
        >
          <div className="w-[280px] h-[580px] bg-charcoal-900 rounded-[44px] border-4 border-charcoal-700 shadow-2xl overflow-hidden relative">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-charcoal-900 rounded-b-2xl z-10"
              aria-hidden="true"
            />

            <div className="flex justify-between items-center px-6 pt-10 pb-2 bg-white" aria-label="Barra de status">
              <span className="font-body text-xs font-bold text-charcoal-800">9:41</span>
              <div className="flex gap-1.5 items-center">
                <div className="w-4 h-2 bg-charcoal-800 rounded-sm" aria-hidden="true" />
                <div className="w-3 h-2 bg-gold-400 rounded-sm" aria-hidden="true" />
              </div>
            </div>

            <div className="bg-gray-50 h-full overflow-hidden pb-16">
              <div className="px-4 py-3 space-y-3 overflow-y-auto h-full pb-4">
                <div className="bg-gradient-to-r from-gold-400 to-gold-300 rounded-2xl p-4 text-charcoal-900">
                  <p className="font-body text-xs opacity-80">Bem-vinda de volta!</p>
                  <p className="font-display text-lg font-bold">Olá, Maria! 👋</p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <p className="font-body text-xs font-semibold text-charcoal-800/60 uppercase tracking-wider mb-2">
                    Status Capilar
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm font-medium text-charcoal-800">Hidratação</span>
                    <span className="font-body text-xs font-bold text-gold-500">75%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      animate={isVisible ? { width: '75%' } : { width: '0%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-full bg-gradient-to-r from-gold-400 to-gold-300 rounded-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <p className="font-body text-xs font-semibold text-charcoal-800/60 uppercase tracking-wider mb-3">
                    Sua Rotina Hoje
                  </p>
                  <div className="space-y-2">
                    {routineItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => toggleItem(item)}
                        className="flex items-center gap-3 w-full text-left group"
                        aria-pressed={checkedItems.includes(item)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            checkedItems.includes(item)
                              ? 'bg-gold-400 border-gold-400'
                              : 'border-gray-300 group-hover:border-gold-400'
                          }`}
                        >
                          {checkedItems.includes(item) && <span className="text-white text-xs font-bold">✓</span>}
                        </div>
                        <span
                          className={`font-body text-xs transition-all ${
                            checkedItems.includes(item) ? 'line-through text-charcoal-800/40' : 'text-charcoal-800'
                          }`}
                        >
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <p className="font-body text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">💡 Dica do Dia</p>
                  <p className="font-body text-xs text-charcoal-800/80">
                    Aplique o Hair Tonic em movimentos circulares para estimular a circulação.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2">
              <div className="flex justify-around items-center">
                {[
                  { icon: '🏠', label: 'Home', active: true },
                  { icon: '📊', label: 'Evolução', active: false },
                  { icon: '🎯', label: 'Rotina', active: false },
                  { icon: '👥', label: 'Comunidade', active: false },
                  { icon: '👤', label: 'Perfil', active: false },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-0.5">
                    <span className="text-base" role="img" aria-label={item.label}>
                      {item.icon}
                    </span>
                    <span className={`font-body text-[8px] ${item.active ? 'text-gold-500 font-semibold' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 text-white"
        >
          <h3 className="font-display text-h3 text-white mb-6">Uma experiência única no seu bolso</h3>
          <div className="space-y-4">
            {[
              { icon: '🎯', title: 'Personalizado para você', desc: 'IA analisa seu tipo de cabelo e cria uma rotina exclusiva.' },
              { icon: '📈', title: 'Acompanhe sua evolução', desc: 'Métricas em tempo real do seu progresso capilar.' },
              { icon: '🏆', title: 'Ganhe recompensas', desc: 'Pontos, badges e prêmios por manter sua rotina.' },
              { icon: '🔗', title: 'Integrado aos produtos', desc: 'Escaneie o QR code da embalagem para ativação automática.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <span className="text-2xl flex-shrink-0" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <div>
                  <p className="font-body font-semibold text-gold-400 text-sm">{item.title}</p>
                  <p className="font-body text-xs text-white/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

