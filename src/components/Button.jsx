import React from 'react'

const Button = ({ text, className, prefix, sufix, onClick }) => {
  return (
    <button onClick={onClick} className={`${className ?? 'w-full text-white bg-gradient-to-r from-primary to-purple-600 group'} py-2 px-6 rounded-md flex justify-center items-center gap-3 cursor-pointer `}>
      {prefix && <span className="text-sm flex items-center">{prefix}</span>}
      <span className="font-medium transition relative group-hover:-translate-x-2 duration-400">{text}</span>
      {sufix && <span className='text-sm flex items-center transition relative group-hover:translate-x-2 duration-400'>{sufix}</span>}
    </button>

  )
}

export default Button
