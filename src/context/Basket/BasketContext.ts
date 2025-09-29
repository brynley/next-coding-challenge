import { createContext } from 'react';

export type TItem = {
  name: string
  quantity: number
};

export type TBasketContext = {
  items: TItem[] | []
  updateItem: (item: TItem['name']) => void
  totalItems: number
};

export const BasketContext = createContext<TBasketContext | undefined>(undefined);
