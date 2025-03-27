'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggele from '../ThemeToggele/ThemeToggele'
import { GiHamburgerMenu } from 'react-icons/gi' // Menu icon
import { IoMdClose } from 'react-icons/io' // Close icon
import { ThemeContext } from '@/context/ThemeContext'

const NavBar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

    const {theme} = useContext(ThemeContext)
  

  return (
    <nav className={`${className} w-full p-4 flex flex-col justify-center shadow-md `}>
      <div className="flex items-center justify-between">
        {/* Left: Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex flex-[1] gap-2.5">
          <SocialIcon style={{ height: 30, width: 30 }} url="https://twitter.com" />
          <SocialIcon style={{ height: 30, width: 30 }} url="https://github.com" />
          <SocialIcon style={{ height: 30, width: 30 }} url="https://linkedin.com" />
          <SocialIcon style={{ height: 30, width: 30 }} url="https://instagram.com" />
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center md:flex-[1]">
          <Image src="/image-Photoroom.png" alt="logo" width={150} height={150} className="object-fill" />
        </div>

        {/* Right: Theme Toggle & Nav Links (Hidden in Mobile) */}
        <div className="hidden md:flex flex-[1] items-center justify-end gap-5">
          <ThemeToggele />
          <Link href='/' className={theme === 'light' ? 'text-black' : 'text-white'}>Home</Link>
          <Link href='/contact' className={theme === 'light' ? 'text-black' : 'text-white'}>Contact</Link>
          <Link href='/about' className={theme === 'light' ? 'text-black' : 'text-white'}>About</Link>
          <AuthLinks className={theme === 'light' ? 'text-black' : 'text-white'}/>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 focus:outline-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 mt-4  ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-800'}  py-4 rounded-lg shadow-lg`}>
          <ThemeToggele />
          <Link href='/' className="text-white text-3xl" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href='/contact' className="text-white text-3xl" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href='/about' className="text-white text-3xl" onClick={() => setIsOpen(false)}>About</Link>
          <AuthLinks  className='text-white text-3xl'/>
        </div>
      )}
    </nav>
  )
}

export default NavBar
