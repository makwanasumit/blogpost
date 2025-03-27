import Image from 'next/image'
import React from 'react'

const UserDiv = () => {
    return (
        <div className='flex items-center gap-4 text-sm font-semibold'>
            <div>
                <Image src="/p1.jpg" alt='Image' height={50} width={50} className='aspect-square object-cover rounded-[50%]' />
            </div>
            <div className='opacity-70'>
                <span className='font-extrabold'>Sumit - </span>
                <span>11.05.2025</span>
            </div>
        </div>
    )
}

export default UserDiv