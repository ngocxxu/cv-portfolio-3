export interface CanvasContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  scale: number;
}

export function setupPixelCanvas(
  canvas: HTMLCanvasElement,
  pixelWidth: number,
  pixelHeight: number,
  scale: number = 1
): CanvasContext | null {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = 'low';

  const width = pixelWidth * scale;
  const height = pixelHeight * scale;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(scale, scale);

  return { ctx, width, height, scale };
}

export function clearCanvas(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.clearRect(0, 0, width, height);
}

export function drawPixel(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

export function drawRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string
): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

export function drawSprite(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number
): void {
  ctx.drawImage(image, x, y, width, height);
}

export function getIntegerScale(
  containerWidth: number,
  containerHeight: number,
  pixelWidth: number,
  pixelHeight: number
): number {
  const scaleX = Math.floor(containerWidth / pixelWidth);
  const scaleY = Math.floor(containerHeight / pixelHeight);
  return Math.max(1, Math.min(scaleX, scaleY));
}

