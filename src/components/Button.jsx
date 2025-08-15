import React from 'react'

const Button = ({text, className, prefix, sufix}) => {
  return (
    <button className={`${className ? '' : ' w-full'} text-white py-2 px-6 rounded-md bg-gradient-to-r from-primary to-purple-600 flex justify-center items-center gap-3`}>
      <span className="text-sm">{prefix}</span>
      <span className="font-medium">{text}</span>
      <span className='text-sm'>{sufix}</span>
    </button>
  )
}

export default Button
