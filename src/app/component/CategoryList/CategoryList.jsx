import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className="h-auto py-10"> {/* Added h-auto & py-10 */}
      <h1 className="m-14 text-4xl font-bold">Popular Categories</h1>
      
      <div className="flex w-full justify-center">
        <div className="grid lg:gap-10 w-full place-items-center md:gap-8 sm:gap-6 gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {categories.map(({ name, img, color, hoverColor }) => (
            <Link
              key={name}
              href={`/blog?cat=${name.toLowerCase()}`}
              className={`flex flex-col md:flex-row lg:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                capitalize w-5/6 sm:w-[190px] md:w-[180px] lg:w-[220px] 
                h-[100px] sm:h-[120px] md:h-[100px] 
                justify-center  rounded-lg ${color} transition ${hoverColor}`}
            >
              <Image
                src={img}
                alt={name}
                width={60}
                height={60}
                className="h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] object-cover rounded-full"
              />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};



const categories = [
  { name: "Style", img: "/style.jpg", color: "bg-[#57c4ff31]", hoverColor: "hover:bg-[#57c4ffb0]" },
  { name: "Culture", img: "/culture.jpg", color: "bg-[#da85c731]", hoverColor: "hover:bg-[#da85c7b0]" },
  { name: "Travel", img: "/travel.jpg", color: "bg-[#7fb88133]", hoverColor: "hover:bg-[#7fb881b0]" },
  { name: "Coding", img: "/coding.jpg", color: "bg-[#ff795736]", hoverColor: "hover:bg-[#ff7957b0]" },
  { name: "Food", img: "/food.jpg", color: "bg-[#ffb00f45]", hoverColor: "hover:bg-[#ffb00fb0]" },
  { name: "Fashion", img: "/fashion.jpg", color: "bg-[#5e4fff31]", hoverColor: "hover:bg-[#5e4fffb0]" },
];

export default CategoryList;
