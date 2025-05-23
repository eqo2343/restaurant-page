import React from 'react'
import hero from "../assets/images/hero-img.jpg"

const Hero = ({
  title = "New Maple Goodness is Here at Hardees!",
  subtitle = "From our new Maple Biscuits (served all day long) to our new Maple Candied Bacon, we've got all your cravings covered. My Rewards Members get 2x Stars on all Maple purchases when they order in the App! "
}) => {
  return (
    <>
    <section className='flex bg-slate-100 h-auto pl-25 '>
      <div className='flex-2 content-center pr-10 flex gap-3 flex-col justify-center mr-15 mb-10'>
        <h1 className='text-red-600 text-[28px] font-bold'>
          {title}
        </h1>
        <p className='text-xl'>
        {subtitle}
        </p>
        <button className='bg-black text-white rounded-3xl w-32 h-12 font-bold'>Maple Time</button>
      </div>
      <div className='flex-4 bg-black text-white'><img src={hero} /></div>
    </section>
    </>
  )
}

export default Hero