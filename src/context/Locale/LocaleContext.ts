import { createContext } from 'react';

export type TLocaleContext = {
  locale: 'uk' | 'us'
};

export const LocaleContext = createContext<TLocaleContext | undefined>(undefined);
