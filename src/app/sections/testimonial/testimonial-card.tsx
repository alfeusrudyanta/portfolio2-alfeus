import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  star,
  comment,
  imageSrc,
  name,
  occupation,
}) => {
  return (
    <div className='relative mb-4.75 md:mb-10.75'>
      <div className='bg-primary-300 flex w-full flex-col gap-8 rounded-2xl p-6 md:rounded-4xl md:px-10 md:py-8'>
        <div className='flex flex-col gap-4'>
          <div className='mx-auto flex items-center'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={cn(
                  'size-6 stroke-0',
                  index + 1 <= star ? 'fill-secondary-100' : 'fill-neutral-500'
                )}
              />
            ))}
          </div>

          <span className='text-neutral-25 text-lg-semibold md:display-xs-semibold text-center tracking-[-0.03em]'>
            {comment}
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='mx-auto size-16 overflow-hidden rounded-full'>
            <Image src={imageSrc} alt={name} height={64} width={64} />
          </div>

          <div className='flex flex-col'>
            <span className='text-lg-semibold text-neutral-25 text-center tracking-[-0.03em]'>
              {name}
            </span>

            <span className='text-md-medium text-neutral-25 text-center tracking-[-0.03em]'>
              {occupation}
            </span>
          </div>
        </div>

        {/* Overlay */}
        <div className='absolute -bottom-2.5 left-1/2 -z-10 h-full w-[91.6%] -translate-x-1/2 rounded-2xl bg-[#D4A0B3] md:-bottom-5.25 md:rounded-4xl' />
        <div className='absolute -bottom-4.75 left-1/2 -z-20 h-full w-[83.3%] -translate-x-1/2 rounded-2xl bg-[#B7608033] md:-bottom-10.75 md:rounded-4xl' />
      </div>
    </div>
  );
};
