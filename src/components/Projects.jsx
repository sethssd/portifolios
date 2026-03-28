import detailPage from '../assets/detail_page.jpeg'
import homeScreen from '../assets/home_screen.jpeg'
import webEdição from '../assets/webPage_Edicaocell .jpeg'
import webPlantas from '../assets/webPage_plantascell.jpeg'
import crowmaImg from '../assets/crowma.jpeg'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            title: 'SUMAÚMA APP',
            description: 'Amazonian Plants Encyclopedia. Mobile app with a complete ethnobotanical catalog and 3D model support.',
            tabs: ['General Tab', 'Scientific Tab', 'References Tab'],
            images: [homeScreen, detailPage],
            tech: ['Flutter', 'Firebase', 'Cloudinary', '3D Models'],
            link: '#'
        },
        {
            title: 'Web Admin Panel',
            description: 'Powerful management interface with complete plant CRUD and real-time user control.',
            tabs: ['Plant Management', 'User Control', 'Requests'],
            images: [webPlantas, webEdição],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase SDK'],
            link: '#'
        },
        {
            title: 'Crowma Dashboard',
            description: 'Monitoring and data analysis system for resource management and automation.',
            tabs: ['Monitoring', 'Reports', 'Automation'],
            images: [crowmaImg],
            tech: ['Node.js', 'React', 'MongoDB'],
            link: '#'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="container" id="projects">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Featured <span className="animated-gradient" style={{ 
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Projects</span>
            </motion.h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem'
            }}>
                {projects.map((project, idx) => (
                    <motion.div 
                        key={project.title} 
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}
                        className="glass-card project-card"
                        style={{ transition: 'box-shadow 0.4s ease' }}
                    >
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
                                    background: 'linear-gradient(135deg, rgba(74,222,128,0.1), rgba(34,211,238,0.1))',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem'
                                }}>
                                    <span style={{ color: 'var(--primary)' }}>App</span>
                                </div>
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="project-content">
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(74,222,128,0.1)',
                                color: 'var(--primary)',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                letterSpacing: '0.05em'
                            }}>
                                FEATURED PROJECT
                            </div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.description}</p>

                            {project.tabs && (
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Key features:</div>
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
