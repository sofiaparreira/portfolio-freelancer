import React from 'react'

const CardService = ({title, text, isWordpress, isCode, icon}) => {
  return (
    <div className='p-6 bg-white border border-gray-100 rounded-lg shadow-lg shadow-gray-200 flex flex-col transition duration-300 ease-in-out hover:-translate-y-2 group'>
        <div className='flex items-center justify-center mb-6'>
                <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-4 text-xl rounded-xl w-fit group-hover:scale-110 duration-300 transition'>{icon}</div>
            </div>
        <h2 className='text-xl font-semibold pb-2'>{title}</h2>
        <p className='w-full text-gray-600'>{text}</p>

        <div className="flex mt-8 gap-2">
            {isCode && <span className='rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-sm'>Programação</span>}
            {isWordpress && <span className='rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-sm'>WordPress</span>}
        </div>

    </div>
  )
}

export default CardService
