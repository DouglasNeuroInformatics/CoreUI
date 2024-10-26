import { LanguagesIcon } from 'lucide-react';

import { useTranslation } from '../../hooks.js';
import { Button, type ButtonProps } from '../Button/Button.js';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu.js';

import type { Language } from '../../i18n.js';

export type LanguageToggleProps = {
  align?: 'center' | 'end' | 'start';
  contentClassName?: string;
  itemClassName?: string;
  options: {
    [L in Language]?: string;
  };
  triggerClassName?: string;
  variant?: ButtonProps['variant'];
};

export const LanguageToggle = ({
  align = 'start',
  contentClassName,
  itemClassName,
  options = {},
  triggerClassName,
  variant = 'outline'
}: LanguageToggleProps) => {
  const { changeLanguage } = useTranslation('libui');
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button className={triggerClassName} size="icon" variant={variant}>
          <LanguagesIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align={align} className={contentClassName}>
        {Object.keys(options).map((option) => (
          <DropdownMenu.Item
            className={itemClassName}
            key={option}
            onClick={() => void changeLanguage(option as Language)}
          >
            {options[option as Language]}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
