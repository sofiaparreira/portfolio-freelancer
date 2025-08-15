import Image from 'next/image'
import React from 'react'

const CardTecnologia = ({name, icon}) => {
  return (
    <div className='py-4 bg-white flex flex-col gap-4 justify-center items-center border border-gray-100 rounded-lg shadow-md shadow-gray-50 hover:shadow-gray-100 hover:shadow-lg duration-300 cursor-pointer'>
      <Image src={icon} alt='Icone da tecnologia' width={40} height={40} />
        <span className='font-medium text-center'>{name}</span>
    </div>
  )
}

export default CardTecnologia
