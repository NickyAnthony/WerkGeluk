import TwoSoulsLogo from '@/components/logos/TwoSoulsLogo'
import CheckMatchLogo from '@/components/logos/CheckMatchLogo'
import TwinDropsLogo from '@/components/logos/TwinDropsLogo'
import SparkLogo from '@/components/logos/SparkLogo'
import DuoLogo from '@/components/logos/DuoLogo'
import CompassLogo from '@/components/logos/CompassLogo'

// ── Shared gradient definition shorthand ──
const GoldGradientDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#8B6A2E" />
      <stop offset="35%" stopColor="#C9A25B" />
      <stop offset="55%" stopColor="#F0D89A" />
      <stop offset="75%" stopColor="#C9A25B" />
      <stop offset="100%" stopColor="#8B6A2E" />
    </linearGradient>
  </defs>
)

// ── Wordmark inline component ──
function Wordmark({
  font = "'DM Sans', sans-serif",
  size = 28,
  color = '#0D1B2A',
  subColor = '#5A6470',
  subSize = 8,
  align = 'left' as 'left' | 'center',
}) {
  return (
    <div style={{ lineHeight: 1, textAlign: align }}>
      <div
        style={{
          fontFamily: font,
          fontWeight: 600,
          fontSize: `${size}px`,
          letterSpacing: '-0.5px',
          color,
          lineHeight: 1,
        }}
      >
        WerkGeluk
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: `${subSize}px`,
          letterSpacing: '4px',
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

// ── Artboard Card ──
function ArtboardCard({
  label,
  children,
  bg = '#E1E5EC',
  padding = '40px',
  minHeight = '220px',
  bodyStyle,
}: {
  label: string
  children: React.ReactNode
  bg?: string
  padding?: string
  minHeight?: string
  bodyStyle?: React.CSSProperties
}) {
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
          textTransform: 'uppercase' as const,
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight,
          ...bodyStyle,
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ── Section header ──
function SectionHeader({
  number,
  heading,
  subtitle,
}: {
  number: string
  heading: string
  subtitle: string
}) {
  return (
    <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid #E2E5EA' }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          letterSpacing: '3px',
          color: '#5A6470',
          textTransform: 'uppercase' as const,
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
      <div style={{ marginTop: '4px', fontSize: '13px', color: '#5A6470' }}>{subtitle}</div>
    </div>
  )
}

// ── Favicon set component ──
function FaviconSet({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '16px',
        padding: '32px',
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          color: '#5A6470',
          letterSpacing: '1.5px',
          textTransform: 'uppercase' as const,
        }}
      >
        FAVICON / APP ICON
      </div>
      {children}
    </div>
  )
}

function FaviconRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>{children}</div>
  )
}

function FaviconItem({
  px,
  radius,
  children,
}: {
  px: number
  radius: number
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '6px' }}>
      <div
        style={{
          width: `${px}px`,
          height: `${px}px`,
          borderRadius: `${radius}px`,
          background: '#0D1B2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '9px',
          color: '#5A6470',
        }}
      >
        {px}px
      </span>
    </div>
  )
}

// ── Tab mock ──
function TabMock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '260px',
        height: '30px',
        background: '#e8eaed',
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          background: '#fff',
          height: '26px',
          width: '180px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 10px',
          borderRadius: '6px 6px 0 0',
        }}
      >
        {children}
        <span style={{ fontSize: '10px', color: '#333', flex: 1 }}>WerkGeluk Recruitment</span>
        <span style={{ fontSize: '12px', color: '#999' }}>×</span>
      </div>
    </div>
  )
}

// ── Business card ──
function BizCard({
  front,
  font = "'DM Sans', sans-serif",
}: {
  front: React.ReactNode
  font?: string
}) {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' as const, padding: '32px' }}>
      {/* Front */}
      <div
        style={{
          width: '340px',
          height: '190px',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'space-between',
            padding: '24px 28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {front}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '3px',
              fontSize: '11px',
              color: '#5A6470',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>
              Sanne van der Berg
            </div>
            <div>Senior Recruitment Consultant</div>
            <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}>
              <span>06 18 23 69 93</span>
              <span>info@werkgeluk-recruitment.nl</span>
            </div>
          </div>
        </div>
      </div>
      {/* Back */}
      <div
        style={{
          width: '340px',
          height: '190px',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
          flexShrink: 0,
          background: '#0D1B2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative' as const,
        }}
      >
        <div
          style={{
            position: 'absolute' as const,
            right: '-20px',
            bottom: '-20px',
            width: '120px',
            height: '120px',
            borderRadius: '60px',
            background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)',
            opacity: 0.15,
          }}
        />
        <div style={{ position: 'relative' as const, zIndex: 1 }}>
          {/* back icon injected by parent */}
        </div>
      </div>
    </div>
  )
}

// ── Letterhead ──
function Letterhead({ logo }: { logo: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        background: '#fff',
        borderRadius: '4px',
        padding: '28px 32px 24px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '14px',
        boxShadow: '0 2px 12px rgba(13,27,42,0.06)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>{logo}</div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
        <div style={{ height: '2px', background: '#0D1B2A' }} />
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg,#8B6A2E,#C9A25B,#F0D89A,#C9A25B,#8B6A2E)',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '8px',
          letterSpacing: '1.5px',
          color: '#5A6470',
          textTransform: 'uppercase' as const,
        }}
      >
        <span>OTTO REUCHLINWEG · 3072 MD ROTTERDAM</span>
        <span>WERKGELUK-RECRUITMENT.NL</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px', fontSize: '10px', color: '#0D1B2A' }}>
        <div style={{ color: '#5A6470', fontSize: '9px' }}>Rotterdam, 30 april 2026</div>
        <div>Beste mevrouw De Vries,</div>
        <div
          style={{
            height: '36px',
            background: 'repeating-linear-gradient(to bottom,transparent,transparent 11px,#E2E5EA 11px,#E2E5EA 12px)',
          }}
        />
        <div>Met vriendelijke groet,</div>
        <div style={{ fontWeight: 600, marginTop: '8px' }}>WerkGeluk Recruitment</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '7.5px',
          color: '#9ba1ab',
          letterSpacing: '1px',
          paddingTop: '8px',
          borderTop: '1px solid #E2E5EA',
        }}
      >
        <span>KVK 70841640</span>
        <span>BTW NL001178713B61</span>
        <span>06 18 23 69 93</span>
      </div>
    </div>
  )
}

// ── LinkedIn banner ──
function LinkedInBanner({ icon, headline }: { icon: React.ReactNode; headline: string }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        height: '170px',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        boxShadow: '0 6px 20px rgba(13,27,42,0.1)',
        border: '1px solid #E2E5EA',
      }}
    >
      <div
        style={{
          width: '200px',
          background: '#0D1B2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative' as const,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'absolute' as const,
            right: '-30px',
            bottom: '-30px',
            width: '110px',
            height: '110px',
            borderRadius: '55px',
            background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)',
            opacity: 0.18,
          }}
        />
        <div style={{ position: 'relative' as const, zIndex: 1 }}>{icon}</div>
      </div>
      <div
        style={{
          flex: 1,
          padding: '0 36px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          gap: '10px',
          background: '#fff',
        }}
      >
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '20px',
            color: '#0D1B2A',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.3px',
          }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '3px', background: '#0D1B2A' }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '9.5px',
              color: '#5A6470',
              letterSpacing: '2px',
            }}
          >
            WERVING &amp; SELECTIE
          </span>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '3px',
              background: 'linear-gradient(135deg,#8B6A2E,#C9A25B,#F0D89A)',
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '9.5px',
              color: '#5A6470',
              letterSpacing: '2px',
            }}
          >
            ROTTERDAM
          </span>
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════
// ── TWO SOULS SECTION ──
// ══════════════════════════════════════════
function TwoSoulsSection() {
  const logoH = (id: string) => (
    <div className="logo-h">
      <TwoSoulsLogo size={60} variant="color" id={id} />
      <Wordmark font="'DM Sans', sans-serif" />
    </div>
  )

  return (
    <section id="twosouls">
      <SectionHeader
        number="02 — Two Souls"
        heading="Two Souls"
        subtitle="Twee menselijke silhouetten naast elkaar — de kandidaat en de werkgever"
      />

      {/* Horizontal */}
      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>
              {logoH('ts-h1')}
            </div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>
              {logoH('ts-h2')}
            </div>
          </div>
        </ArtboardCard>
      </div>

      {/* Three-up: stacked, favicon, dark */}
      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        {/* Gestapeld */}
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <TwoSoulsLogo size={88} variant="color" id="ts-s" />
            <Wordmark font="'DM Sans', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        {/* Favicon */}
        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}>
                <TwoSoulsLogo size={50} variant="color" id="ts-f64" />
              </FaviconItem>
              <FaviconItem px={32} radius={7}>
                <TwoSoulsLogo size={25} variant="color" id="ts-f32" />
              </FaviconItem>
              <FaviconItem px={16} radius={3}>
                <TwoSoulsLogo size={12} variant="color" id="ts-f16" />
              </FaviconItem>
            </FaviconRow>
            <TabMock>
              <TwoSoulsLogo size={14} variant="color" id="ts-tab" />
            </TabMock>
          </FaviconSet>
        </ArtboardCard>

        {/* Dark */}
        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <TwoSoulsLogo size={60} variant="white" id="ts-dk" />
            <Wordmark font="'DM Sans', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      {/* Business card */}
      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap' as const,
              padding: '32px',
            }}
          >
            {/* Front */}
            <div
              style={{
                width: '340px',
                height: '190px',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <TwoSoulsLogo size={52} variant="color" id="ts-bc" />
                  <Wordmark font="'DM Sans', sans-serif" size={22} subSize={7.5} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: '3px',
                    fontSize: '11px',
                    color: '#5A6470',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>
                    Sanne van der Berg
                  </div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}>
                    <span>06 18 23 69 93</span>
                    <span>info@werkgeluk-recruitment.nl</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div
              style={{
                width: '340px',
                height: '190px',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
                flexShrink: 0,
                background: '#0D1B2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative' as const,
              }}
            >
              <div
                style={{
                  position: 'absolute' as const,
                  right: '-20px',
                  bottom: '-20px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '60px',
                  background:
                    'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)',
                  opacity: 0.15,
                }}
              />
              <div style={{ position: 'relative' as const, zIndex: 1 }}>
                <TwoSoulsLogo size={84} variant="white" id="ts-bk" />
              </div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      {/* Letterhead + LinkedIn */}
      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead
            logo={
              <>
                <TwoSoulsLogo size={52} variant="color" id="ts-lh" />
                <Wordmark font="'DM Sans', sans-serif" size={22} subSize={7} />
              </>
            }
          />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner
            icon={<TwoSoulsLogo size={110} variant="white" id="ts-li" />}
            headline="Het juiste werk.<br/>De juiste mens."
          />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── CHECK MATCH SECTION ──
// ══════════════════════════════════════════
function CheckMatchSection() {
  const logoH = (id: string, showCircle = true) => (
    <div className="logo-h">
      <CheckMatchLogo size={60} variant="color" id={id} showCircle={showCircle} />
      <Wordmark font="'Inter', sans-serif" />
    </div>
  )

  return (
    <section id="checkmatch">
      <SectionHeader
        number="03 — Check Match"
        heading="Check Match"
        subtitle="Een vinkje uit twee strokes — bevestiging van de juiste match"
      />

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>
              {logoH('cm-h1')}
            </div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>
              {logoH('cm-h2')}
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <CheckMatchLogo size={88} variant="color" id="cm-s" />
            <Wordmark font="'Inter', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}>
                <CheckMatchLogo size={50} variant="color" id="cm-f64" showCircle={false} />
              </FaviconItem>
              <FaviconItem px={32} radius={7}>
                <CheckMatchLogo size={25} variant="color" id="cm-f32" showCircle={false} />
              </FaviconItem>
              <FaviconItem px={16} radius={3}>
                <CheckMatchLogo size={12} variant="color" id="cm-f16" showCircle={false} />
              </FaviconItem>
            </FaviconRow>
            <TabMock>
              <CheckMatchLogo size={14} variant="color" id="cm-tab" showCircle={false} />
            </TabMock>
          </FaviconSet>
        </ArtboardCard>

        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <CheckMatchLogo size={60} variant="white" id="cm-dk" showCircle={false} />
            <Wordmark font="'Inter', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      {/* Business card */}
      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap' as const,
              padding: '32px',
            }}
          >
            <div
              style={{
                width: '340px',
                height: '190px',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckMatchLogo size={52} variant="color" id="cm-bc" />
                  <Wordmark font="'Inter', sans-serif" size={22} subSize={7.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', fontSize: '11px', color: '#5A6470' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>Sanne van der Berg</div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}>
                    <span>06 18 23 69 93</span>
                    <span>info@werkgeluk-recruitment.nl</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: '340px',
                height: '190px',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(13,27,42,0.12)',
                flexShrink: 0,
                background: '#0D1B2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative' as const,
              }}
            >
              <div
                style={{
                  position: 'absolute' as const,
                  right: '-20px',
                  bottom: '-20px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '60px',
                  background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)',
                  opacity: 0.15,
                }}
              />
              <div style={{ position: 'relative' as const, zIndex: 1 }}>
                <CheckMatchLogo size={84} variant="white" id="cm-bk" showCircle={false} />
              </div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead
            logo={
              <>
                <CheckMatchLogo size={52} variant="color" id="cm-lh" />
                <Wordmark font="'Inter', sans-serif" size={22} subSize={7} />
              </>
            }
          />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner
            icon={<CheckMatchLogo size={110} variant="white" id="cm-li" showCircle={false} />}
            headline="Elke match.<br/>Een stap verder."
          />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── TWIN DROPS SECTION ──
// ══════════════════════════════════════════
function TwinDropsSection() {
  const logoH = (id: string) => (
    <div className="logo-h">
      <TwinDropsLogo size={60} variant="color" id={id} />
      <Wordmark font="'Manrope', sans-serif" />
    </div>
  )

  return (
    <section id="twindrops">
      <SectionHeader
        number="05 — Twin Drops"
        heading="Twin Drops"
        subtitle="Twee druppels in elkaar — yin/yang van match en verbinding"
      />

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>
              {logoH('td-h1')}
            </div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>
              {logoH('td-h2')}
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <TwinDropsLogo size={88} variant="color" id="td-s" />
            <Wordmark font="'Manrope', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}>
                <TwinDropsLogo size={50} variant="color" id="td-f64" showDots={false} />
              </FaviconItem>
              <FaviconItem px={32} radius={7}>
                <TwinDropsLogo size={25} variant="color" id="td-f32" showDots={false} />
              </FaviconItem>
              <FaviconItem px={16} radius={3}>
                <TwinDropsLogo size={12} variant="color" id="td-f16" showDots={false} />
              </FaviconItem>
            </FaviconRow>
            <TabMock>
              <TwinDropsLogo size={14} variant="color" id="td-tab" showDots={false} />
            </TabMock>
          </FaviconSet>
        </ArtboardCard>

        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <TwinDropsLogo size={60} variant="white" id="td-dk" showDots={false} />
            <Wordmark font="'Manrope', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' as const, padding: '32px' }}>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0 }}>
              <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between', padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <TwinDropsLogo size={52} variant="color" id="td-bc" />
                  <Wordmark font="'Manrope', sans-serif" size={22} subSize={7.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', fontSize: '11px', color: '#5A6470' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>Sanne van der Berg</div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}>
                    <span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0, background: '#0D1B2A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, right: '-20px', bottom: '-20px', width: '120px', height: '120px', borderRadius: '60px', background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)', opacity: 0.15 }} />
              <div style={{ position: 'relative' as const, zIndex: 1 }}>
                <TwinDropsLogo size={84} variant="white" id="td-bk" showDots={false} />
              </div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead logo={<><TwinDropsLogo size={52} variant="color" id="td-lh" /><Wordmark font="'Manrope', sans-serif" size={22} subSize={7} /></>} />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner icon={<TwinDropsLogo size={110} variant="white" id="td-li" showDots={false} />} headline="Jouw groei.<br/>Onze passie." />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── SPARK SECTION ──
// ══════════════════════════════════════════
function SparkSection() {
  const logoH = (id: string) => (
    <div className="logo-h">
      <SparkLogo size={60} variant="color" id={id} />
      <Wordmark font="'Manrope', sans-serif" />
    </div>
  )

  return (
    <section id="spark">
      <SectionHeader
        number="06 — Spark"
        heading="Spark"
        subtitle="Twee strokes die samenkomen op één punt — ambitie en richting"
      />

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>{logoH('sp-h1')}</div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>{logoH('sp-h2')}</div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <SparkLogo size={88} variant="color" id="sp-s" />
            <Wordmark font="'Manrope', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}><SparkLogo size={50} variant="color" id="sp-f64" strokeWidth={8} /></FaviconItem>
              <FaviconItem px={32} radius={7}><SparkLogo size={25} variant="color" id="sp-f32" strokeWidth={8} /></FaviconItem>
              <FaviconItem px={16} radius={3}><SparkLogo size={12} variant="color" id="sp-f16" strokeWidth={8} /></FaviconItem>
            </FaviconRow>
            <TabMock><SparkLogo size={14} variant="color" id="sp-tab" strokeWidth={8} /></TabMock>
          </FaviconSet>
        </ArtboardCard>

        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <SparkLogo size={60} variant="white" id="sp-dk" />
            <Wordmark font="'Manrope', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' as const, padding: '32px' }}>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0 }}>
              <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between', padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <SparkLogo size={52} variant="color" id="sp-bc" />
                  <Wordmark font="'Manrope', sans-serif" size={22} subSize={7.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', fontSize: '11px', color: '#5A6470' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>Sanne van der Berg</div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div>
                </div>
              </div>
            </div>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0, background: '#0D1B2A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, right: '-20px', bottom: '-20px', width: '120px', height: '120px', borderRadius: '60px', background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)', opacity: 0.15 }} />
              <div style={{ position: 'relative' as const, zIndex: 1 }}><SparkLogo size={84} variant="white" id="sp-bk" strokeWidth={8} /></div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead logo={<><SparkLogo size={52} variant="color" id="sp-lh" /><Wordmark font="'Manrope', sans-serif" size={22} subSize={7} /></>} />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner icon={<SparkLogo size={110} variant="white" id="sp-li" strokeWidth={8} />} headline="Ambitie in beweging.<br/>Talent op koers." />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── DUO SECTION ──
// ══════════════════════════════════════════
function DuoSection() {
  const logoH = (id: string) => (
    <div className="logo-h">
      <DuoLogo size={60} variant="color" id={id} />
      <Wordmark font="'DM Sans', sans-serif" />
    </div>
  )

  return (
    <section id="duo">
      <SectionHeader
        number="07 — Duo"
        heading="Duo"
        subtitle="Twee cirkels die overlappen — werkgever en kandidaat die elkaar vinden"
      />

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>{logoH('du-h1')}</div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>{logoH('du-h2')}</div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <DuoLogo size={88} variant="color" id="du-s" />
            <Wordmark font="'DM Sans', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}><DuoLogo size={50} variant="color" id="du-f64" /></FaviconItem>
              <FaviconItem px={32} radius={7}><DuoLogo size={25} variant="color" id="du-f32" /></FaviconItem>
              <FaviconItem px={16} radius={3}><DuoLogo size={12} variant="color" id="du-f16" /></FaviconItem>
            </FaviconRow>
            <TabMock><DuoLogo size={14} variant="color" id="du-tab" /></TabMock>
          </FaviconSet>
        </ArtboardCard>

        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <DuoLogo size={60} variant="white" id="du-dk" />
            <Wordmark font="'DM Sans', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' as const, padding: '32px' }}>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0 }}>
              <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between', padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <DuoLogo size={52} variant="color" id="du-bc" />
                  <Wordmark font="'DM Sans', sans-serif" size={22} subSize={7.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', fontSize: '11px', color: '#5A6470' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>Sanne van der Berg</div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div>
                </div>
              </div>
            </div>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0, background: '#0D1B2A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, right: '-20px', bottom: '-20px', width: '120px', height: '120px', borderRadius: '60px', background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)', opacity: 0.15 }} />
              <div style={{ position: 'relative' as const, zIndex: 1 }}><DuoLogo size={84} variant="white" id="du-bk" /></div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead logo={<><DuoLogo size={52} variant="color" id="du-lh" /><Wordmark font="'DM Sans', sans-serif" size={22} subSize={7} /></>} />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner icon={<DuoLogo size={110} variant="white" id="du-li" />} headline="Twee werelden.<br/>Één perfecte match." />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── COMPASS SECTION ──
// ══════════════════════════════════════════
function CompassSection() {
  const logoH = (id: string) => (
    <div className="logo-h">
      <CompassLogo size={60} variant="color" id={id} />
      <Wordmark font="'Inter', sans-serif" />
    </div>
  )

  return (
    <section id="compass">
      <SectionHeader
        number="08 — Compass"
        heading="Compass"
        subtitle="Scherpe diamant gespitst in navy en goud — precisie en richting"
      />

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Horizontaal — wit + cloud" bg="transparent" padding="0" minHeight="0">
          <div className="logo-split" style={{ width: '100%' }}>
            <div className="logo-split-panel" style={{ background: '#fff' }}>{logoH('cp-h1')}</div>
            <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>{logoH('cp-h2')}</div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid three" style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Gestapeld" bg="#fff">
          <div className="logo-v">
            <CompassLogo size={88} variant="color" id="cp-s" />
            <Wordmark font="'Inter', sans-serif" size={26} align="center" />
          </div>
        </ArtboardCard>

        <ArtboardCard label="Favicon — getest tot 16px" bg="transparent" padding="0" minHeight="0">
          <FaviconSet>
            <FaviconRow>
              <FaviconItem px={64} radius={14}><CompassLogo size={50} variant="color" id="cp-f64" /></FaviconItem>
              <FaviconItem px={32} radius={7}><CompassLogo size={25} variant="color" id="cp-f32" /></FaviconItem>
              <FaviconItem px={16} radius={3}><CompassLogo size={12} variant="color" id="cp-f16" /></FaviconItem>
            </FaviconRow>
            <TabMock><CompassLogo size={14} variant="color" id="cp-tab" /></TabMock>
          </FaviconSet>
        </ArtboardCard>

        <ArtboardCard label="Op donker" bg="#0D1B2A">
          <div className="logo-h">
            <CompassLogo size={60} variant="white" id="cp-dk" />
            <Wordmark font="'Inter', sans-serif" color="white" />
          </div>
        </ArtboardCard>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <ArtboardCard label="Visitekaartje" bg="transparent" padding="0" minHeight="0">
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' as const, padding: '32px' }}>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0 }}>
              <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between', padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CompassLogo size={52} variant="color" id="cp-bc" />
                  <Wordmark font="'Inter', sans-serif" size={22} subSize={7.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', fontSize: '11px', color: '#5A6470' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#0D1B2A' }}>Sanne van der Berg</div>
                  <div>Senior Recruitment Consultant</div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '2px' }}><span>06 18 23 69 93</span><span>info@werkgeluk-recruitment.nl</span></div>
                </div>
              </div>
            </div>
            <div style={{ width: '340px', height: '190px', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', flexShrink: 0, background: '#0D1B2A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, right: '-20px', bottom: '-20px', width: '120px', height: '120px', borderRadius: '60px', background: 'linear-gradient(135deg,#8B6A2E 0%,#C9A25B 35%,#F0D89A 55%,#C9A25B 75%,#8B6A2E 100%)', opacity: 0.15 }} />
              <div style={{ position: 'relative' as const, zIndex: 1 }}><CompassLogo size={84} variant="white" id="cp-bk" /></div>
            </div>
          </div>
        </ArtboardCard>
      </div>

      <div className="artboard-grid two">
        <ArtboardCard label="Briefhoofd" bodyStyle={{ padding: '40px' }}>
          <Letterhead logo={<><CompassLogo size={52} variant="color" id="cp-lh" /><Wordmark font="'Inter', sans-serif" size={22} subSize={7} /></>} />
        </ArtboardCard>
        <ArtboardCard label="LinkedIn banner" bodyStyle={{ padding: '40px' }}>
          <LinkedInBanner icon={<CompassLogo size={110} variant="white" id="cp-li" />} headline="Scherp in talent.<br/>Precies de juiste richting." />
        </ArtboardCard>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── PALETTE SECTION ──
// ══════════════════════════════════════════
function PaletteSection() {
  return (
    <section id="palette">
      <SectionHeader
        number="01 — Palet"
        heading="Kleurpalet"
        subtitle="De vijf kernkleuren van het WerkGeluk merkidentiteit systeem"
      />
      <div className="palette-grid">
        {/* Navy */}
        <div
          className="palette-card"
          style={{ background: '#0D1B2A', border: 'none' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#fff' }}>Navy</div>
            <div className="palette-card-role" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Primair — autoriteit, vertrouwen
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: 'rgba(255,255,255,0.7)' }}>#0D1B2A</div>
        </div>

        {/* Gold */}
        <div
          className="palette-card gold-gradient"
          style={{ border: 'none' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#fff' }}>Gold</div>
            <div className="palette-card-role" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Accent — warmte, succes
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: 'rgba(255,255,255,0.85)' }}>#C9A25B</div>
        </div>

        {/* Cloud */}
        <div
          className="palette-card"
          style={{ background: '#F4F6F8', border: '1px solid #E2E5EA' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#0D1B2A' }}>Cloud</div>
            <div className="palette-card-role" style={{ color: '#5A6470' }}>
              Achtergrond — licht, openheid
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: '#5A6470' }}>#F4F6F8</div>
        </div>

        {/* Canvas */}
        <div
          className="palette-card"
          style={{ background: '#E1E5EC', border: '1px solid #E2E5EA' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#0D1B2A' }}>Canvas</div>
            <div className="palette-card-role" style={{ color: '#5A6470' }}>
              Pagina — rust, structuur
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: '#5A6470' }}>#E1E5EC</div>
        </div>
      </div>

      {/* Sub + Border row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginTop: '12px',
        }}
      >
        <div
          className="palette-card"
          style={{ background: '#5A6470', border: 'none' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#fff' }}>Sub</div>
            <div className="palette-card-role" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Ondersteunende tekst
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: 'rgba(255,255,255,0.7)' }}>#5A6470</div>
        </div>
        <div
          className="palette-card"
          style={{ background: '#E2E5EA', border: '1px solid #E2E5EA' }}
        >
          <div>
            <div className="palette-card-name" style={{ color: '#0D1B2A' }}>Border</div>
            <div className="palette-card-role" style={{ color: '#5A6470' }}>
              Randen &amp; scheidingslijnen
            </div>
          </div>
          <div className="palette-card-hex" style={{ color: '#5A6470' }}>#E2E5EA</div>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════
// ── ROOT PAGE ──
// ══════════════════════════════════════════
export default function HomePage() {
  return (
    <div style={{ background: '#E1E5EC', minHeight: '100vh' }}>
      {/* Page header */}
      <header
        style={{
          padding: '56px 64px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: '36px',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
            color: '#0D1B2A',
          }}
        >
          WerkGeluk Recruitment
          <br />
          Logo Designs
        </h1>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#5A6470', letterSpacing: '0.2px' }}>
          Visuele identiteit — merkbouwstenen, varianten &amp; toepassingen
        </p>
      </header>

      {/* Main content */}
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 64px 80px',
          display: 'flex',
          flexDirection: 'column' as const,
          gap: '80px',
        }}
      >
        <PaletteSection />
        <TwoSoulsSection />
        <CheckMatchSection />
        <TwinDropsSection />
        <SparkSection />
        <DuoSection />
        <CompassSection />
      </main>
    </div>
  )
}
