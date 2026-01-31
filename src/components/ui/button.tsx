import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-md-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary-300 text-white hover:bg-primary-300/90',
        outline: 'border border-neutral-300 bg-white hover:bg-neutral-100',
      },
      size: {
        default: 'h-11 md:h-12 px-4 py-2 w-full',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
