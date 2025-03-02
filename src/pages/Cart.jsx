import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title'

const Cart = () => {
  const {products, currency, cartItems } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const temporaryData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temporaryData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }        
      }
    }
    setCartData(temporaryData);
    
  }, [cartItems])

  return (
    <div>
    </div>
  )
}

export default Cart