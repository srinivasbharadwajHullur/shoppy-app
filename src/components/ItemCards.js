import React from 'react'

const ItemCards = ({featuredItem}) => {
  return (
    <div className='rounded shadow-lg p-4 mt-3 transition transform hover:scale-105'>
        <img src={featuredItem.image} className='rounded w-[250px] h-[170px] cursor-pointer object-contain'/>
        <div className='flex flex-col ml-4'>
            <h1 className='font-semibold line-clamp-1 mt-2'>{featuredItem.title}</h1>
            <p className='font-thin line-clamp-3 mt-2'>{featuredItem.description}</p>
            <p className='text-green-500 font-semibold mt-2'>$ {featuredItem.price}</p>
            <div className='flex mt-4'>
                <div>
                    <button className='text-white cursor-pointer mr-2 p-2 rounded bg-blue-600'>Wishlist</button>
                </div>
                <div>
                    <button className='bg-blue-600 text-white cursor-pointer mr-2 p-2 rounded'>Add To Cart</button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default ItemCards