'use client'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { ThemeContext } from '@/context/ThemeContext'

const Pagination = ({ className }) => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${className} flex justify-between`}>

      <Button className={`px-8 py-6 cursor-pointer ${theme === 'light' ? 'bg-gray-800 hover:bg-gray-900': 'bg-gray-200 text-black hover:bg-gray-300'}`}>Prev</Button>
      <Button className={`px-8 py-6 cursor-pointer ${theme === 'light' ? 'bg-gray-800 hover:bg-gray-900': 'bg-gray-200 text-black hover:bg-gray-300'}`}>Next</Button>

    </div>
  )
}

export default Pagination