import { Section } from '@/components/shared/section';

export const About = () => {
  return (
    <Section id='about' className='text-center'>
      <span className='display-sm-medium md:display-lg-medium tracking-[-0.03em] md:max-w-223 md:tracking-[-0.02em]'>
        As frontend developers , we bring designs to life with{' '}
        <span className='text-primary-300'>clean</span>,{' '}
        <span className='text-primary-300'>responsive code</span> that blends
        creativity 🎨 with usability 🌟.
      </span>
    </Section>
  );
};
