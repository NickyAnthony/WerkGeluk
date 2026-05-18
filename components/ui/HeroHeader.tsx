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
      {/* Animated gold orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Dot grid overlay */}
      <div className="hero-grid" />

      {/* Mouse-follow glow */}
      <div className="hero-mouse-glow" ref={glowRef} />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">Visuele identiteit</div>
        <h1 className="hero-title">
          WerkGeluk<br />
          <span className="hero-title-accent">Recruitment</span>
        </h1>
        <p className="hero-subtitle">
          Merkbouwstenen, logo&nbsp;varianten &amp; toepassingen
        </p>
      </div>

      {/* Bottom fade into page */}
      <div className="hero-fade" />
    </header>
  )
}
