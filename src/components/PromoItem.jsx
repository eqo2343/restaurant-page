import React from 'react'
import Card from './Card'
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from 'react';

const PromoItem = ({item, imageSrc}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = item.description;

    if (!showFullDescription) {
        description = description.substring(0, 60) + '...';
    }

  return (

    <Card>
    <img className="max-h-40" src={ imageSrc } />
    <h2 className="text-3xl font-bold">{item.title}</h2>
    <p className="m-2">{description}</p>
    <button onClick={ () => setShowFullDescription((prevState) => !prevState) } className="text-yellow-600 mb-5 hover:text-yellow-800">
        { showFullDescription ? 'Less' : 'More'}
        </button>
    <p>{item.calories}</p>
    <a href='/menu' className='bg-yellow-400 hover:bg-red-700 hover:text-white text-black rounded-3xl h-12 w-40 flex items-center justify-center text-center font-bold'>
       View Details
    </a>
</Card>
  )
}

export default PromoItem