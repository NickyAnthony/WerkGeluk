export default function LogoDetailPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#E1E5EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '480px', padding: '40px' }}>
        {/* Icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 32px',
            background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg viewBox="0 0 64 64" width="40" height="40">
            <circle cx="22" cy="20" r="6" fill="#fff" />
            <path d="M 8 50 Q 8 30 22 30 Q 32 30 32 44 L 32 50 Z" fill="#fff" />
            <circle cx="42" cy="20" r="6" fill="rgba(255,255,255,0.7)" />
            <path d="M 56 50 Q 56 30 42 30 Q 32 30 32 44 L 32 50 Z" fill="rgba(255,255,255,0.7)" />
          </svg>
        </div>

        {/* Label */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            letterSpacing: '3px',
            color: '#5A6470',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Logo Detail View
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: '32px',
            color: '#0D1B2A',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Coming soon
        </h1>

        <p style={{ fontSize: '15px', color: '#5A6470', lineHeight: 1.6, marginBottom: '32px' }}>
          De individuele logodetailpagina is in ontwikkeling. Hier komen interactieve weergaven,
          downloadopties en gebruik­srichtlijnen per logo­variant.
        </p>

        <a
          href="/WerkGeluk/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#0D1B2A',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.2px',
          }}
        >
          ← Terug naar overzicht
        </a>
      </div>
    </div>
  )
}
