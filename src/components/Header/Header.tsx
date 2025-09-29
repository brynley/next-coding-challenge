import Link from 'next/link'

import BasketList from "../BasketList"

import styles from '@/app/page.module.css';

export default function Header() {
  return (
    <div className={styles.description}>
      <Link href='/'>
        Brynley&apos;s Amazing Web Store
      </Link>
      <div>
        <BasketList />
      </div>
    </div>
  )
}