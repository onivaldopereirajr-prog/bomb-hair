import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'gold' | 'outline'
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-body',
        {
          'bg-charcoal-800/10 text-charcoal-800': variant === 'default',
          'bg-gold-400/15 text-gold-600 border border-gold-300': variant === 'gold',
          'border border-gold-400 text-gold-500 bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}

