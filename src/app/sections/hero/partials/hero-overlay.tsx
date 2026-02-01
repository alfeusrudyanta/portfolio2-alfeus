import { Mouse } from 'lucide-react';
import Image from 'next/image';
import { HERO_ICONS_DATA } from '../constants';

export const HeroOverlay = () => {
  return (
    <>
      {/* Icon Overlay */}
      <div className='border-primary-300 absolute bottom-126.75 left-30 hidden flex-col gap-5.25 rounded-full border px-5.25 py-8 md:flex'>
        {HERO_ICONS_DATA.map((icon) => (
          <div
            key={icon.alt}
            className='border-primary-300 flex size-17.25 items-center justify-center rounded-full border p-3'
          >
            <Image
              src={icon.imageSrc}
              alt={icon.alt}
              width={51}
              height={51}
              className='size-full'
            />
          </div>
        ))}
      </div>

      {/* Image Overlay */}
      <div className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2'>
        {/* Text */}
        <div className='relative'>
          <span className='text-secondary-100 font-anton absolute top-13 left-1/2 -z-40 h-auto w-auto -translate-x-1/2 text-[clamp(6.20rem,12.50vw,11.50rem)]'>
            FRONTEND
          </span>

          <span
            className='text-secondary-100 font-anton absolute left-1/2 -z-40 h-auto w-auto -translate-x-1/2 text-[clamp(5.65rem,11.48vw,10.50rem)]'
            style={{ top: 'clamp(9.40rem, 17vw, 14rem)' }}
          >
            DEVELOPER
          </span>

          <span
            className='font-anton absolute left-1/2 z-10 h-auto w-auto -translate-x-1/2 text-[clamp(5.65rem,11.48vw,10.50rem)]'
            style={{
              top: 'clamp(9.40rem, 17vw, 14rem)',
              WebkitTextStroke: '1px #F3B64C',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DEVELOPER
          </span>

          <span
            className='font-bonheurRoyale absolute z-10 -rotate-12 text-[clamp(4.04rem,7.86vw,7.08rem)] text-white'
            style={{
              top: 'clamp(-2.7rem, calc(-8.8vw + 5rem), 2.5rem)',
              left: 'clamp(-6.99rem, calc(-12.9vw + 5rem), 0rem)',
            }}
          >
            Junior
          </span>
        </div>

        {/* Text */}
        <div
          className='absolute left-1/2 flex -translate-x-1/2 items-center gap-0.5'
          style={{
            bottom: 'clamp(1.25rem, 2.78vw, 2.5rem)',
          }}
        >
          <span className='text-xs-semibold md:text-md-semibold tracking-[-0.03em] text-white md:tracking-normal'>
            Scroll Down
          </span>

          <Mouse className='mb-0.5 size-5 text-white' />
        </div>

        {/* Image */}
        <img
          src='/images/shared-profile-picture.png'
          alt='Profile Picture'
          className='h-auto w-auto'
          style={{
            maxWidth: 'clamp(23.44rem, 42.36vw, 38.13rem)',
            maxHeight: 'clamp(28.25rem, 51.04vw, 45.94rem)',
          }}
        />

        <img
          src='/icons/hero-star.svg'
          alt='Star'
          className='absolute -z-50 h-auto w-auto'
          style={{
            bottom: 'clamp(13.79rem, 34.08vw, 30.88rem)',
            left: 'clamp(-7.09rem, calc(-12.9vw + 1rem), -2.5rem)',
            maxWidth: 'clamp(5.63rem, 13.89vw, 12.5rem)',
            maxHeight: 'clamp(5.63rem, 16.74vw, 15.06rem)',
          }}
        />
      </div>
    </>
  );
};
