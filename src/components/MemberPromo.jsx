import React from 'react'
import promo from "../assets/images/member-promo.png"

const MemberPromo = () => {
  return (
    <div className='bg-white h-150'>
        <div className="container-xl lg:container m-auto bg-white text-2xl h-100 rounded-xl flex items-center justify-between mt-5">
            <div className='flex gap-3 justify-center pl-15 pr-5 ml-20 h-75 flex-1 flex-col'>
                <div className='text-red-600 text-[38px] font-bold max-w-200'>Free Sandwich for New Members</div>
                <div className='max-w-200 text-l'>Sign up for My Rewards™ today and get immediate benefits – like an offer for one FREE Famous Star, Hand-Breaded Chicken Sandwich, Frisco Burger, Bacon Egg & Cheese Biscuit, or Frisco Breakfast Sandwich, w/ min. $1 purchase.</div>
                <button className='bg-black mt-1 h-12 text-white rounded-3xl text-base w-35 flex items-center justify-center font-bold'>JOIN NOW</button>
            </div>
            <div className='flex flex-2'>
                <img className='ml-10 h-150' src={promo} />
            </div>
        </div>
    </div>
  )
}

export default MemberPromo