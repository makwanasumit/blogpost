import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories")

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}
console.log(getData)


const CategoryList = async () => {

  const data = await getData()

  console.log(data[0])
  return (
    <div className="h-auto py-10"> {/* Added h-auto & py-10 */}
      <h1 className="m-14 text-4xl font-bold">Popular Categories</h1>
      <div>

      </div>


      <div className="flex w-full justify-center">
        <div className="grid lg:gap-10 w-full place-items-center md:gap-8 sm:gap-6 gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data.map(({ id, title, color, hoverColor, img }) => (
            <Link
              href={`/blog?cat=${title.toLowerCase()}`}
              key={id}
              className={`flex flex-col md:flex-row lg:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 
              capitalize w-5/6 sm:w-[190px] md:w-[180px] lg:w-[220px] 
              h-[100px] sm:h-[120px] md:h-[100px] 
              justify-center  rounded-lg ${color} transition ${hoverColor}`}>

              {img && (

                <Image
                  src={img}
                  alt={title}
                  width={60}
                  height={60}
                  className="h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] object-cover rounded-full"
                />
              )}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">{title}</span>
            </Link>

          ))}
        </div>

      </div>
    </div>
  );
};




export default CategoryList;
