import React from 'react'
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";


const CardFeedback = ({ feedback, stars }) => {
    const totalStars = 5;
    const filledStars = Math.min(stars, totalStars)
    const emptyStars = totalStars - filledStars;

    return (
        <div className='p-4 bg-white shadow-lg shadow-gray-200 rounded-md '>
            <FaQuoteLeft className='text-2xl text-primary' />
            <p className='text-gray-600'>"{feedback}"</p>
            <div className='flex mt-2'>
                {Array(filledStars).fill(0).map((_, i) => (
                    <FaStar key={`filled-${i}`} className='text-yellow-500' />
                ))}
                {Array(emptyStars).fill(0).map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className='text-yellow-500' />
                ))}
            </div>
        </div>
    )
}

export default CardFeedback
