interface SectionHeaderProps {
  number: string
  heading: string
  subtitle: string
}

export default function SectionHeader({ number, heading, subtitle }: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: '28px',
        paddingBottom: '20px',
        borderBottom: '1px solid #E2E5EA',
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          letterSpacing: '3px',
          color: '#5A6470',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 500,
          fontSize: '26px',
          letterSpacing: '-0.3px',
          color: '#0D1B2A',
        }}
      >
        {heading}
      </div>
      <div
        style={{
          marginTop: '4px',
          fontSize: '13px',
          color: '#5A6470',
        }}
      >
        {subtitle}
      </div>
    </div>
  )
}
