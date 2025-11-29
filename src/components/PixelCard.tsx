import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`pixel-card ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        rotateY: 2,
        rotateX: -2,
        scale: 1.02,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 12px 0 0 var(--border-black), 0 0 30px rgba(78, 205, 196, 0.3)'
            : '0 0 0 4px var(--border-white), 0 0 0 8px var(--border-black), 0 8px 0 0 var(--border-black)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
        }}
      />
      {children}
    </motion.div>
  );
}

