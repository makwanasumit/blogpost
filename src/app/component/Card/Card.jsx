'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const Card = ({ post }) => {
    const { theme } = useContext(ThemeContext)
    const [category, setCategory] = useState("")

    const { id, img, title, desc, createdAt, catSlug } = post

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(`/api/categories?slug=${catSlug}`)
                if (!res.ok) throw new Error("Failed to fetch category")

                const data = await res.json()

                if (data.length > 0) {
                    setCategory(data[0].title) // Assuming `title` exists in category data
                } else {
                    setCategory("Unknown") // Fallback if category isn't found
                }
            } catch (error) {
                console.error("Error fetching category:", error)
                setCategory("Unknown")
            }
        }

        if (catSlug) fetchCategory()
    }, [catSlug])

    return (
        <div className='mb-14 mx-auto lg:max-w-full md:max-w-[53rem] max-w-[33rem]'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-14 items-center'>
                {/* Image Container */}
                <div className='flex-1 w-full'>
                    <Image
                        src={img}
                        alt="featured-image"
                        height={500}
                        width={500}
                        className="h-[250px] sm:h-[300px] lg:h-[350px] w-full object-cover rounded-lg"
                    />
                </div>

                {/* Text Container */}
                <div className='flex-1 w-full flex flex-col gap-5'>
                    <div className={`${theme === 'light' ? 'text-gray-800 ' : 'text-gray-400'} text-sm`}>
                        <span>{new Date(createdAt).toDateString()} - </span>
                        <span>{category.toUpperCase()}</span>
                    </div>
                    <Link href='/'>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            {title}
                        </h1>
                    </Link>
                    <p className={`text-sm sm:text-lg md:text-xl font-[400] ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                        {desc}
                    </p>
                    <Link href='/' className={`text-xs sm:text-sm md:text-base font-semibold underline pb-2 ${theme === 'light' ? 'border-gray-800 ' : ' border-gray-400'}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
