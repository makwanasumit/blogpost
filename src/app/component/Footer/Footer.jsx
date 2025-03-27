'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = ({ className }) => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${className} items-center justify-center mt-10 flex lg:flex-row flex-col  gap-10 lg:gap-0 ${theme === 'light' ? 'bg-[#382533] text-white': 'bg-[#123] text-white'}`}>
<div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full">
  {/* Logo and Text Section */}
  <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
    {/* Logo */}
    <Image 
      src="/image-Photoroom.png" 
      alt="logo" 
      width={150} 
      height={150} 
      className="object-contain"
    />

    {/* Description */}
    <p className="text-sm md:text-base w">
      The vibrant hub for all Odoo enthusiasts. But what exactly is an "odoophile," and why is our community the perfect place for you? Let's dive in.
    </p>

    {/* Social Icons - Now visible on all screen sizes */}
    <div className="flex gap-3">
      <SocialIcon style={{ height: 30, width: 30 }} url="https://twitter.com" />
      <SocialIcon style={{ height: 30, width: 30 }} url="https://github.com" />
      <SocialIcon style={{ height: 30, width: 30 }} url="https://linkedin.com" />
      <SocialIcon style={{ height: 30, width: 30 }} url="https://instagram.com" />
    </div>
  </div>
</div>

      <div className='flex-[1] flex lg:justify-end justify-center gap-24 font-[300] '>
        <div className='flex flex-col gap-2.5'>
          <span className='font-bold'>Links</span>
          <Link href='/'>HomePage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='flex flex-col gap-2.5'>
          <span className='font-bold'>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Culture</Link>
          <Link href='/'>Travel</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Food</Link>
          <Link href='/'>Fashion</Link>
        </div>
        <div className='flex flex-col gap-2.5'>
          <span className='font-bold'>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Github</Link>
          <Link href='/'>Linked In</Link>
          <Link href='/'>Instagram</Link>
        </div>
      </div>

    </div>
  )
}

export default Footer