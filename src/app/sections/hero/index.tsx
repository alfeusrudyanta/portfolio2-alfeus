import { HeroContent } from './partials/hero-content';
import { HeroOverlay } from './partials/hero-overlay';

export const Hero = () => {
  return (
    <div className='bg-[#A53860F0]'>
      <div id='home' className='relative'>
        <div className='mx-auto md:max-w-360'>
          <div className='relative px-4 pt-22 pb-127.75 md:px-30 md:pt-153.5 md:pb-47'>
            <HeroOverlay />
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};
