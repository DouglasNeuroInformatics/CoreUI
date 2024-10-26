import { forwardRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '../../utils.js';

export const DrawerTitle = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(function DrawerTitle({ className, ...props }, ref) {
  return (
    <DrawerPrimitive.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      ref={ref}
      {...props}
    />
  );
});
