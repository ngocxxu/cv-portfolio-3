import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import PixelCanvas from './PixelCanvas';
import { clearCanvas, drawRect, type CanvasContext } from '../utils/canvasUtils';

interface PixelCharacterProps {
  width?: number;
  height?: number;
  scale?: number;
}

export default function PixelCharacter({
  width = 32,
  height = 48,
  scale = 4,
}: PixelCharacterProps) {
  const { characterPosition } = useStore();
  const animationFrameRef = useRef<number>();

  const drawCharacter = (context: CanvasContext) => {
    const { ctx } = context;
    clearCanvas(ctx, width, height);

    const bodyColor = '#4ecdc4';
    const headColor = '#ffe66d';
    const eyeColor = '#000';

    drawRect(ctx, 8, 0, 16, 16, headColor);
    drawRect(ctx, 12, 4, 4, 4, eyeColor);
    drawRect(ctx, 16, 4, 4, 4, eyeColor);
    drawRect(ctx, 10, 10, 12, 4, '#ff6b6b');

    drawRect(ctx, 6, 16, 20, 24, bodyColor);
    drawRect(ctx, 4, 20, 4, 16, '#95e1d3');
    drawRect(ctx, 24, 20, 4, 16, '#95e1d3');
    drawRect(ctx, 8, 40, 6, 8, '#000');
    drawRect(ctx, 18, 40, 6, 8, '#000');
  };

  const handleSetup = (context: CanvasContext) => {
    drawCharacter(context);
  };

  return (
    <motion.div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      animate={{
        x: characterPosition.x,
        y: characterPosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
    >
      <PixelCanvas
        pixelWidth={width}
        pixelHeight={height}
        scale={scale}
        onSetup={handleSetup}
      />
    </motion.div>
  );
}

