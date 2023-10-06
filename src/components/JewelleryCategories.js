import React from 'react';
import ItemCards from './ItemCards';
import useFetchJewelleryCategoryData from '../utils/useFetchJewelleryData';

const JewelleryCategories = () => {
    const {loading,error,jewelleryItems} = useFetchJewelleryCategoryData();
    if (loading || jewelleryItems.length < 0) {
      return <div>Loading...</div>
    }
    if (error) {
      return error
    }
  return (
    <div className="p-12">
      <h1 className="text-center font-extrabold mb-4 underline hover:underline-offset-4">Jewellery Category</h1>
      <div className="flex flex-wrap">
        {jewelleryItems.map((featuredItem) => {
          return (
            <div key={featuredItem.id} className="w-1/4 px-4 mb-4">
              <ItemCards featuredItem={featuredItem} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default JewelleryCategories