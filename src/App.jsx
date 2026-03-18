import logoArt from './icons/DayDevWhite.png'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="app">
      {/* Wow Factor Background Elements */}
      <div className="bg-grid"></div>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <nav className="nav" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(12px)',
        paddingTop: 'calc(0.4rem + env(safe-area-inset-top))',
        paddingBottom: '0.4rem'
      }}>
        <div className="container nav-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0'
        }}>
          <div className="logo">
            <img src={logoArt} alt="DAY.DEV" style={{ height: '32px', display: 'block' }} />
          </div>
        </div>
      </nav>

      <main style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <header id="home" className="container" style={{
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: 'calc(5rem + env(safe-area-inset-top))'
        }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              background: 'rgba(0,112,243,0.2)',
              color: 'var(--primary)',
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              fontSize: 'min(0.85rem, 3.5vw)',
              fontWeight: 700,
              marginBottom: '2rem'
            }}>
            DISPONÍVEL PARA NOVOS PROJETOS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Criando o futuro através do <span className="animated-gradient" style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>design & código</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 4vw, 1.25rem)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Especialista em construir produtos digitais de ponta a ponta com foco em experiência do usuário e performance excepcional.
          </motion.p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ background: 'var(--text)', color: 'var(--bg)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, flex: '1 1 150px', maxWidth: '250px' }}>Ver Trabalho</a>
            <a href="#contact" style={{ border: '1px solid var(--text)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, flex: '1 1 150px', maxWidth: '250px' }}>Contato</a>
          </div>
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
