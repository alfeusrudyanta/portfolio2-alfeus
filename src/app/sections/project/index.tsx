import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PROJECT_DATA } from './constants';
import { ProjectCard } from './project-card';

export const Project = () => {
  return (
    <Section id='project'>
      {/* Title */}
      <div className='flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-0'>
        <div className='flex flex-col gap-2 md:max-w-171.5'>
          <span className='display-sm-bold md:display-xl-bold tracking-[-0.02em] md:tracking-[-0.03em]'>
            Design to <span className='text-primary-300'>Code Accuracy</span>
          </span>

          <span className='text-sm-medium md:text-md-medium md:tracking-[-0.03em]'>
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </span>
        </div>

        <Button
          variant='outline'
          className='flex h-14! items-center justify-between md:max-w-39'
        >
          <span className='text-md-semibold'>See All</span>

          <div className='flex size-9 items-center justify-center rounded-full bg-neutral-950'>
            <ArrowRight className='size-5 text-white' />
          </div>
        </Button>
      </div>

      {/* Project */}
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-3'>
        {PROJECT_DATA.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};
