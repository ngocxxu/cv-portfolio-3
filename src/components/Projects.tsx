import { motion } from 'framer-motion';
import PixelCard from './PixelCard';
import PixelIcon from './PixelIcon';
import { getProjectIcon } from '../utils/iconUtils';

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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PixelCard>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <PixelIcon
                    src={getProjectIcon(project.type)}
                    alt={project.type}
                    size={32}
                  />
                  <h3
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-dark)',
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '8px',
                    lineHeight: '1.6',
                    color: 'var(--text-dark)',
                    marginBottom: '16px',
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '6px',
                        padding: '4px 8px',
                        backgroundColor: 'var(--primary-cyan)',
                        color: 'var(--text-dark)',
                        border: '2px solid var(--border-black)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '8px',
                        color: 'var(--primary-red)',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                    >
                      🌐 Demo
                    </a>
                  )}
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '8px',
                        color: 'var(--primary-cyan)',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                    >
                      💻 Frontend
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '8px',
                        color: 'var(--primary-cyan)',
                        textDecoration: 'none',
                        display: 'inline-block',
                      }}
                    >
                      ⚙️ Backend
                    </a>
                  )}
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

