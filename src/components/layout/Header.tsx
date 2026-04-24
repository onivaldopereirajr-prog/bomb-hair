import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'App', href: '#app' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveLink(href)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gold-100' : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#home')}
          role="link"
          aria-label="Bomb-Hair - Voltar ao início"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection('#home')}
        >
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent leading-tight">
              Bomb-Hair
            </span>
            <span className="font-body text-[10px] text-charcoal-800/50 tracking-widest uppercase">
              Fundada em 18 de Abril de 2026
            </span>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                'font-body text-sm font-medium transition-all duration-250 relative group',
                'focus:outline-none focus:underline',
                activeLink === link.href ? 'text-gold-400' : 'text-charcoal-800 hover:text-gold-400'
              )}
              aria-current={activeLink === link.href ? 'page' : undefined}
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all duration-300',
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="gold"
            size="sm"
            className="animate-pulse-gold"
            onClick={() => scrollToSection('#produtos')}
            aria-label="Descobrir os produtos Bomb-Hair"
          >
            Descobrir Agora
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gold-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-charcoal-800" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="text-charcoal-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-gold-100"
          >
            <nav className="flex flex-col py-4 px-6 gap-1" aria-label="Menu mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 px-4 rounded-lg font-body font-medium text-charcoal-800 hover:bg-gold-50 hover:text-gold-400 transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Button variant="gold" size="md" className="w-full" onClick={() => scrollToSection('#produtos')}>
                  Descobrir Agora
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

