import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import PixelCharacter from './PixelCharacter';

export default function About() {
  const { setCharacterPosition } = useStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      setCharacterPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setCharacterPosition]);

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '300px',
            }}
          >
            <PixelCharacter width={48} height={64} scale={6} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '12px',
              lineHeight: '2',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                marginBottom: '20px',
                color: 'var(--primary-yellow)',
              }}
            >
              Say Hi from Ngoc, Fullstack Developer
            </h3>
            <p style={{ marginBottom: '24px', fontSize: '12px' }}>
              My energy never runs out at work!
            </p>
            <p style={{ marginBottom: '24px', fontSize: '12px' }}>
              As a developer, I specialize in creating elegantly simple solutions, and I'm deeply passionate about my craft. It's just as straightforward as that! My approach prioritizes simplicity and beauty in every project I undertake. This philosophy fuels my passion and commitment to excellence every day.
            </p>
            <p style={{ marginBottom: '24px', fontSize: '12px' }}>
              Every great website begin with an even better story. I used to work in chemical engineering, but my passion for IT, which ignited during middle school, led me back to the tech world. Exploring frontend development excites me because I aim to deliver top products that not only meet consumer needs but exceed expectations.
            </p>
            <p style={{ marginBottom: '24px', fontSize: '12px' }}>
              Move your mouse around to see the character follow your cursor!
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '28px',
              }}
            >
              <span
                className="pixel-border"
                style={{
                  padding: '10px 20px',
                  fontSize: '10px',
                  backgroundColor: 'var(--primary-cyan)',
                  color: 'var(--text-dark)',
                }}
              >
                Fullstack Developer
              </span>
              <span
                className="pixel-border"
                style={{
                  padding: '10px 20px',
                  fontSize: '10px',
                  backgroundColor: 'var(--primary-yellow)',
                  color: 'var(--text-dark)',
                }}
              >
                Ho Chi Minh City
              </span>
              <span
                className="pixel-border"
                style={{
                  padding: '10px 20px',
                  fontSize: '10px',
                  backgroundColor: 'var(--primary-mint)',
                  color: 'var(--text-dark)',
                }}
              >
                Since 06/2021
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

