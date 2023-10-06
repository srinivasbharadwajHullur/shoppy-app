import React from "react";
import useFetchCategories from "../utils/useFetchCategories";
import {
  MENS_CATEGORIES_IMAGE_URI,
  WOMENS_CATEGORIES_IMAGE_URI,
  ELECTRONICS_IMAGE_URI,
  JEWELLERY_IMAGE_URI,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const { loading, categories, error } = useFetchCategories();
  if (loading || categories.length < 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error While fetching...</div>;
  }
  const goToMensCategories = () => {
    navigate("/menscategories");
  }
  const goToWomensCategories = () => {
    navigate("/womenscategories");
  }
  const goToJewelleryCategories = () => {
    navigate("/jewellerycategories");
  }
  const goToElectronicsCategories = () => {
    navigate("/electronicscategories");
  }
  return (
    <div className="p-10 flex justify-between">
      <div>
        <img
          onClick={goToMensCategories}
          className="w-64 rounded-lg cursor-pointer transition transform hover:scale-105"
          src={MENS_CATEGORIES_IMAGE_URI}
          alt="Mens Category image"
        />
        <h1 className="font-bold mt-2 text-center first-letter:uppercase">{categories[2]}</h1>
      </div>
      <div>
        <img
          onClick={goToWomensCategories}
          className="w-64 rounded-lg cursor-pointer transition transform hover:scale-105"
          src={WOMENS_CATEGORIES_IMAGE_URI}
          alt="Womens Category image"
        />
        <h1 className="font-bold mt-2 text-center first-letter:uppercase">{categories[3]}</h1>
      </div>
      <div>
        <img
          onClick={goToElectronicsCategories}
          className="w-64 rounded-lg cursor-pointer transition transform hover:scale-105"
          src={ELECTRONICS_IMAGE_URI}
          alt="Electronics Category image"
        />
        <h1 className="font-bold mt-2 text-center first-letter:uppercase">{categories[0]}</h1>
      </div>
      <div className="w-64 rounded-lg cursor-pointer transition transform hover:scale-105">
        <img 
            onClick={goToJewelleryCategories}
            className="w-64 rounded-lg cursor-pointer h-[170px]"
            src={JEWELLERY_IMAGE_URI}
            alt="Jewellery Category image"
        />
        <h1 className="font-bold mt-2 text-center first-letter:uppercase">{categories[1]}</h1>
      </div>
    </div>
  );
};

export default FeaturedCategories;
