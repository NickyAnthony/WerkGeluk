interface DuoLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
}

export default function DuoLogo({ size = 64, variant = 'color', id = 'du' }: DuoLogoProps) {
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
      {/* Left circle — navy */}
      <circle cx="24" cy="32" r="16" fill={leftFill} />
      {/* Right circle — gold gradient, overlapping */}
      <circle cx="40" cy="32" r="16" fill={rightFill} />
    </svg>
  )
}
