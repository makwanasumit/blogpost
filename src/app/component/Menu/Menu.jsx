'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Menu = ({ className }) => {

  const { theme } = useContext(ThemeContext)

  const categories = [
    { name: "Style", img: "/style.jpg", color: "bg-[#57c4ff31]", hoverColor: "hover:bg-[#57c4ffb0]" },
    { name: "Culture", img: "/culture.jpg", color: "bg-[#da85c731]", hoverColor: "hover:bg-[#da85c7b0]" },
    { name: "Travel", img: "/travel.jpg", color: "bg-[#7fb88133]", hoverColor: "hover:bg-[#7fb881b0]" },
    { name: "Coding", img: "/coding.jpg", color: "bg-[#ff795736]", hoverColor: "hover:bg-[#ff7957b0]" },
    { name: "Food", img: "/food.jpg", color: "bg-[#ffb00f45]", hoverColor: "hover:bg-[#ffb00fb0]" },
    { name: "Fashion", img: "/fashion.jpg", color: "bg-[#5e4fff31]", hoverColor: "hover:bg-[#5e4fffb0]" },
  ];


  return (
    <div className={`${className} `}>
      <div className='w-full my-14 mx-2'>
        <h2 className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
          What's not
        </h2>
        <h1 className={`text-4xl font-bold mb-6`}>
          Most Read
        </h1>

        <div className='flex flex-col gap-8'>
          <Link href='/' className='flex items-center gap-6'>

            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
          <Link href='/' className='flex items-center gap-6'>

            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
          <Link href='/' className='flex items-center gap-6'>

            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
        </div>
      </div>




      <div className="w-full my-14 mx-2">
      <h2 className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-400'} text-sm`}>
        Discover by topic
      </h2>
      <h1 className="text-4xl font-bold mb-6">
        Categories
        </h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {categories.map(({ img, name, hoverColor, color }) => (
          <Link
            key={name}
            href={`/blog?cat=${name}`}
            className={`${color} ${hoverColor} flex gap-2 items-center justify-center p-4 rounded-lg`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>





      <div className='w-full my-14 mx-2'>
        <h2 className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
          Chosen by the editor
        </h2>
        <h1 className={`text-4xl font-bold mb-6`}>
          Editor's Pick
        </h1>

        <div className='flex flex-col gap-8'>
          <Link href='/' className='flex items-center gap-6'>
            <div className={`flex-[1] relative aspect-square`}>
              <Image src="/p1.jpg" alt="featured-image" fill className={`object-cover rounded-full border-[3px] ${theme === 'light' ? 'border-gray-800 ' : 'border-gray-400'}`} />
            </div>
            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
          <Link href='/' className='flex items-center gap-6'>
            <div className={`flex-[1] relative aspect-square`}>
              <Image src="/p1.jpg" alt="featured-image" fill className={`object-cover rounded-full border-[3px] ${theme === 'light' ? 'border-gray-800 ' : 'border-gray-400'}`} />
            </div>
            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
          <Link href='/' className='flex items-center gap-6'>
            <div className={`flex-[1] relative aspect-square`}>
              <Image src="/p1.jpg" alt="featured-image" fill className={`object-cover rounded-full border-[3px] ${theme === 'light' ? 'border-gray-800 ' : 'border-gray-400'}`} />
            </div>
            <div className={`flex-[4] flex flex-col gap-1.5`}>
              <span className={`bg-amber-600 rounded-full px-3 py-1 w-fit`}>Travel</span>
              <h3 className='text-lg font-[500]'>Lost in the Serenity of the Mountains</h3>
              <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                <span>11.05.2025 - </span>
                <span>Sumit</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Menu