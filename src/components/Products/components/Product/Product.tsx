'use client';

import styles from '@/app/page.module.css';

import type { IProduct } from '@/types/products.types';

import useLocale from '@/hooks/useLocale/useLocale';

export default function Product({ product, updateBasket }: { product: IProduct, updateBasket: () => void }) {
  const { locale } = useLocale();

  const parseProduct = () => {
    if (locale === 'us') {
      return {
        name: product.name.us,
        price: `$${product.price.usd}`,
      }
    }

    return {
      name: product.name.uk,
      price: `£${product.price.gbp}`,
    }
  }

  const parsedProduct = parseProduct();

  return (
    <button className={styles.card} onClick={updateBasket} aria-label={`Add ${product.name.uk} to basket`}>
      <h2>{parsedProduct.name} <span>-&gt;</span></h2>
      <h3>{parsedProduct.price}</h3>
      <p>{product.stock} left in stock</p>
    </button>
  );
};
