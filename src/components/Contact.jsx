export default function Contact() {
    return (
        <section className="container" id="contact" style={{ textAlign: 'center' }}>
            <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vamos trabalhar <span style={{ color: 'var(--primary)' }}>juntos</span>?</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Estou sempre em busca de novos desafios e oportunidades interessantes. Meu inbox está sempre aberto!
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://www.instagram.com/dfabs__/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--text)', color: 'var(--bg)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600 }}>Diga Olá</a>
                    <a href="https://github.com/sethssd" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--glass-border)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, background: 'rgba(255,255,255,0.02)' }}>GitHub</a>
                </div>
            </div>

            <footer style={{ marginTop: '8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} - Desenvolvido com ❤️ por sethssd</p>
            </footer>
        </section>
    );
}
