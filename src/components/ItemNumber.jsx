import React from 'react'

const ItemNumber = ({value, label}) => {
  return (
          <div className="flex flex-col gap-1 items-center justify-center">
            <h3 className="text-3xl font-bold">{value}</h3>
            <span>{label}</span>
          </div>

  )
}

export default ItemNumber
