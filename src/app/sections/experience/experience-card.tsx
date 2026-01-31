import Image from 'next/image';

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  timeline,
  title,
  imageSrc,
  imageAlt,
  description,
}) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
      {/* First */}
      <div className='flex w-full max-w-44.5 flex-col gap-1'>
        <span className='text-sm-medium text-neutral-400'>{timeline}</span>

        <span className='md:text-xl-bold text-neutral-25 text-md-bold tracking-[-0.02em] md:tracking-normal'>
          {title}
        </span>
      </div>

      {/* Second */}
      <div className='h-fit w-30.25 rounded-2xl border border-neutral-800 p-1.25 md:w-48'>
        <div className='h-fit rounded-lg border border-neutral-800 p-3.75 md:p-6'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={48}
            width={128}
            className='w-full'
          />
        </div>
      </div>

      {/* Third */}
      <span className='w-full max-w-128.25 text-neutral-400'>
        {description}
      </span>
    </div>
  );
};
