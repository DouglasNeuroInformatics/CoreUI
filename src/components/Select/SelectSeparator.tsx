import { forwardRef } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '../../utils.js';

export const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(function SelectSeparator({ className, ...props }, ref) {
  return <SelectPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />;
});
