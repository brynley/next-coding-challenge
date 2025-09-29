'use client'

import styles from '@/app/page.module.css';

import useBasket from '@/hooks/useBasket'

const products = [
  { name: 'Item 1', copy: 'Foo'},
  { name: 'Item 2', copy: 'Bar'},
  { name: 'Item 3', copy: 'Baz'},
  { name: 'Item 4', copy: 'Qux'},
];

export default function Products() {
  const { updateItem } = useBasket()

  return (
    <div className={styles.grid}>
      {products.map((product, index) => {
        return <button key={`${product.name.replace(' ', '-').toLowerCase()}-${index}`} className={styles.card} onClick={() => updateItem(product.name)} aria-label={`Add ${product.name} to basket`}><h2>{product.name} <span>-&gt;</span></h2><p>{product.copy}</p></button>
      })}
    </div>
  )
}