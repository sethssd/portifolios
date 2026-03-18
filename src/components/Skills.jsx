import cssIcon from '../icons/css-icon.png'
import dartIcon from '../icons/dart-programming-language-icon (1).png'
import gitIcon from '../icons/git-icon.png'
import htmlIcon from '../icons/html-icon.png'
import pythonIcon from '../icons/python-programming-language-icon.png'
import swiftIcon from '../icons/swift-programming-language-icon.png'
import { motion } from 'framer-motion'

export default function Skills() {
    const skills = [
        { name: 'JavaScript', level: '80%', icon: htmlIcon },
        { name: 'Flutter/Dart', level: '75%', icon: dartIcon },
        { name: 'Python', level: '70%', icon: pythonIcon },
        { name: 'HTML5/CSS3', level: '80%', icon: cssIcon },
        { name: 'Git', level: '70%', icon: gitIcon },
        { name: 'Swift', level: '55%', icon: swiftIcon }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="container" id="skills">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Minhas <span className="animated-gradient" style={{
                    background: 'linear-gradient(90deg, #b445c9, #ff4c8a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Habilidades</span>
            </motion.h2>
            <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                    <motion.div 
                        key={skill.name} 
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(255,51,153,0.15)' }}
                        className="glass-card" 
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'box-shadow 0.3s ease' }}>
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
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                        className="animated-gradient"
                                        style={{
                                        height: '100%',
                                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
                                    }}></motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
