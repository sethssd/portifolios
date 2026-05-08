import React, { useState, useEffect } from 'react'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion'
import IntroMorphing from './components/IntroMorphing'

const BIO_TEXT = 'Fabio | Software Developer — Delivering end-to-end digital solutions with a focus on performance. Expert in Flutter and Native iOS development, paired with robust React web applications.'

function WordReveal({ text, active }) {
  const words = text.split(' ')
  return (
    <p style={{
      color: 'var(--text-muted)',
      fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
      maxWidth: '640px',
      lineHeight: 1.85,
      margin: '0 auto',
    }}>
      {words.map((word, i) => (
        <span key={i} style={{
          display: 'inline-block',
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(0.4rem)',
          transition: `opacity 0.5s ease ${i * 26}ms, transform 0.5s cubic-bezier(0.68,-0.55,0.27,1.55) ${i * 26}ms`,
          marginRight: '0.28em',
        }}>{word}</span>
      ))}
    </p>
  )
}

export default function App() {
  const [svgDone, setSvgDone] = useState(false)

  return (
    <div className="app">
      <main style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <header id="home" style={{
          position: 'relative',
          textAlign: 'center',
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 'calc(5rem + env(safe-area-inset-top))',
          paddingBottom: '4rem',
          overflow: 'hidden',
        }}>

          {/* Fundo verde sutil — gradiente radial clarinho */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(74,222,128,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'relative', zIndex: 1,
              display: 'inline-block',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              color: '#ef4444',
              padding: '0.4rem 1.1rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.7rem, 2.2vw, 0.82rem)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              marginBottom: '2.5rem',
            }}
          >
            CURRENTLY UNAVAILABLE
          </motion.div>

          {/* Welcome. SVG animado */}
          <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <IntroMorphing onComplete={() => setSvgDone(true)} />
          </div>

          {/* Bio — palavras aparecem após o SVG */}
          <div style={{ position: 'relative', zIndex: 1, marginTop: '0.5rem' }}>
            <WordReveal text={BIO_TEXT} active={svgDone} />
          </div>

        </header>

        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
