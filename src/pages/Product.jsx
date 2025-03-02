import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/frontend_assets/assets'

const Product = () => {
  const {productId} = useParams()
  const {products, currency} = useContext(ShopContext)

  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ----- Product Data ----- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/**  Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/** ----- Product Info ----- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'> {productData.name} </h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'> (122) </p>
            </div>
            <p className='mt-5 text-3xl font-medium'> {currency} {productData.price} </p>
            <p className='mt-5 text-gray-500 md:w-3/4'> {productData.description} </p>
            <div className='flex flex-col gap-4 my-8'>
              <p> Select Size </p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index) => (
                    <button onClick={() => setSize(item)} className={`border-2 py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-400' : ''}`} key={index}> {item} </button>
                  ))
                }
              </div>
            </div>
            <button className='bg-black text-white px-8 py-3 active:bg-gray-700'> ADD TO CART </button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p> 100% Original Product </p>
                <p> Cash Delivery Is Available On This Product </p>
                <p> Easy Return & Exchange Policy Within 7 Days </p>
            </div>
        </div>
      </div>
      { /** ----- Description & Review Section ----- */ }
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product