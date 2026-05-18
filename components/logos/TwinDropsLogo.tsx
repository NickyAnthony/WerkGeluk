interface TwinDropsLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
  showDots?: boolean
}

export default function TwinDropsLogo({
  size = 64,
  variant = 'color',
  id = 'td',
  showDots = true,
}: TwinDropsLogoProps) {
  const leftFill = variant === 'white' ? '#F4F6F8' : '#0D1B2A'
  const rightFill = variant === 'white' ? '#F4F6F8' : `url(#${id}-main)`

  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <defs>
        <linearGradient id={`${id}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6A2E" />
          <stop offset="35%" stopColor="#C9A25B" />
          <stop offset="55%" stopColor="#F0D89A" />
          <stop offset="75%" stopColor="#C9A25B" />
          <stop offset="100%" stopColor="#8B6A2E" />
        </linearGradient>
      </defs>
      {/* Left half — yin drop, navy */}
      <path
        d="M 32 8 A 12 12 0 0 1 32 32 A 12 12 0 0 0 32 56 A 24 24 0 0 1 32 8 Z"
        fill={leftFill}
      />
      {/* Right half — yang drop, gold */}
      <path
        d="M 32 8 A 12 12 0 0 0 32 32 A 12 12 0 0 1 32 56 A 24 24 0 0 0 32 8 Z"
        fill={rightFill}
      />
      {/* Yin-yang dots */}
      {showDots && (
        <>
          <circle cx="32" cy="20" r="3" fill="#F4F6F8" />
          <circle cx="32" cy="44" r="3" fill="#F4F6F8" />
        </>
      )}
    </svg>
  )
}
