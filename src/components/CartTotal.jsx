import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const CartTotal = () => {
    const {currency, delivery_fee, getCarAmount} = useContext(ShopContext)

  return (
    <div>
        
    </div>
  )
}

export default CartTotal