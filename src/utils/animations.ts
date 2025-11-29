export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0 },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerItemHorizontal = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};

export const smoothTransition = {
  type: 'tween' as const,
  duration: 0.5,
  ease: 'easeOut' as const,
};

export const bounceTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 10,
};

export const createStaggerConfig = (delay: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
      delayChildren: 0.2,
    },
  },
});

export const createFadeInVariants = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 30
) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export const hoverScale = {
  scale: 1.05,
  transition: springTransition,
};

export const hoverGlow = {
  boxShadow:
    '0 0 20px rgba(78, 205, 196, 0.5), 0 0 40px rgba(78, 205, 196, 0.3)',
  transition: smoothTransition,
};

export const tapScale = {
  scale: 0.95,
};

export const viewportOptions = {
  once: true,
  amount: 0.3,
  margin: '-100px',
};
