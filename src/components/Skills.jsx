export default function Skills() {
    const skills = [
        { name: 'React', level: '90%', icon: '⚛️' },
        { name: 'JavaScript', level: '85%', icon: '🟨' },
        { name: 'Node.js', level: '80%', icon: '🟢' },
        { name: 'CSS/SASS', level: '95%', icon: '🎨' },
        { name: 'PostgreSQL', level: '75%', icon: '🐘' },
        { name: 'Git/GitHub', level: '85%', icon: '🐙' }
    ];

    return (
        <section className="container" id="skills">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Minhas <span style={{ color: 'var(--secondary)' }}>Habilidades</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
            }}>
                {skills.map((skill) => (
                    <div key={skill.name} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                    <span style={{ fontWeight: 600 }}>{skill.name}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{skill.level}</span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '6px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '3px',
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
