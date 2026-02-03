import {
  DialogHeader,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogProps } from '../types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const ErrorOverlay: React.FC<DialogProps> = ({
  isOpen,
  setIsOpen,
  tryAgain,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='w-[calc(100vw-2rem)] max-w-129.5'>
        <DialogHeader>
          <DialogTitle className='sr-only'>Message Error</DialogTitle>
        </DialogHeader>

        {/* Icon */}
        <div className='relative h-45.75 rounded-tl-2xl rounded-tr-2xl bg-neutral-200 md:h-56.25'>
          <Image
            src='/icons/contact-error.svg'
            alt='Error Icon'
            height={289}
            width={260}
            className='absolute -bottom-0.75 left-1/2 h-58.5 w-full -translate-x-1/2 md:-bottom-2.5 md:h-72.25'
          />
        </div>

        {/* Message */}
        <div className='flex flex-col gap-4 rounded-br-2xl rounded-bl-2xl p-6 md:p-8 md:pb-10'>
          <div className='flex flex-col gap-0.5 text-center md:gap-2'>
            <span className='text-lg-bold md:text-xl-bold'>
              Message Failed to Send
            </span>

            <span className='text-sm-medium md:text-md-medium text-neutral-700 md:tracking-[-0.03em]'>
              Sorry about that. Please check your connection and try again.
            </span>
          </div>

          <Button onClick={tryAgain}>Try Again</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
