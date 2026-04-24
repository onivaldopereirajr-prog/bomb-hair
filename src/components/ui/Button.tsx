import { cn } from '@/lib/utils'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
} as const

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'gold', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'ripple inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full',
          'transition-all duration-300 ease-in-out active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gold-400 text-charcoal-900 shadow-gold-sm hover:shadow-gold-md hover:bg-gold-300':
              variant === 'gold',
            'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-900 bg-transparent':
              variant === 'outline',
            'text-gold-400 hover:bg-gold-50 bg-transparent': variant === 'ghost',
          },
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

