export default function Projects() {
    const projects = [
        {
            title: 'E-commerce Moderno',
            description: 'Uma plataforma de vendas com integração de pagamentos e painel administrativo.',
            tech: ['React', 'Node.js', 'Stripe'],
            link: '#'
        },
        {
            title: 'App de Clima Pro',
            description: 'Previsão do tempo em tempo real com visualizações de dados dinâmicas.',
            tech: ['JavaScript', 'API OpenWeather', 'Chart.js'],
            link: '#'
        },
        {
            title: 'Task Master',
            description: 'Gerenciador de tarefas inteligente com persistência de dados local.',
            tech: ['React', 'LocalStorage', 'CSS Grid'],
            link: '#'
        }
    ];

    return (
        <section className="container" id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Projetos <span style={{ color: 'var(--primary)' }}>Destaques</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project) => (
                    <div key={project.title} className="glass-card" style={{ padding: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                        <div style={{
                            width: '100%',
                            height: '180px',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            color: 'var(--text-muted)'
                        }}>
                            🚀
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tech.map((t) => (
                                <span key={t} style={{
                                    background: 'rgba(0,112,243,0.1)',
                                    color: 'var(--primary)',
                                    padding: '0.2rem 0.8rem',
                                    borderRadius: '15px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
