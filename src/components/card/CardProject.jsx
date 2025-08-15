import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'

const CardProject = ({title, description, image, link, isFeatured, stack, date }) => {
  return (
    <div className='flex flex-col rounded-lg group'>
      <Image src={''} width={300} height={300} alt='Project image' />

      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold group-hover:text-primary'>{title}</h2>
        {isFeatured && <span className='bg-gradient-to-r from-primary to-purple-600 text-white p-2 rounded-full w-fit px-2 py-1'>Destaque</span>}
      </div>

      <p className='text-sm text-gray-700 my-2'>{description}</p>
      <div className='grid grid-cols-4 gap-2'>
            {stack.map((item) => (
                <span className='px-2 py-1 rounded-full bg-background font-medium text-sm ' key={item}>{item}</span>
            ))}
      </div>
      <span className='text-sm text-gray-600'>
        <FaCalendar />
        {date}
      </span>
    </div>
  )
}

export default CardProject
