import cssIcon from '../icons/css-icon.png'
import dartIcon from '../icons/dart-programming-language-icon (1).png'
import gitIcon from '../icons/git-icon.png'
import htmlIcon from '../icons/html-icon.png'
import pythonIcon from '../icons/python-programming-language-icon.png'
import swiftIcon from '../icons/swift-programming-language-icon.png'

export default function Skills() {
    const skills = [
        { name: 'JavaScript', level: '80%', icon: htmlIcon }, // Reutilizando HTML para JS por falta de ícone JS específico, mas ideal seria JS
        { name: 'Flutter/Dart', level: '75%', icon: dartIcon },
        { name: 'Python', level: '70%', icon: pythonIcon },
        { name: 'HTML5/CSS3', level: '80%', icon: cssIcon },
        { name: 'Git', level: '70%', icon: gitIcon },
        { name: 'Swift', level: '55%', icon: swiftIcon }
    ];

    return (
        <section className="container" id="skills" style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Minhas <span style={{ color: 'var(--secondary)' }}>Habilidades</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {skills.map((skill) => (
                    <div key={skill.name} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <img src={skill.icon} alt={skill.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{skill.name}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{skill.level}</span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '8px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: skill.level,
                                        height: '100%',
                                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
