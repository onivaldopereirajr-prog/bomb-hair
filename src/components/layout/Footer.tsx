import { useState } from 'react'
import { ArrowRight, Camera, Mail, MapPin, Play, Send, Users } from 'lucide-react'

const NAV_LINKS = ['Home', 'Sobre', 'Produtos', 'App', 'Contato']
const SOCIAL_LINKS = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Users, label: 'LinkedIn', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-charcoal-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Bomb-Hair
              </span>
              <p className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">Beauty Tech · Fundada 2026</p>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-4">Ciência. Tecnologia. Comunidade.</p>
            <div className="flex items-center gap-1 text-white/50 text-xs mb-6">
              <MapPin size={12} aria-hidden="true" />
              <span>Brasil · 2026</span>
            </div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300 flex items-center justify-center text-white"
                  aria-label={`Bomb-Hair no ${social.label}`}
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300 flex items-center justify-center text-white"
                aria-label="Bomb-Hair no TikTok"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-widest">Links Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-white/60 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-widest">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@bomb-hair.com"
                className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                contato@bomb-hair.com
              </a>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Fundada em 18 de Abril de 2026
                <br />
                por Onivaldo Pereira Junior
                <br />&amp; Marlon Gonzaga da Silva
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-widest">Newsletter</h4>
            <p className="font-body text-sm text-white/60 mb-4 leading-relaxed">
              Receba novidades, dicas capilares e lançamentos exclusivos.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-gold-400 font-body text-sm">
                <span className="text-xl" aria-hidden="true">
                  ✅
                </span>
                Obrigado por se inscrever!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                  aria-label="Seu endereço de e-mail para newsletter"
                  required
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-gold-400 text-charcoal-900 rounded-full flex items-center justify-center hover:bg-gold-300 transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-charcoal-900"
                  aria-label="Inscrever-se na newsletter"
                >
                  <Send size={14} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/40 text-center md:text-left">© 2026 Bomb-Hair. Todos os direitos reservados.</p>
          <p className="font-body text-xs text-white/40 text-center">
            Fundada em 18 de Abril de 2026 · Onivaldo Pereira Junior &amp; Marlon Gonzaga da Silva
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/40 hover:text-gold-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-gold-400 transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

