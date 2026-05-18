interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'navy' | 'white'
  font?: 'dm' | 'inter' | 'manrope'
  align?: 'left' | 'center'
}

const fontMap = {
  dm: "'DM Sans', sans-serif",
  inter: "'Inter', sans-serif",
  manrope: "'Manrope', sans-serif",
}

const sizeMap = {
  sm: { name: '22px', sub: '7.5px', subSpacing: '3.5px' },
  md: { name: '28px', sub: '8px', subSpacing: '4.5px' },
  lg: { name: '36px', sub: '9px', subSpacing: '5px' },
}

export default function Wordmark({
  size = 'md',
  color = 'navy',
  font = 'dm',
  align = 'left',
}: WordmarkProps) {
  const { name: nameSize, sub: subSize, subSpacing } = sizeMap[size]
  const nameColor = color === 'white' ? '#fff' : '#0D1B2A'
  const subColor = color === 'white' ? 'rgba(255,255,255,0.5)' : '#5A6470'
  const textAlign = align === 'center' ? 'center' : 'left'

  return (
    <div style={{ lineHeight: 1, textAlign }}>
      <div
        style={{
          fontFamily: fontMap[font],
          fontWeight: 600,
          fontSize: nameSize,
          letterSpacing: '-0.5px',
          color: nameColor,
          lineHeight: 1,
        }}
      >
        WerkGeluk
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: subSize,
          letterSpacing: subSpacing,
          color: subColor,
          marginTop: '4px',
          textTransform: 'uppercase' as const,
        }}
      >
        RECRUITMENT
      </div>
    </div>
  )
}
