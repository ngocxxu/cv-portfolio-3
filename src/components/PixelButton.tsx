import { motion } from 'framer-motion';
import { ReactNode, CSSProperties, useState, useRef } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
}

export default function PixelButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  style,
}: PixelButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--primary-cyan)',
      boxShadow: '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 20px rgba(78, 205, 196, 0.3)',
    },
    secondary: {
      backgroundColor: 'var(--primary-yellow)',
      boxShadow: '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 20px rgba(255, 230, 109, 0.3)',
    },
    danger: {
      backgroundColor: 'var(--primary-red)',
      boxShadow: '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 20px rgba(255, 107, 107, 0.3)',
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      
      setRipples((prev) => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 600);
    }
    
    onClick?.();
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={`pixel-button ${className}`}
      style={{ ...variantStyles[variant], ...style, position: 'relative', overflow: 'hidden' }}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 30px rgba(78, 205, 196, 0.6), 0 0 60px rgba(78, 205, 196, 0.4)'
          : variant === 'secondary'
          ? '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 30px rgba(255, 230, 109, 0.6), 0 0 60px rgba(255, 230, 109, 0.4)'
          : '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 0 30px rgba(255, 107, 107, 0.6), 0 0 60px rgba(255, 107, 107, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: [0.6, 0],
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </motion.button>
  );
}

