interface SparkLogoProps {
  size?: number
  variant?: 'color' | 'white' | 'navy'
  id?: string
  strokeWidth?: number
}

export default function SparkLogo({
  size = 64,
  variant = 'color',
  id = 'sp',
  strokeWidth = 7,
}: SparkLogoProps) {
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
      {/* Left arm — navy */}
      <path
        d="M 14 50 L 32 14"
        stroke={leftStroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm — gold gradient */}
      <path
        d="M 32 14 L 50 50"
        stroke={rightStroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
