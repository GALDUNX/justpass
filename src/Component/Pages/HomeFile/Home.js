import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../Images/Ellipse 8.png'
import people from '../../Images/Group 1.png'

const Home = () => {
  return (
        <section className="hero relative py-28 min-h-screen text-white bg-black  text-center">
            <img src={image} className='absolute bottom-0 right-4'/>
      <div className="container max-w-[800px] py-20 mx-auto">

        <div className="w-full space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leadind-[2] font-bold">
            Unlock The Best Of Web 3
          </h1>
          <p className='text-[#FFFFFF99]'>
            Access a world of Web3 opportunities securely with a single sign-in. Effortlessly connect
             to decentralized applications and services, streamline your user experience. 
          </p>
           <div className="flex gap-3 justify-center  items-center">
            <div>
              <button to="/" className='h-11 px-8  rounded-3xl text-black bg-[#52FF4F] '>
                Connect Wallet
              </button>
            </div>
            <div className='flex gap-3 items-center'>
             <img src={people} alt='name'/>
             <div className='text-left text-[#FFFFFF99] w-[200px]'>Verify and start claiming with people</div>
            </div>
          </div>
          </div>
      </div>
      </section>
  )
}

export default Home
