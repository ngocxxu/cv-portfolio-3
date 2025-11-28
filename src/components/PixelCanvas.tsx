import { useEffect, useRef } from 'react';
import { setupPixelCanvas, type CanvasContext } from '../utils/canvasUtils';

interface PixelCanvasProps {
  pixelWidth: number;
  pixelHeight: number;
  scale?: number;
  onSetup?: (context: CanvasContext) => void;
  className?: string;
}

export default function PixelCanvas({
  pixelWidth,
  pixelHeight,
  scale = 4,
  onSetup,
  className = '',
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = setupPixelCanvas(canvas, pixelWidth, pixelHeight, scale);
    if (context && onSetup) {
      onSetup(context);
    }
  }, [pixelWidth, pixelHeight, scale, onSetup]);

  return (
    <canvas
      ref={canvasRef}
      className={`pixelated ${className}`}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}

