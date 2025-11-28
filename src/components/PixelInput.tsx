import { InputHTMLAttributes } from 'react';

interface PixelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function PixelInput({
  label,
  className = '',
  ...props
}: PixelInputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '12px',
            color: 'var(--text-light)',
          }}
        >
          {label}
        </label>
      )}
      <input
        className={`pixel-input ${className}`}
        {...props}
      />
    </div>
  );
}

