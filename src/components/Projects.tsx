import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import PixelCard from './PixelCard';
import PixelIcon from './PixelIcon';
import { getProjectIcon } from '../utils/iconUtils';
import { staggerContainer, staggerItem, slideInFromBottom } from '../utils/animations';

interface Project {
  title: string;
  description: string;
  type: string;
  technologies: string[];
  frontend?: string;
  backend?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Prowe Electronic',
    description: 'Web is a electronic e-commerce web which I built the backend from myself and combined it with the frontend.',
    type: 'web',
    technologies: ['React', 'Fullstack', 'Database'],
    frontend: 'https://github.com/ngocxxu/prowe_electronic_store',
    backend: 'https://github.com/ngocxxu/prowe_electronic_store_server',
    demo: 'https://prowe-electronic-store.web.app/',
  },
  {
    title: 'Real Estate',
    description: 'Web is a basic web with rental homes and for-sale properties, advanced property filtering.',
    type: 'web',
    technologies: ['Next.js', 'E-commerce', 'Trendy'],
    frontend: 'https://github.com/ngocxxu/Modern-Real-Estate-Project',
    demo: 'https://modern-real-estate-project.vercel.app/',
  },
  {
    title: 'Papzi Food',
    description: 'Web is used to buy or order fast food anything you want. I use API of CommerceJS to build it.',
    type: 'web',
    technologies: ['React', 'E-commerce', 'Foody'],
    frontend: 'https://github.com/ngocxxu/Foody_Web',
    demo: 'https://papzi-foody.web.app/',
  },
  {
    title: 'Vocabulary Management',
    description: 'Web is a vocab management web which I built the backend from myself and combined it with the frontend.',
    type: 'web',
    technologies: ['React', 'Fullstack', 'Vocabulary'],
    frontend: 'https://github.com/ngocxxu/vocab-management-fe',
    backend: 'https://github.com/ngocxxu/vocab-management-be',
    demo: 'https://vocab-management.web.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={slideInFromBottom}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <PixelCard>
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
          >
            <motion.div
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                filter: isHovered ? 'drop-shadow(0 0 10px rgba(78, 205, 196, 0.8))' : 'none',
              }}
              transition={{ duration: 0.5 }}
            >
              <PixelIcon
                src={getProjectIcon(project.type)}
                alt={project.type}
                size={32}
              />
            </motion.div>
            <motion.h3
              style={{
                fontSize: '14px',
                color: 'var(--text-dark)',
                margin: 0,
              }}
              animate={{
                textShadow: isHovered ? '0 0 10px rgba(78, 205, 196, 0.5)' : 'none',
              }}
            >
              {project.title}
            </motion.h3>
          </motion.div>
          
          <motion.p
            style={{
              fontSize: '10px',
              lineHeight: '1.8',
              color: 'var(--text-dark)',
              marginBottom: '20px',
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                variants={staggerItem}
                style={{
                  fontSize: '8px',
                  padding: '6px 12px',
                  backgroundColor: 'var(--primary-cyan)',
                  color: 'var(--text-dark)',
                  border: '2px solid var(--border-black)',
                  display: 'inline-block',
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-red)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  position: 'relative',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: 'var(--primary-red)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                🌐 Demo
              </motion.a>
            )}
            {project.frontend && (
              <motion.a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-cyan)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  position: 'relative',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: 'var(--primary-cyan)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                💻 Frontend
              </motion.a>
            )}
            {project.backend && (
              <motion.a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  color: 'var(--primary-cyan)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  position: 'relative',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: 'var(--primary-cyan)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                ⚙️ Backend
              </motion.a>
            )}
          </motion.div>
        </PixelCard>
      </motion.div>
    </motion.div>
  );
}

