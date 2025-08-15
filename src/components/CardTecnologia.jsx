import React from 'react'

const CardTecnologia = ({name}) => {
  return (
    <div className='p-4 flex flex-col gap-3 justify-center items-center border border-gray-100 rounded-lg shadow-smdm shadow-gray-50 hover:shadow-gray-200 duration-300 cursor-pointer'>
        <span className='font-medium text-center'>{name}</span>
    </div>
  )
}

export default CardTecnologia
