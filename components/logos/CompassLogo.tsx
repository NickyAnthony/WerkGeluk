interface CompassLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
}

export default function CompassLogo({ size = 64, variant = 'color', id = 'cp' }: CompassLogoProps) {
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
      {/* Left diamond half — navy */}
      <polygon points="32,8 8,32 32,56" fill={leftFill} />
      {/* Right diamond half — gold gradient */}
      <polygon points="32,8 56,32 32,56" fill={rightFill} />
    </svg>
  )
}
