import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum consequatur dolore minima consectetur sit sed molestiae quos repudiandae eius, quae iste maxime eveniet illo accusamus eaque corrupti obcaecati aperiam.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> COMPANY </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li> HOME </li>
                    <li> ABOUT US </li>
                    <li> DELIVERY </li>
                    <li> PRIVACY POLICY </li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li> +31 6 481 808 85 </li>
                    <li> contact@foreveryou.com </li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'> COPYRIGHT 2025@ FOREVER.COM - ALL RIGHTS RESERVED. </p>
        </div>
    </div>
  )
}

export default Footer