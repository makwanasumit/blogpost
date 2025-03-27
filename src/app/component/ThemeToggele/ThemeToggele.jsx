'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const ThemeToggele = () => {

    const {theme, toggle} = useContext(ThemeContext)
   

    return (
        <div className={`relative w-14 h-7 flex cursor-pointer items-center justify-between rounded-4xl ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-600'}`} onClick={toggle}>
            <Image src="/moon.png" alt="logo" width={20} height={20}  quality={100}/>
            <div className={`absolute ${theme === 'light' ? 'translate-x-0 bg-white' : 'translate-x-7 bg-black'} transition-all duration-150 ease-in-out rounded-full w-[24px] h-[24px] left-[1px] `}></div>
            <Image src="/sun.png" alt="logo" width={20} height={20}  quality={100}/>
        </div>
    )
}

export default ThemeToggele