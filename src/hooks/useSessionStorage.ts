import type { Dispatch, SetStateAction } from 'react';

import { useStorage, type UseStorageOptions } from './useStorage.js';

/** Custom hook that uses session storage to persist state across page reloads */
export function useSessionStorage<T>(
  key: string,
  initialValue: (() => T) | T,
  options: UseStorageOptions<T> = {}
): [T, Dispatch<SetStateAction<T>>] {
  return useStorage(key, initialValue, 'sessionStorage', options);
}
