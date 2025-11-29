import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import PixelIcon from './PixelIcon';
import { getSkillIcon } from '../utils/iconUtils';
import { staggerContainer, staggerItem } from '../utils/animations';

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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const progress = useMotionValue(0);
  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      variants={staggerItem}
      className="pixel-card"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: -5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            filter: isHovered ? 'drop-shadow(0 0 15px rgba(78, 205, 196, 0.8))' : 'drop-shadow(0 0 5px rgba(78, 205, 196, 0.3))',
          }}
          transition={{ duration: 0.3 }}
        >
          <PixelIcon
            src={getSkillIcon(skill.name)}
            alt={skill.name}
            size={48}
          />
        </motion.div>
      </motion.div>
      
      <motion.h3
        style={{
          fontSize: '14px',
          marginBottom: '16px',
          color: 'var(--text-dark)',
        }}
        animate={{
          textShadow: isHovered ? '0 0 10px rgba(78, 205, 196, 0.5)' : 'none',
        }}
      >
        {skill.name}
      </motion.h3>
      
      <div
        style={{
          width: '100%',
          height: '24px',
          backgroundColor: 'var(--text-light)',
          border: '3px solid var(--border-black)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isHovered ? '0 0 20px rgba(78, 205, 196, 0.4)' : 'none',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          onAnimationStart={() => progress.set(skill.level)}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--health-green) 0%, var(--primary-cyan) 100%)',
            borderRight: '3px solid var(--border-black)',
            position: 'relative',
            boxShadow: isHovered 
              ? '0 0 20px rgba(78, 205, 196, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)'
              : '0 0 10px rgba(78, 205, 196, 0.3)',
          }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
            animate={{
              opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '10px',
            color: 'var(--text-dark)',
            fontWeight: 'bold',
            zIndex: 1,
            textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        >
          {skill.level}%
        </motion.div>
      </div>
    </motion.div>
  );
}

