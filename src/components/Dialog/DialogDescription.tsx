import { forwardRef } from 'react';

import { Description } from '@radix-ui/react-dialog';

import { cn } from '../../utils.js';

export const DialogDescription = forwardRef<
  React.ElementRef<typeof Description>,
  React.ComponentPropsWithoutRef<typeof Description>
>(function DialogDescription({ className, ...props }, ref) {
  return <Description className={cn('text-sm text-muted-foreground', className)} ref={ref} {...props} />;
});
