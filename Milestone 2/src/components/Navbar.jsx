import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
      <div className='border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

        <h1 className='text-3xl font-bold text-white ml-4'>Hurmat Muhammad Ayub.</h1>
        <ul className='hidden md:flex'>
          <li className='p-5 hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#home'>Home</a></li>
          <li className='p-5 hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#about'>About</a></li>
          <li className='p-5 hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#contact'>Contact</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        
        <div className={nav ?'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl text-white m-4'>Hurmat Muhammad Ayub.</h1>
            <ul className='p-8 text-2xltype'>
          <li className='p-2  hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#home'>Home</a></li>
          <li className='p-2  hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#about'>About</a></li>
          <li className='p-2  hover:text-yellow-400 hover:text-3xl hover:font-serif'><a href='#contact'>Contact</a></li>
        </ul>
        </div>

      </div>
  )
}

export default Navbar
