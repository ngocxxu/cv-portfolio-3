import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import PixelButton from './PixelButton';

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '4px solid var(--border-black)',
        boxShadow: '0 4px 0 0 var(--border-white)',
      }}
    >
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
            }}
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            NGOC QUACH
          </motion.div>

          <nav
            style={{
              display: !isMobile ? 'flex' : menuOpen ? 'flex' : 'none',
              flexDirection: !isMobile ? 'row' : 'column',
              gap: '12px',
              position: !isMobile ? 'static' : 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: !isMobile ? 'transparent' : 'var(--bg-dark)',
              padding: !isMobile ? 0 : '16px',
              borderBottom: !isMobile ? 'none' : '4px solid var(--border-black)',
            }}
          >
            {navItems.map((item) => (
              <PixelButton
                key={item.id}
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
            ))}
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
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ☰
            </motion.button>
          )}
        </div>
      </div>
    </header>
  );
}

