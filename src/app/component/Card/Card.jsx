'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Card = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='mb-14 mx-auto lg:max-w-full md:max-w-[53rem] max-w-[33rem]'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-14 items-center'>
                {/* Image Container */}
                <div className='flex-1 w-full'>
                    <Image 
                        src="/p1.jpg" 
                        alt="featured-image" 
                        height={500} 
                        width={500} 
                        className="h-[250px] sm:h-[300px] lg:h-[350px] w-full object-cover rounded-lg"
                    />
                </div>

                {/* Text Container */}
                <div className='flex-1 w-full flex flex-col gap-5'>
                    <div className={`${theme === 'light' ? 'text-gray-800 ': 'text-gray-400'} text-sm`}>
                        <span>11.05.2025 - </span>
                        <span>CULTURE</span>
                    </div>
                    <Link href='/'>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            Lost in the Serenity of the Mountains
                        </h1>
                    </Link>
                    <p className={`text-sm sm:text-lg md:text-xl font-[400] ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                        Amidst towering peaks and endless greenery, a man finds solace in the heart of nature. The crisp mountain air, the soothing rustle of leaves, and the breathtaking views remind him of life’s simple joys. 🌿🏔️✨
                    </p>
                    <Link href='/' className={`text-xs sm:text-sm md:text-base font-semibold underline border-b-[1px] pb-2 ${theme === 'light' ? 'border-gray-800 ' : ' border-gray-400'}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
