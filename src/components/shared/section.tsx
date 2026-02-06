'use client';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'motion/react';

const SectionVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

type SectionProps = {
  id?: string;
  className?: string;
  background?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  background,
  children,
}) => {
  return (
    <section id={id} className={cn(background)}>
      <motion.div
        variants={SectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          'mx-auto flex w-full max-w-360 flex-col items-center justify-center gap-6 px-4 py-10 md:gap-12 md:px-30 md:py-20',
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  );
};
