import React from 'react'

const OtherService = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-white p-3 rounded-lg shadow-lg shadow-gray-200 w-fit border border-gray-100 text-primary text-xl font-medium ">
                {icon}
            </div>
            <h3 className="font-medium text-center">{title}</h3>
            <p className="text-sm text-center">{description}</p>
        </div>
    )
}

export default OtherService
