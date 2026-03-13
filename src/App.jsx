import logoArt from './icons/DayDevWhite.png'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <nav className="nav" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 2rem', alignItems: 'center' }}>
          <div className="logo">
            <img src={logoArt} alt="DAY.DEV" style={{ height: '35px', display: 'block' }} />
          </div>
          <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, fontSize: '0.9rem' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <header id="home" className="container" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '6rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(0,112,243,0.2)',
            color: 'var(--primary)',
            padding: '0.5rem 1.2rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '2rem'
          }}>
            DISPONÍVEL PARA NOVOS PROJETOS
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Criando o futuro através do <span style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>design & código</span>.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Especialista em construir produtos digitais de ponta a ponta com foco em experiência do usuário e performance excepcional.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
            <a href="#projects" style={{ background: 'var(--text)', color: 'var(--bg)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700 }}>Ver Meu Trabalho</a>
            <a href="#contact" style={{ border: '1px solid var(--text)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700 }}>Entrar em Contato</a>
          </div>
        </header>

        <Skills />
        <div style={{ marginTop: '5rem' }}>
          <Projects />
        </div>
        <Contact />
      </main>
    </div>
  )
}

export default App
