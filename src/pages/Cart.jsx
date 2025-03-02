import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'

const Cart = () => {
  const {products, currency, cartItems } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  return (
    <div>
        
    </div>
  )
}

export default Cart