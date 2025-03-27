'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import UserDiv from '../UserDiv'
import { ThemeContext } from '@/context/ThemeContext'

const Comments = () => {

    const status = "authenticated"

    const { theme } = useContext(ThemeContext)

    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold mb-10'>Comments</h1>

            {status === 'authenticated' ? (
                <div className='flex gap-4 items-center justify-between mb-10'>
                    <textarea className={`flex-[9] p-5 w-full border-[1px] ${theme == "ligth" ? 'border-gray-800' : 'border-gray-200'} border-gray-200 outline-none`} placeholder='Write a comment...' />
                    <Button className={`flex-[1] ${theme === 'light' ? 'bg-gray-800 text-white hover:bg-gray-900 hover:text-black' : ' bg-gray-200 hover:bg-gray-300 text-black'}`}>Send</Button>
                </div>
            ) : (
                <Link href="/login">Login to write comment</Link>
            )}
            <div className='flex flex-col gap-2 mb-10'>
                <div>
                    <UserDiv />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, voluptas ea mollitia consectetur soluta quae. Aperiam deleniti, magnam repudiandae doloremque qui saepe? Odit eos enim, repellat suscipit beatae facilis quibusdam tenetur cumque iure.</p>

            </div>
            <div className='flex flex-col gap-2 mb-10'>
                <div>
                    <UserDiv />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, voluptas ea mollitia consectetur soluta quae. Aperiam deleniti, magnam repudiandae doloremque qui saepe? Odit eos enim, repellat suscipit beatae facilis quibusdam tenetur cumque iure.</p>

            </div>
            <div className='flex flex-col gap-2 mb-10'>
                <div>
                    <UserDiv />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, voluptas ea mollitia consectetur soluta quae. Aperiam deleniti, magnam repudiandae doloremque qui saepe? Odit eos enim, repellat suscipit beatae facilis quibusdam tenetur cumque iure.</p>

            </div>
            <div className='flex flex-col gap-2 mb-10'>
                <div>
                    <UserDiv />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, voluptas ea mollitia consectetur soluta quae. Aperiam deleniti, magnam repudiandae doloremque qui saepe? Odit eos enim, repellat suscipit beatae facilis quibusdam tenetur cumque iure.</p>

            </div>
            <div className='flex flex-col gap-2 mb-10'>
                <div>
                    <UserDiv />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis, voluptas ea mollitia consectetur soluta quae. Aperiam deleniti, magnam repudiandae doloremque qui saepe? Odit eos enim, repellat suscipit beatae facilis quibusdam tenetur cumque iure.</p>

            </div>
        </div>
    )
}

export default Comments