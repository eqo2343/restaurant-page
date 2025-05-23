import React from 'react';
import lines from "../assets/images/line.png"
import promo from "../assets/images/promo-chicken.jpg"

const LatestCravings = () => {
  return (
    <div className='bg-white h-150'>
        <div className="container-xl lg:container m-auto bg-white text-2xl h-100 rounded-xl flex items-center justify-between mt-5">
            <div className='flex gap-3 justify-center pl-15 pr-5 ml-20 h-75 flex-1 flex-col'>
                <div className='text-red-600 text-[28px] font-bold max-w-200'>Hand-Breaded Goodness!</div>
                <div className='max-w-200 text-l'>My Rewards Members can Buy One Hand-Breaded Chicken Sandwich and get another for just $1!</div>
                <button className='bg-black mt-1 h-12 text-white rounded-3xl text-base w-35 flex items-center justify-center font-bold'>Order Now</button>
            </div>
            <div className='flex flex-2'>
                <img className='ml-10 h-100' src={promo} />
            </div>
        </div>
        <div className="container-xl lg:container m-auto bg-white text-2xl h-30 rounded-xl flex items-center justify-between">
            <div>
                <img src={lines} />
            </div>
            <div className='text-5xl font-bold'>Latest Cravings</div>
            <div>
                <img src={lines} />
            </div>
        </div>
    </div>
  )
}

export default LatestCravings