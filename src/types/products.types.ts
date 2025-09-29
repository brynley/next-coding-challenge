export interface IProduct {
  id: number
  name: {
    us: string
    uk: string
  }
  price: {
    usd: number
    gbp: number
  }
  stock: number
};

export type TProducts = IProduct[];

export interface IProductsResponse {
  success: boolean
  products: TProducts
}