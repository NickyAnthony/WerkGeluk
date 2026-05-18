interface CheckMatchLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
  showCircle?: boolean
}

export default function CheckMatchLogo({
  size = 64,
  variant = 'color',
  id = 'cm',
  showCircle = true,
}: CheckMatchLogoProps) {
  const leftStroke = variant === 'white' ? '#F4F6F8' : '#0D1B2A'
  const rightStroke = variant === 'white' ? '#F4F6F8' : `url(#${id}-main)`

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
      {showCircle && (
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="#0D1B2A"
          strokeWidth="2"
          opacity="0.15"
        />
      )}
      {/* Left stroke of checkmark — navy */}
      <path
        d="M 16 34 L 26 44"
        stroke={leftStroke}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right stroke of checkmark — gold gradient */}
      <path
        d="M 26 44 L 48 22"
        stroke={rightStroke}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
