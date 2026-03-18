import detailPage from '../assets/detail_page.jpeg'
import homeScreen from '../assets/home_screen.jpeg'
import webEdição from '../assets/webPage_Edicaocell .jpeg'
import webPlantas from '../assets/webPage_plantascell.jpeg'
import crowmaImg from '../assets/crowma.jpeg'

export default function Projects() {
    const projects = [
        {
            title: 'SUMAÚMA APP',
            description: 'Enciclopédia de Plantas da Amazônia. Aplicativo mobile com catálogo etnobotânico completo e suporte a modelos 3D.',
            tabs: ['Aba Geral', 'Aba Científica', 'Aba Referências'],
            images: [homeScreen, detailPage],
            tech: ['Flutter', 'Firebase', 'Cloudinary', '3D Models'],
            link: '#'
        },
        {
            title: 'Painel Administrativo Web',
            description: 'Interface de gestão poderosa com CRUD completo de plantas e controle de usuários em tempo real.',
            tabs: ['Gestão de Plantas', 'Controle de Usuários', 'Solicitações'],
            images: [webPlantas, webEdição],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase SDK'],
            link: '#'
        },
        {
            title: 'Crowma Dashboard',
            description: 'Sistema de monitoramento e análise de dados para gestão de recursos e automação.',
            tabs: ['Monitoramento', 'Relatórios', 'Automação'],
            images: [crowmaImg],
            tech: ['Node.js', 'React', 'MongoDB'],
            link: '#'
        }
    ];

    return (
        <section className="container" id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Projetos <span style={{ 
                    background: 'linear-gradient(90deg, #187cf4, #664dcd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Destaques</span>
            </h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem'
            }}>
                {projects.map((project, idx) => (
                    <div key={project.title} className="glass-card project-card">
                        {/* Visual Side */}
                        <div className="project-visual" style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            position: 'relative',
                            perspective: '1000px'
                        }}>
                            {project.images ? (
                                project.images.map((img, i) => (
                                    <div key={i} style={{
                                        width: (project.title.includes('Web') || project.title.includes('Crowma')) ? 'clamp(140px, 45%, 220px)' : 'clamp(120px, 40%, 200px)',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        border: '1px solid var(--glass-border)',
                                        transform: `translateY(${i * 20}px) translateX(${i * -15}px) rotateY(${i * -2}deg)`,
                                        zIndex: 2 - i,
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <img src={img} alt={project.title} style={{ width: '100%', display: 'block' }} />
                                    </div>
                                ))
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '250px',
                                    background: 'linear-gradient(135deg, rgba(0,112,243,0.1), rgba(255,0,128,0.1))',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem'
                                }}>
                                    🖥️
                                </div>
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="project-content">
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(0,112,243,0.1)',
                                color: 'var(--primary)',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}>
                                PROJETO EM DESTAQUE
                            </div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.description}</p>

                            {project.tabs && (
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Recursos principais:</div>
                                    <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                                        {project.tabs.map(tab => (
                                            <div key={tab} style={{ fontSize: '0.95rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                <span style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>✦</span> {tab}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                {project.tech.map((t) => (
                                    <span key={t} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.5rem 1.2rem',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--text)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
