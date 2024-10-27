'use client';

import { Root as PopoverRoot, Trigger as PopoverTrigger } from '@radix-ui/react-popover';

import { PopoverContent } from './PopoverContent.js';

export const Popover = Object.assign(PopoverRoot.bind(null), {
  Content: PopoverContent,
  Trigger: PopoverTrigger
});
