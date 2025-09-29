'use client'

import styles from '@/app/page.module.css';

import useBasket from '@/hooks/useBasket'

import type { TProducts } from '@/types/products.types'

import Product from './components/Product'

export default function Products({ products }: { products: TProducts }) {
  const { updateItem } = useBasket()

  return (
    <div className={styles.grid}>
      {products.map((product, index) => {
        return <Product key={`${product.name.uk.replace(' ', '-').toLowerCase()}-${index}`} product={product} updateBasket={() => updateItem(product.name.uk)} />
      })}
    </div>
  )
}