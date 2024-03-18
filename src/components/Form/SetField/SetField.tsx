import { useEffect } from 'react';

import type { SetFormField } from '@douglasneuroinformatics/libui-form-types';
import type { Simplify } from 'type-fest';

import { Badge } from '@/components/Badge';
import { DropdownButton } from '@/components/DropdownButton';
import { DropdownMenu } from '@/components/DropdownMenu';
import { Label } from '@/components/Label';

import { FieldGroup } from '../FieldGroup';
import { type BaseFieldComponentProps } from '../types';

export type SetFieldProps<T extends string = string> = Simplify<BaseFieldComponentProps<Set<T>> & SetFormField<Set<T>>>;

export const SetField = <T extends string = string>({
  description,
  error,
  label,
  options,
  setValue,
  value
}: SetFieldProps<T>) => {
  useEffect(() => {
    if (!value) {
      setValue(new Set([]));
    }
  }, [value]);

  return value ? (
    <FieldGroup>
      <FieldGroup.Row>
        <Label>{label}</Label>
        <FieldGroup.Description description={description} />
      </FieldGroup.Row>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild className="w-full">
          <DropdownButton>
            {value.size ? (
              <div className="flex items-center gap-2">
                {Array.from(value).map((option) => (
                  <Badge className="font-normal" key={option} variant="outline">
                    {options[option]}
                  </Badge>
                ))}
              </div>
            ) : null}
          </DropdownButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content widthFull align="start">
          {Object.keys(options).map((option) => {
            const checked = value.has(option as T);
            return (
              <DropdownMenu.CheckboxItem
                checked={checked}
                key={option}
                onSelect={(event) => {
                  event.preventDefault();
                  if (checked) {
                    const updatedValue = new Set(value);
                    updatedValue.delete(option as T);
                    setValue(updatedValue);
                  } else {
                    const updatedValue = new Set(value);
                    updatedValue.add(option as T);
                    setValue(updatedValue);
                  }
                }}
              >
                {options[option as T]}
              </DropdownMenu.CheckboxItem>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu>
      <FieldGroup.Error error={error} />
    </FieldGroup>
  ) : null;
};
