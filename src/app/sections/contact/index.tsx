import Image from 'next/image';
import { CONTACT_DATA } from './constants';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <Section className='md:flex-row md:items-start md:p-30'>
      {/* Title */}
      <div className='flex w-full flex-[4.7] flex-col gap-6 md:gap-10'>
        <div className='flex flex-col gap-2'>
          <span className='display-sm-bold md:display-xl-bold tracking-[-0.02em] md:tracking-[-0.03em]'>
            Let’s Work Together
          </span>

          <span className='md:text-md-medium text-sm-medium md:tracking-[-0.03em]'>
            Have a project in mind or just want to say hi? Drop me a message —
            I’d love to hear from you.
          </span>
        </div>

        <div className='flex items-center gap-4 md:gap-5'>
          {CONTACT_DATA.map((data) => (
            <Image
              key={data.name}
              src={data.imageSrc}
              alt={data.name}
              height={142}
              width={142}
              className='aspect-square size-27.5 min-w-0 shrink md:size-35.5'
            />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className='w-full flex-[5.3] pt-40 md:pt-0'>
        <form
          action=''
          className='relative flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-[0_0_28px_0_#C5C5C540]'
        >
          {/* Image */}
          <img
            src='/icons/contact-hello.svg'
            alt='Contact Me'
            className='absolute -top-40 left-1/2 h-42.5 w-48 shrink-0 -translate-x-1/2'
          />

          {/* Form */}
          <label htmlFor='name' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Name</span>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              className='text-sm-medium md:text-md-medium rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <label htmlFor='email' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Email</span>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              className='text-sm-medium md:text-md-medium rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <label htmlFor='message' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Message</span>
            <textarea
              id='message'
              placeholder='Enter your message'
              className='text-sm-medium md:text-md-medium min-h-33.5 rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <Button type='submit' className='text-sm-bold text-white'>
            Let’s Talk
          </Button>
        </form>
      </div>
    </Section>
  );
};
