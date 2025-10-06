'use client';

import { LocaleContext } from "./LocaleContext";

export default function LocaleProvider({ children, locale }: { children: React.ReactNode, locale: 'uk' | 'us' }) {
  return <LocaleContext.Provider value={{locale}}>{children}</LocaleContext.Provider>
}
