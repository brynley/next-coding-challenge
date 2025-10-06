'use client';
import { BasketProvider } from '@/context/Basket/BasketProvider';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BasketProvider>{children}</BasketProvider>
  );
}