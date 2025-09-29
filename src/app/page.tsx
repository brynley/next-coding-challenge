import Products from "@/components/Products/Products";

import type { IProductsResponse } from "@/types/products.types";

async function getProducts(): Promise<IProductsResponse> {
  const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/products', { cache: 'no-cache' })

  if (!res?.ok) throw new Error('Failed to fetch products')

  return res.json()
}

export default async function Home() {
  try {
    const { products } = await getProducts()

    return (
      <>
        <h1>Products</h1>
        <Products products={products} />
      </>
    )
  } catch (error) {
    console.error(error)
    return (
      <>
        <h1>Products</h1>
        <p>Sorry, there was an issue whilst trying to load our great products, please try again.</p>
      </>
    )
  }
}
