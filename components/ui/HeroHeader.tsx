'use client'

import { useRef, useCallback } from 'react'

export default function HeroHeader() {
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    glowRef.current.style.left = `${e.clientX - rect.left}px`
    glowRef.current.style.top = `${e.clientY - rect.top}px`
  }, [])

  return (
    <header className="hero-header" onMouseMove={handleMouseMove}>
      {/* Drijvende gouden orbs — heel subtiel op canvas achtergrond */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Muis-volg gloed */}
      <div className="hero-mouse-glow" ref={glowRef} />

      {/* Content — identiek aan de originele header */}
      <div className="hero-content">
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
      </div>
    </header>
  )
}
