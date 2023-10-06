import React, { useEffect } from "react";
import useFetchFeaturedItems from "../utils/useFetchFeaturedItems";
import ItemCards from "./ItemCards";
import { useSelector } from "react-redux";

const FeaturedItems = () => {
  const { loading, featuredItems, error } = useFetchFeaturedItems();
  const searchedValue = useSelector((state) => state.search.searchValue);
  if (loading || featuredItems.length < 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  let filteredItems = featuredItems;
  //Check for searchValue then only apply filter logic
  if (searchedValue) {
    filteredItems = featuredItems.filter((filterItem) => {
        return filterItem.title && filterItem.title.toLowerCase().includes(searchedValue.toLowerCase());
    })
  }
  
  return (
    <div className="p-12">
      <h1 className="text-center font-extrabold mb-3">Featured Items</h1>
      <div className="flex flex-wrap">
        {filteredItems.map((featuredItem) => {
          return (
            <div key={featuredItem.id} className="w-1/4 px-4 mb-4">
              <ItemCards featuredItem={featuredItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedItems;
