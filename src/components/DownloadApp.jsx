import React from 'react'
import photo from '../assets/images/app-photo.png'
import appStore from '../assets/images/app-store.png'
import googlePlay from '../assets/images/google-play.png'


const DownloadApp = () => {
  return (
    <div className='bg-yellow-400 h-70 px-190 rounded-xl justify-around flex'>
        <div className="flex flex-1 items-end justify-start">
            <img className='h-55' src={ photo } alt="Hardlee's App Preview" />
        </div>
        <div className="flex flex-2 justify-center gap-4 flex-col ">
            <h2 className=" text-red-600 text-4xl text-center font-bold">REWARDS WITH EVERY BITE.</h2>
            <div className="h-16 flex justify-center items-center gap-2">
                <img className='h-12' src={appStore} alt="App Store Link" />
                <img src={googlePlay} className='h-12' alt="Google Play Link" />
            </div>
        </div>
    </div>
  )
}

export default DownloadApp