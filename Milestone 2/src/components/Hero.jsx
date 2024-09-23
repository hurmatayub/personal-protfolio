import React from 'react'
import heroimage from '../assets/programmer.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] ms:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto 1g:w-[400px]'>
            <img src= {heroimage} alt= "hero image"/>
             </div>
        
             <div className='col-span-2 px-5 my-auto'>

                 <h1 className='text-yellow-400 text-4xl sm:text-5xl lg:text-8xl font-bold '>
                    <span className='text-white'>
                        I'm a
                    </span> <br/>
                    <TypeAnimation 
                    sequence={[
                         "Student",
                         1000,
                         "Web Developer",
                         1000,
                         "Freelancer",
                         1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                 </h1>

                 <p className='text-white sm:text-lg my-6 lg:text-xl font-serif'>
                     My name is hurmat Muhammad Ayub, My name is Hurmat Muhammad Ayub, and I am an IT student. I am pursuing my IT education from the Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse (GIAIC).
                 </p>

                 <div className='my-8'>
                    <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-orange-500 hover:bg-slate-400 hover:text-black text-white'>
                     Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gray-400 hover:text-black text-white hover:border-none'>
                    Contact
                    </a>
                 </div>

        </div>

    </div>
  )
}

export default Hero
