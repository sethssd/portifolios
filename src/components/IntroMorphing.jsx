import { useEffect, useRef } from 'react'
import './IntroMorphing.css'

/* ── Welcome. — fonte original limpa ─────────
   ViewBox: 0 0 530 160
   ─────────────────────────────────────────────────────────────── */
const WELCOME_PATH = `
  M 10,30 L 32,130 L 54,68 L 76,130 L 98,30
  M 115,30 L 115,130 M 115,30 L 163,30 M 115,80 L 153,80 M 115,130 L 163,130
  M 177,30 L 177,130 M 177,130 L 218,130
  M 270,50 C 255,25 215,25 215,80 C 215,135 255,135 270,110
  M 292,80 C 292,48 305,30 322,30 C 339,30 352,48 352,80
             C 352,112 339,130 322,130 C 305,130 292,112 292,80 Z
  M 368,30 L 368,130 M 368,30 L 394,82 L 420,30 L 420,130
  M 436,30 L 436,130 M 436,30 L 482,30 M 436,80 L 472,80 M 436,130 L 482,130
`

export default function IntroMorphing({ onComplete }) {
  const pathRef = useRef(null)
  const dotRef  = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const dot  = dotRef.current
    if (!path || !dot) return

    const len = path.getTotalLength()
    path.style.strokeDasharray  = len
    path.style.strokeDashoffset = len

    void path.getBoundingClientRect()

    // Animação bem lenta: quase 10s
    path.style.transition = 'stroke-dashoffset 9.5s cubic-bezier(0.4, 0, 0.2, 1)'
    path.style.strokeDashoffset = '0'

    // Glow sai de dentro pra fora (expande o drop-shadow) e ponto aparece
    const t1 = setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 9.5s cubic-bezier(0.4,0,0.2,1), filter 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      path.style.filter = 'drop-shadow(0 0 12px rgba(74,222,128,0.9)) drop-shadow(0 0 2px rgba(74,222,128,0.5))'
      
      dot.style.transition = 'opacity 1s ease, filter 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      dot.style.opacity    = '1'
      dot.style.filter     = 'drop-shadow(0 0 8px rgba(74,222,128,0.9))'
    }, 9200)

    const t2 = setTimeout(() => onComplete?.(), 10500)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  return (
    <div className="intro-welcome-wrap">
      <svg
        className="intro-welcome-svg"
        viewBox="0 0 530 160"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Welcome."
        style={{ overflow: 'visible' }}
      >
        <path ref={pathRef} className="intro-welcome-path" d={WELCOME_PATH} />
        {/* Ponto sólido proporcional (menor) */}
        <circle ref={dotRef} cx="498" cy="126" r="4.5"
          className="intro-dot" style={{ opacity: 0 }} />
      </svg>
    </div>
  )
}
