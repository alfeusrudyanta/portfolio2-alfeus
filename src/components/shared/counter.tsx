'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Counter = {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
};

export const Counter: React.FC<Counter> = ({
  duration,
  from,
  to,
  suffix = '',
}) => {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const frameRate = 60;
      const increment = (end - start) / (duration * frameRate);
      let currentFrame = 0;
      const totalFrame = duration * frameRate;

      const interval = setInterval(() => {
        start += increment;
        currentFrame++;
        if (currentFrame >= totalFrame) {
          start = end;
          clearInterval(interval);
        }
        setCurrentValue(Math.floor(start));
      }, 1000 / frameRate);

      control.start({ opacity: 1, transition: { duration: 0.5 } });

      return () => clearInterval(interval);
    }
  }, [control, duration, from, inView, to]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      animate={control}
      className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-white'
    >
      {currentValue}
      {suffix}
    </motion.span>
  );
};
