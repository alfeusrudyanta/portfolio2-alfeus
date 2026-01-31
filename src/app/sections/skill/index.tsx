import { Section } from '@/components/shared/section';
import { SkillCard } from './skill-card';
import { SKILL_DATA } from './constants';

export const Skill = () => {
  return (
    <Section id='skill'>
      <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
        {SKILL_DATA.map((skill, index) => (
          <div
            key={skill.id}
            className='flex flex-col gap-4 md:flex-row md:gap-10'
          >
            <SkillCard {...skill} />
            {index < SKILL_DATA.length - 1 && (
              <div className='w-full border border-neutral-300 md:my-auto md:h-[80%] md:w-px' />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
