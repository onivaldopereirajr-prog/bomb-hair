import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
  dark?: boolean
}

export function Section({ id, title, subtitle, children, className, titleClassName, dark = false }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id={id} ref={ref} className={cn('section-padding', dark ? 'bg-charcoal-800 text-white' : 'bg-white', className)}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div
            className={cn(
              'text-center mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <h2 className={cn('font-display text-h2', dark ? 'text-white' : 'text-charcoal-800', titleClassName)}>
              {title}
            </h2>
          </div>
        )}
        {subtitle && (
          <div
            className={cn(
              'transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <p className={cn('section-subtitle', dark ? 'text-white/70' : '')}>{subtitle}</p>
          </div>
        )}
        <div
          className={cn(
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

