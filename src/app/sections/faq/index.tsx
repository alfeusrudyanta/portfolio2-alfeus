import { Section } from '@/components/shared/section';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQ_DATA } from './constants';

export const FAQ = () => {
  return (
    <Section id='faq' background='bg-neutral-100'>
      {/* Title */}
      <div className='flex w-full flex-col gap-2'>
        <span className='display-sm-bold md:display-xl-bold text-center tracking-[-0.02em] md:tracking-[-0.03em]'>
          Let’s Clear Things Up
        </span>

        <span className='md:text-md-medium text-sm-regular text-center md:tracking-[-0.03em]'>
          I’ve answered a few questions that usually come up when working with a
          frontend developer like me.
        </span>
      </div>

      {/* FAQ */}
      <Accordion
        type='single'
        defaultValue='01'
        className='flex w-full flex-col gap-5'
      >
        {FAQ_DATA.map((faq, index) => (
          <div key={faq.id} className='flex flex-col gap-5'>
            <AccordionItem value={faq.id!}>
              <AccordionTrigger>
                <div className='flex justify-between gap-4'>
                  <div className='w-7.75 shrink-0 md:w-52'>
                    <span className='text-lg-semibold md:display-xs-semibold tracking-[-0.03em]'>
                      {faq.id}
                    </span>
                  </div>

                  <span className='text-lg-semibold md:display-xs-semibold w-full text-left tracking-[-0.03em]'>
                    {faq.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='mt-2 flex items-center justify-between gap-4'>
                  <div className='w-7.75 shrink-0 md:w-52' />

                  <span className='text-sm-medium md:text-md-medium text-neutral-700 md:tracking-[-0.03em]'>
                    {faq.description}
                  </span>

                  <div className='w-7.75 shrink-0 md:w-52' />
                </div>
              </AccordionContent>
            </AccordionItem>

            {index < FAQ_DATA.length - 1 && (
              <div className='w-full border border-neutral-300' />
            )}
          </div>
        ))}
      </Accordion>
    </Section>
  );
};
