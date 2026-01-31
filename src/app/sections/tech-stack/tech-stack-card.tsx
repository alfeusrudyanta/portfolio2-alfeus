import { cn } from '@/lib/utils';
import Image from 'next/image';

export const TechStackCard: React.FC<TechStackCardProps> = ({
  isEven,
  imageSrc,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-53.75 flex-col items-center justify-center gap-3 rounded-full px-4 py-10',
        isEven ? 'bg-neutral-25 border border-neutral-300' : 'bg-secondary-100',
        className
      )}
    >
      <div className='size-15 gap-2.5 rounded-full bg-neutral-100 p-2.5'>
        <Image src={imageSrc} alt={title} width={60} height={60} />
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <span className='text-md-semibold'>{title}</span>
        <span className='text-neutral-800'>{description}</span>
      </div>
    </div>
  );
};
