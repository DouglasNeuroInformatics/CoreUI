import { forwardRef } from 'react';

import { cn } from '../../utils.js';

export const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  function TableHeader({ className, ...props }, ref) {
    return <thead className={cn('[&_tr]:border-b', className)} ref={ref} {...props} />;
  }
);
