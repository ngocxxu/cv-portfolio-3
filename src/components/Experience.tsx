import { motion } from 'framer-motion';
import PixelCard from './PixelCard';
import PixelIcon from './PixelIcon';
import { getExperienceIcon } from '../utils/iconUtils';

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
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
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
                  <div
                    style={{
                      flexShrink: 0,
                    }}
                  >
                    <PixelIcon
                      src={getExperienceIcon(exp.type)}
                      alt={exp.type}
                      size={48}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-dark)',
                        marginBottom: '8px',
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'var(--primary-red)',
                        marginBottom: '8px',
                      }}
                    >
                      {exp.company} • {exp.period}
                    </p>
                    <ul
                      style={{
                        fontSize: '8px',
                        lineHeight: '1.8',
                        color: 'var(--text-dark)',
                        paddingLeft: '16px',
                        margin: 0,
                      }}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '8px' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

