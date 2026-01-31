import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

export const WhyChooseMeCard: React.FC<WhyChooseMeCardProps> = ({
  title,
  imageSrc,
  isMe,
  list,
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-6 rounded-2xl px-4 py-8 md:gap-8 md:px-8',
        isMe ? 'bg-secondary-100' : 'border border-neutral-300 bg-white'
      )}
    >
      <div className='flex flex-col items-center justify-center gap-3 md:gap-6'>
        <span
          className={cn(
            'text-center',
            isMe ? 'text-lg-bold' : 'text-lg-semibold tracking-[-0.03em]'
          )}
        >
          {title}
        </span>

        <div
          className={cn(
            'flex size-20 items-center justify-center overflow-hidden rounded-full md:size-25',
            isMe ? 'bg-primary-300' : 'bg-neutral-300'
          )}
        >
          <Image
            src={imageSrc}
            alt={title}
            height={45}
            width={45}
            className={cn(
              isMe ? 'w-full pt-2 pl-2 md:pl-3' : 'size-11.25 md:size-15'
            )}
          />
        </div>
      </div>

      <div className='flex flex-col gap-3 md:gap-6'>
        {list.map((text, index) => (
          <div key={index} className='flex items-center justify-center gap-3'>
            {isMe && <Check className='size-6' />}
            {!isMe && <X className='size-6 stroke-[#E5352D]' />}

            <span className='text-md-semibold md:text-lg-semibold tracking-[-0.03em]'>
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
