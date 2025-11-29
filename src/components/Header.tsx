import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import PixelButton from './PixelButton';
import { staggerContainer, staggerItem } from '../utils/animations';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { activeSection, setActiveSection, menuOpen, setMenuOpen } = useStore();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const timeout = setTimeout(() => {
      checkMobile();
    }, 0);
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'var(--bg-dark)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '4px solid var(--border-black)',
        boxShadow: scrolled 
          ? '0 4px 0 0 var(--border-white), 0 0 20px rgba(78, 205, 196, 0.2)'
          : '0 4px 0 0 var(--border-white)',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '4px',
          backgroundColor: 'var(--primary-cyan)',
          boxShadow: '0 0 10px rgba(78, 205, 196, 0.8)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
        >
          <motion.div
            style={{
              fontSize: '14px',
              color: 'var(--primary-yellow)',
              cursor: 'pointer',
              textShadow: '0 0 10px rgba(255, 230, 109, 0.5)',
            }}
            onClick={() => scrollToSection('about')}
            whileHover={{ 
              scale: 1.1,
              textShadow: '0 0 20px rgba(255, 230, 109, 0.8)',
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            NGOC QUACH
          </motion.div>

          <nav
            style={{
              display: !isMobile ? 'flex' : 'none',
              flexDirection: 'row',
              gap: '12px',
            }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: '12px' }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  style={{ position: 'relative' }}
                >
                  <PixelButton
                    onClick={() => scrollToSection(item.id)}
                    variant={activeSection === item.id ? 'secondary' : 'primary'}
                    className="nav-button"
                    style={{
                      fontSize: '10px',
                      padding: '10px 20px',
                    }}
                  >
                    {item.label}
                  </PixelButton>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '4px',
                        backgroundColor: 'var(--primary-yellow)',
                        boxShadow: '0 0 10px rgba(255, 230, 109, 0.8)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </nav>

          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-light)',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px',
                position: 'relative',
                zIndex: 1001,
              }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ☰
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-dark)',
              padding: '16px',
              borderBottom: '4px solid var(--border-black)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PixelButton
                    onClick={() => scrollToSection(item.id)}
                    variant={activeSection === item.id ? 'secondary' : 'primary'}
                    style={{
                      fontSize: '10px',
                      padding: '10px 20px',
                      width: '100%',
                    }}
                  >
                    {item.label}
                  </PixelButton>
                </motion.div>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

