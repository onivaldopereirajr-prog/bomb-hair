import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'product' | 'founder'
  hover?: boolean
}

export function Card({ variant = 'default', hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-350',
        {
          'bg-white shadow-card border border-transparent p-6': variant === 'default',
          'bg-white shadow-card border border-transparent p-6 text-center': variant === 'feature',
          'bg-white shadow-card border border-transparent overflow-hidden': variant === 'product',
          'bg-white shadow-card border border-transparent p-8 text-center': variant === 'founder',
        },
        hover && 'hover:shadow-card-hover hover:border-gold-400 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

