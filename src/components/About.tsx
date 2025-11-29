import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';
import PixelCharacter from './PixelCharacter';
import { staggerContainer, staggerItem } from '../utils/animations';

const typingText = 'ABOUT ME';
const typingSpeed = 100;

export default function About() {
  const { setCharacterPosition } = useStore();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      setCharacterPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setCharacterPosition]);

  useEffect(() => {
    if (isTyping && displayedText.length < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(typingText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === typingText.length && isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping]);

  const paragraphs = [
    'My energy never runs out at work!',
    "As a developer, I specialize in creating elegantly simple solutions, and I'm deeply passionate about my craft. It's just as straightforward as that! My approach prioritizes simplicity and beauty in every project I undertake. This philosophy fuels my passion and commitment to excellence every day.",
    'Every great website begin with an even better story. I used to work in chemical engineering, but my passion for IT, which ignited during middle school, led me back to the tech world. Exploring frontend development excites me because I aim to deliver top products that not only meet consumer needs but exceed expectations.',
    'Move your mouse around to see the character follow your cursor!',
  ];

  const badges = [
    { text: 'Fullstack Developer', color: 'var(--primary-cyan)' },
    { text: 'Ho Chi Minh City', color: 'var(--primary-yellow)' },
    { text: 'Since 06/2021', color: 'var(--primary-mint)' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative' }}
        >
          {displayedText}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              style={{ marginLeft: '8px' }}
            >
              |
            </motion.span>
          )}
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
              position: 'relative',
              y: parallaxY,
              opacity,
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <PixelCharacter width={48} height={64} scale={6} />
            </motion.div>
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid rgba(78, 205, 196, 0.3)',
                pointerEvents: 'none',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
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
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                marginBottom: '20px',
                color: 'var(--primary-yellow)',
                textShadow: '0 0 10px rgba(255, 230, 109, 0.5)',
              }}
            >
              Say Hi from Ngoc, Fullstack Developer
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  variants={staggerItem}
                  style={{ marginBottom: '24px', fontSize: '12px' }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '28px',
              }}
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={index}
                  variants={staggerItem}
                  className="pixel-border"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(78, 205, 196, 0.5)',
                  }}
                  style={{
                    padding: '10px 20px',
                    fontSize: '10px',
                    backgroundColor: badge.color,
                    color: 'var(--text-dark)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

