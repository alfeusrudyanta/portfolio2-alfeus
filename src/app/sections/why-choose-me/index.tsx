import { Section } from '@/components/shared/section';
import { WhyChooseMeCard } from './why-choose-me-card';
import { WHY_CHOOSE_ME_DATA } from './constants';

export const WhyChooseMe = () => {
  return (
    <Section id='why-choose-me'>
      {/* Title */}
      <div className='flex flex-col gap-2'>
        <span className='display-sm-bold md:display-xl-bold text-center tracking-[-0.02em] md:tracking-[-0.03em]'>
          More Than Just Code
        </span>

        <span className='text-sm-medium md:text-md-medium text-center md:tracking-[-0.03em]'>
          We care about design, performance, and user experience all in one.
        </span>
      </div>

      {/* Why Choose Me */}
      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {WHY_CHOOSE_ME_DATA.map((profile) => (
          <WhyChooseMeCard key={profile.title} {...profile} />
        ))}
      </div>
    </Section>
  );
};
