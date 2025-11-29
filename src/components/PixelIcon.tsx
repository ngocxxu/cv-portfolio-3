import { ImgHTMLAttributes } from 'react';

interface PixelIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: number;
}

export default function PixelIcon({
  src,
  alt,
  size = 32,
  className = '',
  ...props
}: PixelIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`pixelated ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...props}
    />
  );
}

