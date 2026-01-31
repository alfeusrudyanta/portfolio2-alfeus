import { Section } from '@/components/shared/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { TESTIMONIAL_DATA } from './constants';
import { TestimonialCard } from './testimonial-card';

export const Testimonial = () => {
  return (
    <Section id='testimonial'>
      {/* Title */}
      <div className='flex w-full flex-col gap-2 px-1 md:px-0'>
        <span className='display-sm-bold md:display-xl-bold text-center tracking-[-0.02em] md:tracking-[-0.03em]'>
          What They Say About Working With Me
        </span>

        <span className='md:text-md-medium text-sm-medium text-center md:tracking-[-0.03em]'>
          Real words from clients, teammates, and mentors I’ve collaborated with
          on various projects.
        </span>
      </div>

      {/* Testimonial */}
      <Carousel opts={{ align: 'center', loop: true }} className='w-full'>
        <CarouselContent>
          {TESTIMONIAL_DATA.map((data, index) => (
            <CarouselItem key={index}>
              <TestimonialCard {...data} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='mt-6 flex items-center justify-center gap-3 md:mt-10'>
          <CarouselPrevious className='static top-0 translate-y-0 p-5.5' />
          <CarouselNext className='static top-0 translate-y-0 p-5.5' />
        </div>
      </Carousel>
    </Section>
  );
};
