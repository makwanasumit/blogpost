'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const Featured = ({ className }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${className} px-4 py-8`}>
      <h1 className='text-4xl md:text-7xl text-center font-bold'>
        <b>Spotlight: Must-Read Featured Post!</b>
      </h1>

      <div className='mt-10 md:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16'>
        {/* Image Section */}
        <div className='w-full md:flex-[1] h-[300px] md:h-[500px] relative'>
          <Image src="/p1.jpg" alt="featured-image" fill className="object-cover rounded-lg" />
        </div>

        {/* Text Content */}
        <div className='flex-[1] flex flex-col gap-5 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-extrabold'>
            Lost in the Serenity of the Mountains
          </h1>
          <p className={`text-lg md:text-2xl font-[400] ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
            Amidst towering peaks and endless greenery, a man finds solace in the heart of nature. The crisp mountain air, the soothing rustle of leaves, and the breathtaking views remind him of life’s simple joys. 🌿🏔️✨
          </p>
          <button className={`px-4 py-2 rounded-lg self-center md:self-start transition-all font-semibold hover:scale-105
            ${theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-400 hover:text-white'}`}>
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
