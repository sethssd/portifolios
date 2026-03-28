export default function Contact() {
    return (
        <section className="container" id="contact" style={{ textAlign: 'center' }}>
            <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's work <span style={{ color: 'var(--primary)' }}>together</span>?</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    I'm always looking for new challenges and interesting opportunities. My inbox is always open!
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://www.instagram.com/dfabs__/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--text)', color: 'var(--bg)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, letterSpacing: '0.02em', transition: 'all 0.2s' }}>Say Hello</a>
                    <a href="https://github.com/sethssd" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--glass-border)', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, background: 'var(--glass)', color: 'var(--text)', letterSpacing: '0.02em', transition: 'all 0.2s' }}>GitHub</a>
                </div>
            </div>

            <footer style={{ marginTop: '8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} - Developed by sethssd</p>
            </footer>
        </section>
    );
}
