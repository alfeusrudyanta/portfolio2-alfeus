import { Section } from '@/components/shared/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TechStackCard } from './tech-stack-card';
import { TECH_STACK_DATA } from './constants';
import { cn } from '@/lib/utils';

export const TechStack = () => {
  return (
    <Section
      id='tech-stack'
      background='bg-linear-to-b from-[#9E385E00] to-[#9E385E1A]'
    >
      {/* Title */}
      <div className='flex w-full flex-col gap-6 md:gap-12'>
        <div className='flex flex-col gap-2 px-1'>
          <span className='display-sm-bold md:display-xl-bold text-center tracking-[-0.02em] md:tracking-[-0.03em]'>
            Code, Design, and Everything in Between
          </span>

          <span className='text-sm-medium md:text-md-medium text-center md:tracking-[-0.03em]'>
            These are the technologies that power my workflow and bring ideas to
            life.
          </span>
        </div>

        {/* Tech Stack */}
        <Carousel opts={{ align: 'center', loop: true }} className='w-full'>
          <CarouselContent>
            <CarouselItem>
              <div className='flex items-center justify-center gap-4 md:gap-5'>
                {TECH_STACK_DATA.map((data, index) => (
                  <TechStackCard
                    key={data.title}
                    isEven={index % 2 === 0}
                    className={cn(index >= 2 ? 'hidden md:flex' : 'flex')}
                    {...data}
                  />
                ))}
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className='flex items-center justify-center gap-4 md:gap-5'>
                {TECH_STACK_DATA.map((data, index) => (
                  <TechStackCard
                    key={data.title}
                    isEven={index % 2 === 0}
                    className={cn(index < 2 ? 'hidden md:flex' : 'flex')}
                    {...data}
                  />
                ))}
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className='mt-8 flex items-center justify-center gap-3'>
            <CarouselPrevious className='static top-0 translate-y-0 p-5.5' />
            <CarouselNext className='static top-0 translate-y-0 p-5.5' />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};
