'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/page.module.css';

import useBasket from '@/hooks/useBasket';
import useLocale from '@/hooks/useLocale/useLocale';

import type { TProducts } from '@/types/products.types';

import Product from './components/Product';

export default function Products({ products }: { products: TProducts }) {
  const [loading, setLoading] = useState(true);
  const [moreProducts, setMoreProducts] = useState<TProducts>([]);
  const { updateItem } = useBasket();
  const { locale } = useLocale();

  useEffect(() => {
    async function getMoreProducts() {
      try {
        const res = await fetch('api/more-products');

        if (!res?.ok) throw new Error(`Failed to fetch more products, status: ${res.status}`);

        const { products: newProducts } = await res.json();

        console.log('newProducts :>> ', newProducts);

        setMoreProducts(newProducts);
      } catch (error) {
        console.error('Error fetching more products:', error);
      } finally {
        setLoading(false);
      };
    };

    getMoreProducts();
  }, []);


  return (
    <>
      <div className={styles.grid}>
        {products.map((product, index) => {
          return <Product key={`${product.name[locale].replace(' ', '-').toLowerCase()}-${index}`} product={product} updateBasket={() => updateItem(product.name[locale])} />
        })}
        {moreProducts?.map((product, index) => {
          return <Product key={`${product.name[locale].replace(' ', '-').toLowerCase()}-${index}`} product={product} updateBasket={() => updateItem(product.name[locale])} />
        })}
      </div>
      {loading && (
        <p>Loading more products...</p>
      )}
    </>
  );
};