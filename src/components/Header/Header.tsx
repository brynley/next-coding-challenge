'use client';
import Link from 'next/link';

import BasketList from "../BasketList";

import useLocale from '@/hooks/useLocale/useLocale';

import styles from '@/app/page.module.css';

export default function Header() {
  const { locale } = useLocale();
  return (
    <div className={styles.description}>
      <Link href={`/${locale}`}>
        Brynley&apos;s Amazing Web Store
      </Link>
      <div>
        <BasketList />
      </div>
    </div>
  );
};
