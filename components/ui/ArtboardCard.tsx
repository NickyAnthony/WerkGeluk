import { ReactNode } from 'react'

interface ArtboardCardProps {
  label: string
  children: ReactNode
  bodyClass?: string
  bodyStyle?: React.CSSProperties
}

export default function ArtboardCard({
  label,
  children,
  bodyClass = '',
  bodyStyle,
}: ArtboardCardProps) {
  const bodyBg =
    bodyClass === 'white'
      ? '#fff'
      : bodyClass === 'navy'
        ? '#0D1B2A'
        : bodyClass === 'plain'
          ? 'transparent'
          : '#E1E5EC'

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(13,27,42,.07), 0 4px 16px rgba(13,27,42,.05)',
      }}
    >
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #E2E5EA',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '9px',
          letterSpacing: '1.8px',
          color: '#5A6470',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: bodyClass === 'plain' ? '0' : '40px',
          background: bodyBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: bodyClass === 'plain' ? '0' : '220px',
          ...bodyStyle,
        }}
      >
        {children}
      </div>
    </div>
  )
}
