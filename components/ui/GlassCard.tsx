import { ReactNode, CSSProperties } from 'react'

type Tier = 'base' | 'strong' | 'accent'

interface GlassCardProps {
  children: ReactNode
  className?: string
  tier?: Tier
  hover?: boolean
  style?: CSSProperties
  as?: 'div' | 'article' | 'section' | 'li'
}

export default function GlassCard({
  children,
  className = '',
  tier = 'base',
  hover = false,
  style,
  as: Tag = 'div',
}: GlassCardProps) {
  const glassClass =
    tier === 'strong' ? 'glass-strong' : tier === 'accent' ? 'glass-accent' : 'glass'

  return (
    <Tag
      className={`rounded-[20px] ${glassClass} ${hover ? 'glass-hover' : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
