import { Section } from '@/components/shared/section';
import { EXPERIENCE_DATA } from './constants';
import { ExperienceCard } from './experience-card';

export const Experience = () => {
  return (
    <Section id='experience' background='bg-neutral-950'>
      {/* Title */}
      <div className='flex w-full flex-col gap-2 px-1 md:flex-row md:items-center md:justify-between md:px-0'>
        <span className='display-sm-bold text-neutral-25 md:display-xl-bold tracking-[-0.02em] md:max-w-91.25 md:tracking-[-0.03em]'>
          Experiences That <span className='text-secondary-100'>Shaped Me</span>
          !
        </span>

        <span className='md:text-lg-semibold text-neutral-25 text-sm-semibold max-w-91.5 md:tracking-[-0.03em]'>
          From startups to side projects, every step has been a chance to learn,
          build, and level up.
        </span>
      </div>

      <div className='w-full border border-neutral-800' />

      {/* Experience */}
      <div className='flex w-full flex-col gap-4 md:gap-8'>
        {EXPERIENCE_DATA.map((experience, index) => (
          <div key={index} className='flex flex-col gap-4 md:gap-8'>
            <ExperienceCard {...experience} />

            {index < EXPERIENCE_DATA.length - 1 && (
              <div className='w-full border border-neutral-800' />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
