import React from 'react'
import html from '../assets/html1.png'
import css from '../assets/css.jpg'
import JS from '../assets/js1.png'
import tailwind from '../assets/tailwind1.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>


        <h2 className='text-white text-2xl md:text-4xl font-bold m-4'>
            My <br/>Skills <br/>
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={html} alt='' width={100} height={100}/>
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={css} alt='' width={100} height={100}/>
          <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={JS} alt='' width={100} height={100}/>
          <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={tailwind} alt='' width={70} height={100}/>
          <p className='mt-2'>Tailwind</p>
        </div>
        





    </div>
  )
}

export default Skills
