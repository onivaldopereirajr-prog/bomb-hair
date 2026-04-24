import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FOUNDERS = [
  {
    initials: 'OP',
    name: 'Onivaldo Pereira Junior',
    role: 'Co-Fundador & Estratégia',
    description: 'Visionário estratégico focado em crescimento e parcerias no mercado de beleza.',
    color: 'bg-gold-400',
  },
  {
    initials: 'MG',
    name: 'Marlon Gonzaga da Silva',
    role: 'Co-Fundador & Inovação',
    description: 'Especialista em tecnologia e inovação, arquiteto do ecossistema digital Bomb-Hair.',
    color: 'bg-techblue-500',
  },
] as const

export const PRODUCTS = [
  {
    id: 'shampoo',
    name: 'Bomba Shampoo',
    subtitle: 'Botanical Strength',
    description:
      'Shampoo premium com fórmula científica que fortalece e revitaliza os fios. Proteção contra luz UV e ingredientes naturais de alta performance.',
    benefits: ['Fortalecimento intenso', 'Proteção térmica', 'Brilho e vitalidade'],
    emoji: '🧴',
    accent: 'gold',
  },
  {
    id: 'tonic',
    name: 'Hair Tonic',
    subtitle: 'Advanced Growth',
    description:
      'Tônico capilar com alecrim e aloe vera para estimular o crescimento e fortalecer raízes. Aplicação direta no couro cabeludo.',
    benefits: ['Estimula crescimento', 'Fortalece raízes', 'Reduz queda'],
    emoji: '💧',
    accent: 'blue',
  },
] as const

export const APP_FEATURES = [
  {
    icon: '📊',
    title: 'Dashboard Capilar',
    desc: 'Acompanhe o status do seu cabelo em tempo real com métricas personalizadas.',
  },
  {
    icon: '📸',
    title: 'Antes & Depois',
    desc: 'Visualize sua evolução com comparação lado a lado e gráficos de progresso.',
  },
  {
    icon: '🎯',
    title: 'Rotina Personalizada',
    desc: 'Receba uma rotina de cuidados adaptada ao seu tipo de cabelo.',
  },
  {
    icon: '🔔',
    title: 'Notificações Inteligentes',
    desc: 'Lembretes personalizados para manter sua rotina consistente.',
  },
  {
    icon: '🏆',
    title: 'Gamificação',
    desc: 'Ganhe pontos, desbloqueie badges e troque por recompensas exclusivas.',
  },
  {
    icon: '👥',
    title: 'Comunidade',
    desc: 'Compartilhe sua jornada e conecte-se com outros usuários Bomb-Hair.',
  },
] as const

export const TECH_STACK = [
  {
    category: 'Frontend',
    items: ['React Native', 'TypeScript', 'Tailwind CSS'],
    icon: '⚛️',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'PostgreSQL'],
    icon: '⚙️',
    color: 'bg-green-50 border-green-200',
  },
  {
    category: 'Infraestrutura',
    items: ['AWS', 'Docker', 'Kubernetes'],
    icon: '☁️',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    category: 'Armazenamento',
    items: ['AWS S3', 'Firebase', 'Firestore'],
    icon: '🗄️',
    color: 'bg-yellow-50 border-yellow-200',
  },
] as const

export const ROADMAP = [
  {
    quarter: 'Q2 2026',
    title: 'MVP Launch',
    description: 'App + Kit Básico de produtos. Primeiros usuários beta.',
    status: 'current',
    icon: '🚀',
  },
  {
    quarter: 'Q3 2026',
    title: 'Comunidade & Gamificação',
    description: 'Sistema de pontos, badges e ranking de usuários.',
    status: 'upcoming',
    icon: '🎮',
  },
  {
    quarter: 'Q4 2026',
    title: 'IA Capilar',
    description: 'Análise de imagem com inteligência artificial avançada.',
    status: 'future',
    icon: '🤖',
  },
  {
    quarter: '2027',
    title: 'Expansão Global',
    description: 'Novos produtos, novos mercados, nova era Beauty Tech.',
    status: 'future',
    icon: '🌍',
  },
] as const

