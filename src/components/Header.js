import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchResult } from "../features/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
 const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  }
  const addToStore = () => {
    dispatch(searchResult(searchValue))
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
    <div className="shadow-md p-10 flex flex-col">
     <div className="flex justify-evenly">
        <div>
          <h1 className="font-bold">Shopping Cart</h1>
        </div>
        <div className="flex items-center">
          <input
            className="border border-gray-400 rounded-l-lg w-[250px] p-1"
            type="text"
            placeholder="Search for the product...."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <AiOutlineSearch
            size={20}
            onClick={addToStore}
            className="border border-gray-400 rounded-r-lg h-[33.5px] w-12 cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <AiOutlineUser
            className="rounded cursor-pointer mr-2 border border-yellow-400 w-10"
            size={28}
          />
          <AiOutlineHeart
            className="rounded cursor-pointer mr-2 border border-yellow-400 w-10"
            size={28}
          />
          <AiOutlineShoppingCart
            className="rounded cursor-pointer mr-2 border border-yellow-400 w-10"
            size={28}
          />
        </div>
      </div> 
      <div className="flex items-center mt-6 justify-evenly">
        <h1 onClick={goToHome} className="font-bold cursor-pointer">Home</h1>
        <h1 onClick={goToMensCategories} className="font-bold cursor-pointer">Men</h1>
        <h1 onClick={goToWomensCategories} className="font-bold cursor-pointer">Women</h1>
        <h1 onClick={goToJewelleryCategories} className="font-bold cursor-pointer">Jewellery</h1>
        <h1 onClick={goToElectronicsCategories} className="font-bold cursor-pointer">Electronics</h1>
      </div>
    </div>
  );
};

export default Header;
