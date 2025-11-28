import { motion } from 'framer-motion';
import PixelIcon from './PixelIcon';
import { getSkillIcon } from '../utils/iconUtils';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'HTML', level: 98 },
  { name: 'CSS', level: 95 },
  { name: 'Git', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'EKS', level: 75 },
  { name: 'Kubernetes', level: 75 },
  { name: 'CI/CD', level: 80 },
  { name: 'Microservices', level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SKILLS
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="pixel-card"
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <PixelIcon
                  src={getSkillIcon(skill.name)}
                  alt={skill.name}
                  size={48}
                />
              </div>
              <h3
                style={{
                  fontSize: '12px',
                  marginBottom: '12px',
                  color: 'var(--text-dark)',
                }}
              >
                {skill.name}
              </h3>
              <div
                style={{
                  width: '100%',
                  height: '20px',
                  backgroundColor: 'var(--text-light)',
                  border: '2px solid var(--border-black)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--health-green)',
                    borderRight: '2px solid var(--border-black)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '8px',
                    color: 'var(--text-dark)',
                    fontWeight: 'bold',
                  }}
                >
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

