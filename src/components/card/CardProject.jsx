import Image from 'next/image'
import React from 'react'
import { FaRegCalendar } from "react-icons/fa6";

const CardProject = ({ title, description, image, link, isFeatured, stack, date, client, onClick }) => {
  return (
    <a target='_blank' href={onClick}>
      <div  className='flex flex-col  group border border-gray-100 shadow-lg shadow-gray-200 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 '>
        <div className='relative w-full h-[270px] rounded-t-lg overflow-hidden group'>
          <Image
            className="w-full h-full object-cover object-top"
            src={image}
            width={700}
            height={700}
            alt="Project image"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className='p-4'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold group-hover:text-primary'>{title}</h2>
            {isFeatured && <span className='bg-gradient-to-r from-primary to-purple-600 text-white rounded-full w-fit px-3 py-1 text-xs'>Destaque</span>}
          </div>
          <span className='w-full text-sm text-gray-500'>Cliente: {client}</span>
          <p className='text-gray-700 mt-2 mb-2 text-left'>{description}</p>
          <div className='flex items-center gap-2'>
            {stack.map((item) => (
              <span className='px-3 py-1 rounded-full bg-background text-xs' key={item}>{item}</span>
            ))}
          </div>
          <span className='text-sm text-gray-600 text-left flex items-center gap-2 mt-4'>
            <FaRegCalendar />
            {date}
          </span>
        </div>
      </div>
    </a>
  )
}

export default CardProject
