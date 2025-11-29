import { motion } from 'framer-motion';
import { useState } from 'react';
import PixelCard from './PixelCard';
import PixelIcon from './PixelIcon';
import { getExperienceIcon } from '../utils/iconUtils';
import { staggerContainer, staggerItem } from '../utils/animations';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: string;
}

const experiences: Experience[] = [
  {
    title: 'Fullstack Developer',
    company: 'ST Engineering',
    period: '10/2024 - Present',
    description: [
      'Implemented CI/CD pipelines for software deployment, reducing manual processes and improving team efficiency.',
      'Supported microservices deployment on Amazon EKS, gaining hands-on experience with Kubernetes and containerization.',
      'Collaborated with cross-functional teams to learn and apply DevOps best practices.',
      'Designed and implemented scalable backend systems using modern frameworks and technologies.',
      'Set up and configured new projects backend from scratch, including defining architecture and integrating APIs.',
    ],
    type: 'achievement',
  },
  {
    title: 'Frontend Developer',
    company: 'Nexon Co., Ltd.',
    period: '06/2022 - 09/2024',
    description: [
      'Development of services required for publishing and management by using Attendance page.',
      'Developing and implementing highly-responsive user interface components using React concepts.',
      'Troubleshooting interface software and debugging application codes.',
      'Develop and optimize front-end UI to ensure consistent rendering in browser environments.',
      'Collaborate with Backend Engineers to build features and experiments.',
      'Monitoring and improving front-end performance.',
    ],
    type: 'experience',
  },
  {
    title: 'Frontend Developer',
    company: 'MiTek Vietnam (Platinum Global Co., Ltd.)',
    period: '11/2021 - 05/2022',
    description: [
      'Design, code, test and debug new software utilizing technologies for assigned projects.',
      'Website about construction process management, displaying materials, time and labor information.',
      'Participate in resolving production issues and tackling bugs in the system.',
      'Collaborate with Product Management, Software Quality Assurance, and other development teams.',
      'Work in an Agile software development environment using Scrum methodology.',
    ],
    type: 'experience',
  },
  {
    title: 'Frontend Developer (Intern)',
    company: 'Kyanon Digital',
    period: '06/2021 - 08/2021',
    description: [
      'Building UI for landing pages on client-side and server-side.',
      'Join in realistic projects and daily meetings with team and customer.',
      'Participate in projects to develop web applications.',
      'Work with other project members, responsible for implementation & code review.',
      'Ensure assigned tasks to be performed on-time and with high quality.',
    ],
    type: 'experience',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          EXPERIENCE
        </motion.h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '40px',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, var(--primary-cyan) 0%, var(--primary-yellow) 100%)',
              borderRadius: '2px',
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {experiences.map((exp, index) => (
              <ExperienceItem key={`${exp.company}-${exp.period}`} exp={exp} index={index} isLast={index === experiences.length - 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index, isLast }: { exp: Experience; index: number; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      style={{ position: 'relative' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          position: 'absolute',
          left: '-32px',
          top: '24px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-cyan)',
          border: '4px solid var(--border-black)',
          boxShadow: '0 0 0 4px var(--border-white), 0 0 20px rgba(78, 205, 196, 0.6)',
          zIndex: 2,
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          boxShadow: isHovered
            ? '0 0 0 4px var(--border-white), 0 0 30px rgba(78, 205, 196, 0.9)'
            : '0 0 0 4px var(--border-white), 0 0 20px rgba(78, 205, 196, 0.6)',
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <PixelCard>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
            }}
          >
            <motion.div
              style={{
                flexShrink: 0,
              }}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
                filter: isHovered ? 'drop-shadow(0 0 15px rgba(78, 205, 196, 0.8))' : 'none',
              }}
              transition={{ duration: 0.5 }}
            >
              <PixelIcon
                src={getExperienceIcon(exp.type)}
                alt={exp.type}
                size={48}
              />
            </motion.div>
            <div
              style={{
                flex: 1,
              }}
            >
              <motion.h3
                style={{
                  fontSize: '16px',
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                }}
                animate={{
                  textShadow: isHovered ? '0 0 10px rgba(78, 205, 196, 0.5)' : 'none',
                }}
              >
                {exp.title}
              </motion.h3>
              <motion.p
                style={{
                  fontSize: '12px',
                  color: 'var(--primary-red)',
                  marginBottom: '12px',
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
              >
                {exp.company} • {exp.period}
              </motion.p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                style={{
                  fontSize: '10px',
                  lineHeight: '2',
                  color: 'var(--text-dark)',
                  paddingLeft: '20px',
                  margin: 0,
                }}
              >
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={staggerItem}
                    style={{ marginBottom: '12px', listStyle: 'disc' }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </PixelCard>
      </motion.div>
    </motion.div>
  );
}

