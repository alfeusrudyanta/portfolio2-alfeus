import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { DialogProps } from '../types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const SuccessOverlay: React.FC<DialogProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='w-[calc(100vw-2rem)] max-w-129.5'>
        <DialogHeader>
          <DialogTitle className='sr-only'>
            Message Sent Successfully
          </DialogTitle>
        </DialogHeader>

        {/* Icon */}
        <div className='bg-secondary-100 relative h-45.75 rounded-tl-2xl rounded-tr-2xl md:h-56.25'>
          <Image
            src='/icons/contact-success.svg'
            alt='Success Icon'
            height={293}
            width={262}
            className='absolute -bottom-1 left-1/2 h-61.75 w-full -translate-x-1/2 md:-bottom-2 md:h-73.25'
          />
        </div>

        {/* Message */}
        <div className='flex flex-col gap-4 rounded-br-2xl rounded-bl-2xl p-6 md:p-8 md:pb-10'>
          <div className='flex flex-col gap-0.5 text-center md:gap-2'>
            <span className='text-lg-bold md:text-xl-bold'>
              Got Your Message!
            </span>

            <span className='text-sm-medium md:text-md-medium text-neutral-700 md:tracking-[-0.03em]'>
              Really appreciate you reaching out. I’ll be in touch soon.
            </span>
          </div>

          <Button onClick={() => setIsOpen(false)}>Back to Home</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
