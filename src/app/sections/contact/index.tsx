'use client';

import Image from 'next/image';
import { CONTACT_DATA } from './constants';
import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SuccessOverlay } from './partials/success-overlay';
import { ErrorOverlay } from './partials/error-overlay';

export const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (e?: React.SubmitEvent) => {
    if (e) {
      e.preventDefault();
    }

    setIsLoading(true);

    const data = {
      name,
      email,
      comment,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setComment('');
        return;
      }

      setIsError(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id='contact' className='md:flex-row md:items-start md:p-30'>
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
          onSubmit={handleSubmit}
          className='relative flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-[0_0_28px_0_#C5C5C540]'
        >
          {/* Image */}
          <Image
            src='/icons/contact-hello.svg'
            alt='Contact Me'
            height={170}
            width={192}
            className='absolute -top-40 left-1/2 h-42.5 w-48 shrink-0 -translate-x-1/2'
          />

          {/* Form */}
          <label htmlFor='name' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Name</span>
            <input
              type='text'
              id='name'
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder='Enter your name'
              className='text-sm-medium md:text-md-medium rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <label htmlFor='email' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Email</span>
            <input
              type='email'
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder='Enter your email'
              className='text-sm-medium md:text-md-medium rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <label htmlFor='message' className='flex flex-col gap-0.5 md:gap-1.5'>
            <span className='text-sm-bold'>Message</span>
            <textarea
              id='message'
              required
              value={comment}
              onChange={(e) => setComment(e.currentTarget.value)}
              placeholder='Enter your message'
              className='text-sm-medium md:text-md-medium min-h-33.5 rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 md:tracking-[0.03em]'
            />
          </label>

          <Button type='submit' className='text-sm-bold text-white'>
            {isLoading ? (
              <div className='my-auto size-4 animate-spin rounded-full border border-t-0 border-white md:size-5' />
            ) : (
              'Let’s Talk'
            )}
          </Button>
        </form>

        <SuccessOverlay isOpen={isSuccess} setIsOpen={setIsSuccess} />
        <ErrorOverlay
          isOpen={isError}
          setIsOpen={setIsError}
          tryAgain={handleSubmit}
        />
      </div>
    </Section>
  );
};
