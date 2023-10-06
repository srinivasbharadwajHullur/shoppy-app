import React from 'react';
import useFetchWomensCategoriesData from '../utils/useFetchWomensCategories';
import ItemCards from './ItemCards';

const WomensCategories = () => {
    const {loading,error,womensItems} = useFetchWomensCategoriesData();
    if (loading || womensItems.length < 0) {
      return <div>Loading...</div>
    }
    if (error) {
      return error
    }
  return (
    <div className="p-12">
      <h1 className="text-center font-extrabold mb-4 underline hover:underline-offset-4">Womens Category</h1>
      <div className="flex flex-wrap">
        {womensItems.map((featuredItem) => {
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

export default WomensCategories