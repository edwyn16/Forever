import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat corporis debitis, eum eveniet esse voluptatibus voluptas maxime omnis consectetur neque magni, aut eius quidem nulla a. Esse accusantium atque quia. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit dignissimos earum, asperiores quidem nihil molestiae numquam illo, quam adipisci vel qui repellendus voluptatum unde eligendi inventore. Ab, asperiores provident. </p>
            <b className='text-gray-800'> Our Mission </b>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum saepe adipisci doloribus consequuntur nulla aliquid asperiores explicabo maiores culpa autem dolores quod doloremque neque magni, quas rerum ullam amet? </p>
          </div>
        </div>
    </div>
  )
}

export default About