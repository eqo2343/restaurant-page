import React from 'react';
import Image from '../assets/images/giftcard-page.jpg';
import Card from '../components/Card';

const GiftCards = () => {
  return (
    <>
    <div style={{
         backgroundImage: `url(${Image})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         height: '800px',
         width: '100%',
    }}  className='max-w-full h-auto flex'>
    </div>
    <div className='bg-white flex justify-center gap-4 flex-col flex-1'>
        <h2 className="flex text-center justify-center font-bold text-2xl text-black">GIFT CARDS</h2>
        <div className="container-xl lg:container m-auto border-2 border-black   h-75 rounded-xl flex gap-5">
          <Card>
            <h2 className="text-4xl text-black text-center">PURCHASE A DIGITAL GIFT CARD</h2>
            <p className="text-m">Send a digital gift card and personalized message by email</p>
            <a href='/menu' className='bg-yellow-400 hover:bg-yellow-600 text-black rounded-3xl h-16 w-full flex items-center justify-center text-center font-bold'>
            View Details</a>
          </Card>
          <Card> 
          <h2 className="text-4xl text-black text-center">PURCHASE A DIGITAL GIFT CARD</h2>
          <p className="text-m">Send a digital gift card and personalized message by email</p>
            <a href='/menu' className='bg-yellow-400 hover:bg-yellow-600 text-black rounded-3xl h-16 w-full flex items-center justify-center text-center font-bold'>
            View Details</a>
          </Card>
          <Card>
          <h2 className="text-4xl text-black text-center">PURCHASE A DIGITAL GIFT CARD</h2>
          <p className="text-m">Send a digital gift card and personalized message by email</p>
            <a href='/menu' className='bg-yellow-400 hover:bg-yellow-600 text-black rounded-3xl h-16 w-full flex items-center justify-center text-center font-bold'>
            View Details</a>
          </Card>
        </div>
        <div className='container-xl lg:container m-auto border-2 border-black h-auto rounded-xl flex gap-5'>
          <p className="flex text-center justify-center font-bold text-sm text-black">
              NOTICE OF COLLECTION: For information regarding the categories of personal information collected by this website and the purposes for which the categories of personal information will be used, please see our California Privacy Policy here. To opt-out of the sale of your personal information by Hardee’s, please refer to Section 7 in the California Privacy Policy.
          </p>   
        </div>   
    </div>
    </>
  )
}

export default GiftCards