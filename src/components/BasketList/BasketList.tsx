'use client';
import Link from 'next/link'

import BasketItem from "./components/BasketItem";

import useBasket from "@/hooks/useBasket";

import styles from '@/app/page.module.css';

export default function BasketList() {
  const { items, totalItems } = useBasket()
  return (
    <>
      <Link className={styles.basket} href='/checkout'>Basket: {totalItems} item{totalItems === 1 ? '' : 's'}</Link>
      {!!items?.length && items.map((item) => (
        <BasketItem key={item.name} name={item.name} quantity={item.quantity} />
      ))}
    </>
  )
}