import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  background?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  background,
  children,
}) => {
  return (
    <section id={id} className={cn(background)}>
      <div
        className={cn(
          'mx-auto flex w-full max-w-360 flex-col items-center justify-center gap-6 px-4 py-10 md:gap-12 md:px-30 md:py-20',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};
