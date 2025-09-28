'use client';
import { useState } from 'react';
import styles from './page.module.css'

function ItemCount({count, name}: {count: number, name: string}) {
  return <div key={name}>{name} count: {count}</div>
};

const products = [
  { name: 'Item 1', copy: 'Foo'},
  { name: 'Item 2', copy: 'Bar'},
  { name: 'Item 3', copy: 'Baz'},
  { name: 'Item 4', copy: 'Qux'},
];

export default function Home() {
  const [items, setItems] = useState<{name: string, quantity: number}[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const addToCart = (product: string) => {
    const existingCartItem = items.find(item => item.name === product);

    // Check if the existingCartItem returns an object with the expected field

    setItems((prevItems) => {
      if (existingCartItem) {
        return prevItems.map((item) => {
          return item.name === existingCartItem.name ? { ...item, quantity: item.quantity + 1 } : item;
        });
      } else {
       return [...items, { name: product, quantity: 1 }];
      }
    });
    setItemCount(itemCount + 1);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Brynley&apos;s Amazing Web Store
        </p>
        <div>
          <button className={styles.basket}>Basket: {itemCount} items</button>
          <ItemCount name="Item 1" count={items.find(item=> item.name === 'Item 1')?.quantity || 0}/>
          <ItemCount name="Item 2" count={items.find(item=> item.name === 'Item 2')?.quantity || 0}/>
          <ItemCount name="Item 3" count={items.find(item=> item.name === 'Item 3')?.quantity || 0}/>
          <ItemCount name="Item 4" count={items.find(item=> item.name === 'Item 4')?.quantity || 0}/>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product, index) => {
          return <button key={`${product.name.replace(' ', '-').toLowerCase()}-${index}`} className={styles.card} onClick={() => addToCart(product.name)} aria-label={`Add ${product.name} to basket`}><h2>{product.name} <span>-&gt;</span></h2><p>{product.copy}</p></button>
        })}
      </div>
    </main>
  )
}
