import React from 'react'
import logo from '../assets/images/Hardees_logo.svg';
import stripeImage from '/home/eqo234/repos/hardlees-app/src/assets/images/stripe.png';
import beige from '../assets/images/beige.png';
import star from '../assets/images/star.png';
import line from "../assets/images/line.png"

const Footer = () => {
  return (
    <>
        <div className="bg-black h-100 rounded-xl flex flex-col pb-20">
            <div className=' bg-white rounded-xl flex '>
                <div style={{backgroundImage: `url(${line})`, height: "auto", backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}} className="flex flex-row flex-3 h-40" />
                <div style={{backgroundImage: `url(${beige})` }} className="flex flex-row flex-1 h-40">
        <img className='h-65 absolute right-112' src={star} alt="Hardley's Star" />
    </div>
            </div>
            <div className="container-xl lg:container m-auto bg-black h-auto rounded-xl flex flex-col">
                <div className="flex justify-start items-center p-3 h-35">
                    <img className='h-14'  src={logo} alt="Hardley's Logo" />
                </div>
            </div>
        </div>
   
    
    </>
  )
}

export default Footer