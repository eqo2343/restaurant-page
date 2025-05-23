import React from 'react';
import logo from '../assets/images/Hardees_logo.svg';
import { IoFastFoodOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { TbBriefcase2 } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";



const Navbar = () => {
  return (
    <>
    <nav className='bg-black h-50'>
        <div className="container-xl lg:container m-auto bg-black   h-50 rounded-xl flex flex-col">
            <div className='border-b-2 border-white flex flex-1'>
                <div className='flex flex-2 p-5'>
                <div className='  flex text-white hover:text-yellow-600 font-bold gap-1 text-l'>
                    <IoLocationSharp size={30} className='text-yellow-400' /> Find My Hardlee's
                </div>
                </div>
                <div className='  flex flex-1'>
                    <button href="/gift-cards" className='flex-1 flex hover:text-yellow-400 p-3 text-white font-bold gap-2 text-l items-center'>
                        <IoGiftOutline size={20} className='text-yellow-400' /> Giftcards
                    </button>
                    <div className='flex-1 flex hover:text-yellow-400 p-3 text-white font-bold gap-2 text-l items-center'>
                        <TbBriefcase2 size={20} className='text-yellow-400' />Join Our Team
                    </div>
                    <div className='flex-1 hover:text-yellow-400 flex p-3 text-white font-bold gap-2 text-l items-center'>
                        <GiKnifeFork size={20} className='text-yellow-400' /> Franchising
                    </div>
                </div>
            </div>
            <div className='flex flex-2'>
                <div className='flex-1 flex-row flex'>
                    <div className='flex-2 p-5   items-center'>
                        <img className='h-14'  src={logo} />
                    </div>
                    <div className='flex flex-1 decoration-yellow-400 no-underline hover:underline font-bold text-white items-center justify-center'>Menu</div>
                    <div className='flex flex-1 decoration-yellow-400 no-underline hover:underline font-bold text-white items-center justify-center'>Offers</div>
                    <div className='flex flex-1 decoration-yellow-400 no-underline hover:underline font-bold text-white items-center justify-center'>My Rewards</div>
                </div>
                <div className='flex-1   flex justify-end self-center p-5'>
                <button className='bg-yellow-400 hover:bg-red-600 hover:text-white text-black rounded-3xl h-12 w-40 flex items-center p-1 gap-1 pl-5 font-bold'>
                    <IoFastFoodOutline size={30} className='text-black hover:text-white'/> Order Now
                </button>
                </div>
            </div>

        </div>

    </nav>
    </>
  )
}

export default Navbar