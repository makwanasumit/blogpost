'use client'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { ThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'

const Pagination = ({ className, currentPage, totalPages, cat }) => {
  const { theme } = useContext(ThemeContext)
  const router = useRouter()

  // Disable buttons based on pagination
  const isPrevDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  // Generate correct page URL
  const generatePageUrl = (pageNumber) => {
    const base = cat ? `?page=${pageNumber}&cat=${cat}` : `?page=${pageNumber}`;
    return base;
  };

  return (
    <div className={`${className} flex justify-between`}>
      <Button
        onClick={() => router.push(generatePageUrl(currentPage - 1))}
        disabled={isPrevDisabled}
        className={`px-8 py-6 cursor-pointer ${theme === 'light' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
      >
        Prev
      </Button>

      <Button
        onClick={() => router.push(generatePageUrl(currentPage + 1))}
        disabled={isNextDisabled}
        className={`px-8 py-6 cursor-pointer ${theme === 'light' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination;
