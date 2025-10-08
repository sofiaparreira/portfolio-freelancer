import React from 'react'

const InputContainer = ({label, name, required, value, onChange}) => {
  return (
    <div className='space-y-1'>
      <label className='font-medium text-sm'>{label}</label>
        <input type="text" name={name} required={required} value={value} onChange={onChange} className='py-2 px-4 w-full rounded-md border border-gray-100 outline-none focus:border-gray-200' />
    </div>
  )
}

export default InputContainer
