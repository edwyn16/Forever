import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Product = () => {
  const {productId} = useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)

  return (
    <div>
        
    </div>
  )
}

export default Product