import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

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
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--primary-cyan)',
    },
    secondary: {
      backgroundColor: 'var(--primary-yellow)',
    },
    danger: {
      backgroundColor: 'var(--primary-red)',
    },
  };

  return (
    <motion.button
      type={type}
      className={`pixel-button ${className}`}
      style={{ ...variantStyles[variant], ...style }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

