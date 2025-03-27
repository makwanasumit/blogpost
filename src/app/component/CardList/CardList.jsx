import React from 'react'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../Card/Card'

const CardList = ({className}) => {
  return (
    <div className={`${className} text-4xl font-bold `}>
      <h1 className='m-14'>Recent Posts</h1>
      <div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination className=''/>
    </div>
  )
}

export default CardList