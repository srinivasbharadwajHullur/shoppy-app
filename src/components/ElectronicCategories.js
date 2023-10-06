import React from 'react';
import ItemCards from './ItemCards';
import useFetchElectronicData from '../utils/useFetchElectronicData';

const ElectronicsCategories = () => {
    const {loading,error,electronicItems} = useFetchElectronicData();
    if (loading || electronicItems.length < 0) {
      return <div>Loading...</div>
    }
    if (error) {
      return error
    }
  return (
    <div className="p-12">
      <h1 className="text-center font-extrabold mb-4 underline hover:underline-offset-4">Electronics Category</h1>
      <div className="flex flex-wrap">
        {electronicItems.map((featuredItem) => {
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

export default ElectronicsCategories