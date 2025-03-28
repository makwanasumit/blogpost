import CardList from '@/app/component/CardList/CardList'
import Menu from '@/app/component/Menu/Menu'
import React from 'react'


const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const cat = searchParams.cat || null;

  return (
    <div className='w-full'>
      <h1 className='text-4xl text-center font-bold m-14'>{cat ? `${cat.charAt(0).toUpperCase() + cat.slice(1)} Blog` : "All Blogs"}</h1>
      <div className='flex gap-20 m-6'>
        <CardList className='flex-[3]' page={page} cat={cat} />
        <Menu className='flex-[1] lg:flex hidden flex-col' />
      </div>
    </div>
  )
}

export default page;
