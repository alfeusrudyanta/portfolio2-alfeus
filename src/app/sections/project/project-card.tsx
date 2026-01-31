import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className='flex cursor-pointer flex-col'>
      <div className='relative gap-2 rounded-3xl bg-neutral-100 p-4'>
        <div className='rounded-md'>
          <Image
            src={imageSrc}
            alt={title}
            height={354}
            width={354}
            className='aspect-square w-full'
          />
        </div>
      </div>

      <div className='flex items-center rounded-3xl bg-neutral-100 p-4'>
        <div className='flex w-full flex-col gap-3'>
          <span className='text-md-bold md:text-lg-bold tracking-[-0.02em] md:tracking-normal'>
            {title}
          </span>

          <div className='w-full border border-neutral-300' />

          <span className='text-xs-medium md:text-md-medium text-neutral-600 md:tracking-[-0.03em]'>
            {description}
          </span>
        </div>

        <Button size='icon'>
          <ArrowRight className='size-5' />
        </Button>
      </div>
    </div>
  );
};
