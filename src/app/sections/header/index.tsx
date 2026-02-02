'use client';

import { Menu } from 'lucide-react';
import { HEADER_DATA } from './constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='fixed z-30 flex w-full items-center justify-center'>
      <div
        className={cn(
          'z-10 flex w-full overflow-hidden bg-black/20 backdrop-blur-2xl transition-all',

          !isMenuOpen &&
            'm-4 h-12 items-center rounded-[100px] px-4 md:my-8 md:w-auto md:px-6',

          isMenuOpen &&
            'fixed inset-4 h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] rounded-2xl p-4'
        )}
      >
        {/* Mobile */}
        <div className='flex w-full flex-col gap-6 md:hidden'>
          <div className='flex items-center justify-between'>
            <span className='text-xl-bold text-white'>Edwin</span>

            <Menu
              onClick={handleOpenMenu}
              className='size-6 cursor-pointer text-white'
            />
          </div>

          {/* Menu */}
          {isMenuOpen && (
            <div className='flex flex-col'>
              {HEADER_DATA.map((data) => (
                <Link
                  href={data.link}
                  key={data.name}
                  onClick={handleOpenMenu}
                  className='group w-full py-2'
                >
                  <span className='text-md-medium group-hover:text-primary-300 tracking-[-0.03em] text-white outline-0 transition-all'>
                    {data.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop */}
        <div className='hidden w-full items-center justify-between gap-6 md:flex'>
          {HEADER_DATA.map((data) => (
            <Link href={data.link} key={data.name} className='group h-full p-2'>
              <span className='text-md-medium group-hover:text-primary-300/70 tracking-[-0.03em] text-white outline-0 transition-all'>
                {data.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
