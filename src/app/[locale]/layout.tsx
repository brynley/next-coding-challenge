import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import LocaleProvider from '@/context/Locale/LocaleProvider';
import BasketProvider from '@/context/Basket/BasketProvider';

import Header from "@/components/Header";

import styles from '../page.module.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

const SUPPORTED_LOCALES = ['uk', 'us'];

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    return notFound(); // invalid locale
  }

  return (
    <LocaleProvider locale={locale as 'uk' | 'us'}>
      <BasketProvider>
        <main className={styles.main}>
          <Header/>
          {children}
        </main>
      </BasketProvider>
    </LocaleProvider>
  );
}
