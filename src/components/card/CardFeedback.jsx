import React from 'react'
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";


const CardFeedback = ({ description, stars, name, project }) => {
    const totalStars = 5;
    const filledStars = Math.min(stars, totalStars)
    const emptyStars = totalStars - filledStars;

    return (
        <div className='p-6 bg-white shadow-lg shadow-gray-200 rounded-md '>
            <FaQuoteLeft className='text-2xl text-primary' />
            <p className='text-gray-600 italic py-4'>"{description}"</p>
            <div className='flex mb-3'>
                {Array(filledStars).fill(0).map((_, i) => (
                    <FaStar key={`filled-${i}`} className='text-yellow-500' />
                ))}
                {Array(emptyStars).fill(0).map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className='text-yellow-500' />
                ))}
            </div>
            <h3 className='font-medium'>{name}</h3>
            <span className='text-sm text-primary'>{project}</span>
        </div>
    )
}

export default CardFeedback
