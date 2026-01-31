import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className='bg-[#A53860F0]'>
      <div className='relative px-4 pt-22 pb-127.75 md:px-30 md:pt-153.5 md:pb-47'>
        {/* Layout */}
        <div className='flex flex-col gap-6.25 md:contents'>
          {/* Introduction */}
          <div className='flex w-full max-w-112.75 flex-col gap-2 md:max-w-80 md:gap-3.5 lg:max-w-112.75'>
            <div className='border-primary-300 flex size-12 items-center justify-center rounded-full border md:size-15.75'>
              <Image
                src='/icons/hero-mic.svg'
                alt='Mic Icon'
                height={26}
                width={18}
                className='h-5 w-3.5 md:h-6.5 md:w-4.5'
              />
            </div>

            <span className='text-md-bold md:text-xl-bold tracking-[-0.02em] text-white md:tracking-normal'>
              Hi, I'm Edwin Anderson
            </span>

            <span className='text-sm-medium md:text-lg-medium text-white'>
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </span>
          </div>

          {/* Rating */}
          <div className='flex flex-col gap-5 md:absolute md:right-30 md:bottom-54.5 md:w-full md:max-w-55.5'>
            <div className='flex gap-5 md:flex-col'>
              {/* Content */}
              <div className='flex flex-col gap-0.75'>
                <span className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-white'>
                  2+
                </span>

                <span className='text-xs-semibold md:text-md-semibold tracking-[-0.03em] text-white md:tracking-normal'>
                  Years Experience
                </span>
              </div>

              {/* Line */}
              <div className='border-primary-300 h-15 border md:h-px md:w-full' />

              {/* Content */}
              <div className='flex flex-col gap-0.75'>
                <span className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-white'>
                  99%
                </span>

                <span className='text-xs-semibold md:text-md-semibold tracking-[-0.03em] text-white md:tracking-normal'>
                  Client Satisfaction
                </span>
              </div>
            </div>

            <div className='md:border-primary-300 hidden md:block md:w-full md:border' />

            <div className='flex gap-5 md:flex-col'>
              {/* Content */}
              <div className='flex flex-col gap-0.75'>
                <span className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-white'>
                  3
                </span>

                <span className='text-xs-semibold md:text-md-semibold tracking-[-0.03em] text-white md:tracking-normal'>
                  Project Delivered
                </span>
              </div>

              {/* Line */}
              <div className='border-primary-300 h-15 border md:h-px md:w-full' />

              {/* Content */}
              <div className='flex flex-col gap-0.75'>
                <span className='display-md-bold md:display-2xl-bold tracking-[-0.02em] text-white'>
                  50
                </span>

                <span className='text-xs-semibold md:text-md-semibold tracking-[-0.03em] text-white md:tracking-normal'>
                  Clients Worldwide
                </span>
              </div>
            </div>

            <Button className='bg-secondary-100 hover:bg-secondary-100/90 h-12 max-w-65 justify-between md:h-14 md:max-w-none'>
              <span className='md:text-md-semibold text-sm-semibold text-neutral-950'>
                Contact Me
              </span>

              <div className='flex size-9 items-center justify-center gap-2 rounded-full bg-neutral-950 p-2'>
                <ArrowRight className='size-5' />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
