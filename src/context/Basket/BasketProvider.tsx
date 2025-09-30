'use client';

import { useState } from 'react';

import { BasketContext } from './BasketContext';

import type { TBasketContext, TItem } from './BasketContext';

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<TBasketContext['items']>([]);

  const updateItem = (productName: TItem['name']) => {
    const existingCartItem = items.find(item => item.name === productName);

    setItems((prevItems) => {
      if (existingCartItem) {
        return prevItems.map((item) => {
          return item.name === existingCartItem.name ? { ...item, quantity: item.quantity + 1 } : item;
        });
      } else {
       return [...items, { name: productName, quantity: 1 }];
      }
    });
  }

  const totalItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  return <BasketContext.Provider value={{items, updateItem, totalItems }}>{children}</BasketContext.Provider>;
};
