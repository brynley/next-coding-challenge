import styles from '@/app/page.module.css';

import type { IProduct } from '@/types/products.types'

export default function Product({ product, updateBasket }: { product: IProduct, updateBasket: () => void }) {
  return (
    <button className={styles.card} onClick={updateBasket} aria-label={`Add ${product.name.uk} to basket`}>
      <h2>{product.name.uk} <span>-&gt;</span></h2>
      <h3>£{product.price.gbp}</h3>
      <p>{product.stock} left in stock</p>
    </button>
  )
}