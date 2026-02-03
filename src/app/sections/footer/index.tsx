import { FOOTER_DATA } from './constants';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='bg-neutral-950'>
      <div className='mx-auto flex w-full max-w-360 flex-col items-start justify-center gap-6 px-4 py-8 md:flex-row-reverse md:items-center md:justify-between md:gap-68.75 md:px-32 md:py-6'>
        <div className='flex items-center gap-3 md:gap-4'>
          {FOOTER_DATA.map((icon) => (
            <div
              key={icon.name}
              className='flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-800'
            >
              <Image
                src={icon.imageSrc}
                alt={icon.name}
                width={20}
                height={20}
                className='size-5 object-contain pt-px pl-0.5'
              />
            </div>
          ))}
        </div>

        <span className='text-xs-regular text-neutral-25 md:text-md-regular md:tracking-[0.03em]'>
          © 2025 Edwin Anderson. All rights reserved.
        </span>
      </div>
    </div>
  );
};
