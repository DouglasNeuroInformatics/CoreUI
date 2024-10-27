'use client';

import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardCheckIcon, ClipboardListIcon } from 'lucide-react';
import { match } from 'ts-pattern';

import { Button, type ButtonProps } from '../Button/Button.js';

export const CopyButton: React.FC<{ size?: ButtonProps['size']; text: string; variant?: ButtonProps['variant'] }> = ({
  size,
  text,
  variant
}) => {
  const [state, setState] = useState<'READY' | 'SUCCESS'>('READY');

  return (
    <Button
      size={size ?? 'icon'}
      type="button"
      variant={variant}
      onClick={() => {
        if (state === 'READY') {
          navigator.clipboard
            .writeText(text)
            .then(() => setState('SUCCESS'))
            .catch(console.error);
        }
      }}
      onMouseLeave={() => {
        setState('READY');
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={state}
          transition={{ duration: 0.1 }}
        >
          {match(state)
            .with('READY', () => <ClipboardListIcon />)
            .with('SUCCESS', () => <ClipboardCheckIcon />)
            .exhaustive()}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};
