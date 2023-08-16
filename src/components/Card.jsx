import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Card = ({image, name, occupation, bio}) => {


 

  return (
    <div className="bg-red-500 flex justify-center flex-col items-center gap-2 text-center p-4 rounded-md shadow-lg shadow-cyan-500/50 hover:shadow-none transition-all ease-linear duration-700">
        <img className='w-20 h-20 rounded-full' src={image} alt="" />
        <h2 className='text-xl text-white'>{name}</h2>
        <h2 className='text-xl text-white'>{occupation}</h2>
        <p className='text-white text-sm'>{bio}</p>
    </div>
  )
}
