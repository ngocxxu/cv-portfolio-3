import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PixelCard({
  children,
  className = '',
  onClick,
}: PixelCardProps) {
  return (
    <motion.div
      className={`pixel-card ${className}`}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

