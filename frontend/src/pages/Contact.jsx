import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'> Our store </p>
            <p className='text-gray-500'> Weena 500 <br /> 5050AD, Rotterdam, Nederland </p>
            <p className='text-gray-500'> Tel: +31 10 765 789 22 <br /> Email: contact@forever.com </p>
            <p className='font-semibold text-xl text-gray-600'> Careers At Forever </p>
            <p className='text-gray-500'> Learn More About Our Teams And Job Openings. </p>
            <p className='border border-black px-8 py-4 sm:text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'> Explore Jobs </p>
          </div>
        </div>
        <NewsletterBox />
    </div>
  )
}

export default Contact