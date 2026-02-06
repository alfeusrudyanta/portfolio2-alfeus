import { Variants } from 'motion';

export const glossyVariants = {
  initial: {
    filter: 'brightness(1) contrast(1) saturate(1)',
    scale: 0.95,
  },
  animate: {
    filter: [
      'brightness(1) contrast(1) saturate(1)',
      'brightness(1.3) contrast(1.2) saturate(1.3)',
      'brightness(1) contrast(1) saturate(1)',
    ],
    scale: [1, 1.05, 1],
  },
};

export const HeaderVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};
