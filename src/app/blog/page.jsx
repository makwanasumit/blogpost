import CardList from '@/app/component/CardList/CardList'
import Menu from '@/app/component/Menu/Menu'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
        <h1 className='text-4xl text-center font-bold m-14'>Style Blog</h1>
        <div className='flex gap-20 m-6'>
            <CardList className='flex-[3]'/>
            <Menu className='flex-[1] lg:flex hidden flex-col'/>
        </div>
    </div>
  )
}

export default page