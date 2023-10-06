import React from 'react';
import {BANNER_URI} from '../utils/constants';

const Banner = () => {
  return (
    <div className='flex justify-around bg-yellow-400'>
        <div className='flex flex-col justify-center'>
            <h1 className='font-extrabold text-3xl'>UP TO 10% DISCOUNT</h1>
            <h1 className='font-bold text-5xl w-[365px] mt-2'>CHECKOUT THE PRODUCTS BELOW</h1>
            <button className='mt-2 border border-gray-600 cursor-pointer rounded w-40 p-3'>SHOP NOW</button>
        </div>
        <div>
            <img src={BANNER_URI} alt='Banner Image'/>
        </div>
    </div>
  )
}

export default Banner