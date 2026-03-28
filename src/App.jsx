import React, { useState, useEffect } from 'react'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Configuração para Animação de Entrada
  const introContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const introLetter = {
    hidden: { opacity: 0, y: 60, rotateX: -90, scale: 0.8 },
    visible: { 
      opacity: 1, y: 0, rotateX: 0, scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 70 }
    },
  };

  const renderAnimatedLetters = (text) => {
    return Array.from(text).map((letter, index) => (
      <motion.span variants={introLetter} key={`${letter}-${index}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="app">
      <motion.div 
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      {/* Wow Factor Background Elements */}
      <div className="bg-grid"></div>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <main style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <header id="home" className="container" style={{
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 'calc(8rem + env(safe-area-inset-top))',
          perspective: '1200px'
        }}>
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            style={{
              display: 'inline-block',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#ef4444',
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              fontSize: 'min(0.85rem, 3.5vw)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '2rem'
            }}>
            CURRENTLY UNAVAILABLE
          </motion.div>
          
            <motion.h1 
            variants={introContainer}
            initial="hidden"
            animate="visible"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 6rem)', 
              lineHeight: 1.05, 
              marginBottom: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              transformStyle: "preserve-3d"
            }}>
            {renderAnimatedLetters("Creating the future ")}<br/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap', gap: '0.3em' }}>
              <div style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{renderAnimatedLetters("through")}</div>
              
              <div style={{ display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
                <motion.svg 
                  viewBox="0 0 530 80" 
                  style={{ width: '7.7em', height: '1.15em', overflow: 'visible', transform: 'translateY(0.12em)' }}
                >
                  <motion.text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    initial={{ strokeDasharray: "0 1000", strokeWidth: 1.5, fill: "rgba(74, 222, 128, 0)" }}
                    animate={{ strokeDasharray: "1000 0", fill: "var(--primary)" }}
                    transition={{ strokeDasharray: { duration: 3.5, ease: "easeInOut", delay: 1.0 }, fill: { duration: 0.5, ease: "easeOut", delay: 4.0 } }}
                    style={{ fontFamily: "var(--font-main)", fontWeight: 800, fontSize: "74px", stroke: "var(--primary)", letterSpacing: "0.02em" }}
                  >
                    design & code
                  </motion.text>
                </motion.svg>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 4.5 }}
                  style={{ fontSize: '1em', color: 'var(--text)', marginLeft: '0.05em' }}
                >
                  .
                </motion.span>
              </div>
            </div>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', 
              maxWidth: '750px', 
              margin: '0 auto 3rem', 
              lineHeight: 1.7
            }}>
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>Fabio | Software Developer</span><br/><br/>
            Delivering end-to-end digital solutions with a focus on performance. Expert in Flutter and Native iOS development, paired with robust React web applications. I architect scalable, resilient backends using Node.js and Firebase to ensure your project is production-ready and future-proof.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5 }}
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap'
            }}>
            <a href="#projects" style={{ background: 'var(--text)', color: 'var(--bg)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, flex: '1 1 150px', maxWidth: '250px', transition: 'all 0.2s', letterSpacing: '0.02em' }}>View Work</a>
            <a href="#contact" style={{ border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--text)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, flex: '1 1 150px', maxWidth: '250px', transition: 'all 0.2s', letterSpacing: '0.02em' }}>Contact</a>
          </motion.div>
        </header>

        <Skills />
        <div>
          <Projects />
        </div>
        <Contact />
      </main>
    </div>
  )
}

export default App
