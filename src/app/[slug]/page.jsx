import Comments from '@/app/component/Comments/Comments'
import Menu from '@/app/component/Menu/Menu'
import UserDiv from '@/app/component/UserDiv'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div className='mt-16 px-4 md:px-8 lg:px-16'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-14 items-center'>
                <div className='flex-1 w-full flex flex-col gap-5 text-center lg:text-left'>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">
                        Lost in the Serenity of the Mountains
                    </h1>
                    <UserDiv/>
                </div>
                <div className='flex-1 w-full'>
                    <Image src="/p1.jpg" alt='Image' height={500} width={500} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover rounded-lg' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 mt-14'>
                <div className='flex-[5] text-base md:text-lg leading-relaxed px-2 md:px-4'>
                    <p>
                        There is something profoundly magical about being surrounded by towering mountains, their peaks piercing the sky like ancient sentinels standing guard over the earth...
                    </p>
                    <p>
                        The crisp mountain air fills your lungs, invigorating your soul with every breath...
                    </p>
                    <p>
                        As you hike deeper into the mountains, each step brings you closer to nature’s unspoiled beauty...
                    </p>
                    <p>
                        Reaching a high-altitude meadow, you pause to take in the sheer magnificence of the landscape...
                    </p>
                    <p>
                        As night falls, the sky transforms into a canvas of stars, undimmed by city lights...
                    </p>
                    <p>
                        To be lost in the serenity of the mountains is to be found again—renewed, inspired, and deeply connected to the world around you.
                    </p>
                    <div className='mt-10'>
                        <Comments/>
                    </div>
                </div>
                <div className='flex-[2] hidden lg:flex flex-col'>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Page;
