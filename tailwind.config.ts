import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8E7',
          100: '#FAF0C3',
          200: '#F5E18A',
          300: '#EFD056',
          400: '#D4AF37',
          500: '#B8960C',
          600: '#9A7B06',
          700: '#7D6205',
          800: '#5F4A04',
          900: '#3D2F02',
        },
        cream: {
          50: '#FEFEFB',
          100: '#FDFDF4',
          200: '#FBFBEC',
          300: '#F8F8E0',
          400: '#F5F5DC',
          500: '#EBEBB8',
          600: '#D8D893',
          700: '#C4C46E',
          800: '#A8A848',
          900: '#8A8A28',
        },
        charcoal: {
          800: '#333333',
          900: '#1A1A1A',
        },
        techblue: {
          500: '#0056B3',
          600: '#004494',
          700: '#003378',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'Lato', 'sans-serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.15', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        h3: ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 4px 16px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 32px rgba(212, 175, 55, 0.4)',
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.14)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F5E181 50%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FFFFFF 0%, #F5F5DC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
    },
  },
  plugins: [],
}

export default config

