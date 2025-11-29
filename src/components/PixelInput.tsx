import { InputHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';

interface PixelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function PixelInput({
  label,
  className = '',
  onFocus,
  onBlur,
  ...props
}: PixelInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {label && (
        <motion.label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '12px',
            color: 'var(--text-dark)',
          }}
          animate={{
            color: isFocused ? 'var(--primary-cyan)' : 'var(--text-dark)',
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
      )}
      <motion.input
        className={`pixel-input ${className}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        animate={{
          boxShadow: isFocused
            ? 'inset 0 0 0 4px var(--border-white), inset 0 0 0 8px var(--border-black), 0 0 20px rgba(78, 205, 196, 0.4)'
            : 'inset 0 0 0 4px var(--border-white), inset 0 0 0 8px var(--border-black)',
        }}
        transition={{ duration: 0.3 }}
        {...props}
      />
    </div>
  );
}

