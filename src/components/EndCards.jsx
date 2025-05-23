import React from 'react';
import Card from './Card';
import endCardOne from "/home/eqo234/repos/hardlees-app/src/assets/images/endCard1.png";
import endCardTwo from "/home/eqo234/repos/hardlees-app/src/assets/images/endCard2.jpg";
import endCardThree from "/home/eqo234/repos/hardlees-app/src/assets/images/endCard3.png";

const EndCards = () => {
  return (

    <>
    <div className="flex bg-white mb-40">
        <div className="container-xl lg:container m-auto bg-white h-auto rounded-xl">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 gap-3 h-auto"> 
                <Card bg={"bg-black"} gap={'gap-5'} p={"pb-30"} justify={"justify-start"} className="flex"> 
                    <img src={ endCardOne } alt="Friendly counter representative" className='' />
                    <div className="flex p-6 flex-col gap-6">
                        <h2 className="text-white text-2xl font-bold pt-10 ">JOIN OUR TEAM</h2>
                        <p className="text-xl text-white ">At Hardee's the opportunities to shine are even bigger than our burgers! </p>
                        <a href='/menu' className='bg-yellow-400 hover:bg-red-700 hover:text-white text-black rounded-3xl h-12 w-40 flex items-center justify-center text-center font-bold'>
                        Learn More
                        </a>
                    </div>
                </Card>
                <Card bg={"bg-black"} gap={"gap-5"} p={"pb-30"} justify={"justify-start"} className=" flex">
                    <img src={ endCardTwo } alt="Hardley's Front View" />
                    <div className="flex p-6 flex-col gap-6">
                        <h2 className="text-white text-2xl font-bold pt-10 ">SIGN UP FOR MY REWARDS</h2>
                        <p className="text-xl text-white ">New Members get a free sandwich with $1 min. purchase when you sign up.</p>
                        <a href='/menu' className='bg-yellow-400 hover:bg-red-700 hover:text-white text-black rounded-3xl h-12 w-40 flex items-center justify-center text-center font-bold'>
                        JOIN NOW
                        </a>
                    </div>
                </Card>
                <Card bg={"bg-black"} gap={"gap-5"} p={"pb-30"} justify={"justify-start"} className=" flex ">
                    <img src={ endCardThree } alt="Hardley's Girft-Cards" />
                    <div className="flex p-6 flex-col gap-6">
                        <h2 className="text-white text-2xl font-bold pt-10">DIGITAL GIFTCARDS NOW</h2>
                        <p className="text-xl text-white">Give the Gift of Delicious Burgers & Biscuits.</p>
                        <a href='/menu' className='bg-yellow-400 hover:bg-red-700 hover:text-white text-black rounded-3xl h-12 w-40 flex items-center justify-center text-center font-bold'>
                        BUY NOW
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default EndCards