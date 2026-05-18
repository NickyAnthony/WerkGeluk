interface TwoSoulsLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
}

export default function TwoSoulsLogo({ size = 64, variant = 'color', id = 'ts' }: TwoSoulsLogoProps) {
  const leftFill = variant === 'white' ? '#F4F6F8' : variant === 'navy' ? '#F4F6F8' : '#0D1B2A'
  const rightCircleFill = variant === 'white' ? '#F4F6F8' : `url(#${id}-v)`
  const rightBodyFill = variant === 'white' ? '#F4F6F8' : `url(#${id}-main)`

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
        <linearGradient id={`${id}-v`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0D89A" />
          <stop offset="50%" stopColor="#C9A25B" />
          <stop offset="100%" stopColor="#8B6A2E" />
        </linearGradient>
      </defs>
      {/* Left figure — navy or white */}
      <circle cx="22" cy="20" r="6" fill={leftFill} />
      <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill={leftFill} />
      {/* Right figure — gold gradient */}
      <circle cx="42" cy="20" r="6" fill={rightCircleFill} />
      <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill={rightBodyFill} />
    </svg>
  )
}
