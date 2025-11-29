import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--primary-cyan)',
              border: '4px solid var(--border-black)',
              boxShadow: '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 30px rgba(78, 205, 196, 0.6)',
              cursor: 'pointer',
              zIndex: 999,
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 40px rgba(78, 205, 196, 0.9)',
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: 'var(--bg-dark)',
          borderTop: '4px solid var(--border-black)',
          boxShadow: '0 -4px 0 0 var(--border-white), 0 -8px 20px rgba(0, 0, 0, 0.3)',
          padding: '24px 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--primary-cyan), transparent)',
          }}
          animate={{
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="container">
          <motion.p
            style={{
              fontSize: '8px',
              color: 'var(--text-light)',
              margin: 0,
            }}
            animate={{
              textShadow: [
                '0 0 5px rgba(255, 255, 255, 0.3)',
                '0 0 10px rgba(78, 205, 196, 0.5)',
                '0 0 5px rgba(255, 255, 255, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            © 2024 PORTFOLIO - PIXEL GAME STYLE
          </motion.p>
          <motion.p
            style={{
              fontSize: '6px',
              color: 'var(--primary-cyan)',
              marginTop: '8px',
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Made with React + TypeScript + Bun
          </motion.p>
        </div>
      </motion.footer>
    </>
  );
}

