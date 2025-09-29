import { useContext } from 'react'

import { BasketContext } from '../../context/Basket'

const useBasket = () => {
  const context = useContext(BasketContext)

  if (context === undefined) {
    throw new Error('useBasket must be used within BasketProvider')
  }
  
  return context
}

export default useBasket