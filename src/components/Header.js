import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../features/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  let totalQuantity = 0;
  const getWhislistItemQuantity = useSelector(
    (state) => state.wishlist.wishlistItems
  );
  for (let i = 0; i <= getWhislistItemQuantity.length - 1; i++) {
    totalQuantity = totalQuantity + getWhislistItemQuantity[i].quantity;
  }
  let cartItems = 0;
  const getCartQuantity = useSelector((state) => state.cart.cartItems);
  for (let i = 0; i <= getCartQuantity.length - 1; i++) {
    cartItems = cartItems + getCartQuantity[i].quantity;
  }
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const addToStore = () => {
    dispatch(searchResult(searchValue));
  };
  const goToMensCategories = () => {
    navigate("/menscategories");
  };
  const goToWomensCategories = () => {
    navigate("/womenscategories");
  };
  const goToJewelleryCategories = () => {
    navigate("/jewellerycategories");
  };
  const goToElectronicsCategories = () => {
    navigate("/electronicscategories");
  };
  const goToWhislistPage = () => {
    navigate("/whislist");
  };
  const goToCartPage = () => {
    navigate("/cart");
  };
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
          <span className="relative">
            <AiOutlineHeart
              className="rounded cursor-pointer border border-yellow-400 w-10 mr-2"
              size={28}
              onClick={goToWhislistPage}
            />
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {totalQuantity}
            </span>
          </span>
          <span className="relative">
            <AiOutlineShoppingCart
              className="rounded cursor-pointer mr-2 border border-yellow-400 w-10"
              size={28}
              onClick={goToCartPage}
            />
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {cartItems}
            </span>
          </span>
        </div>
      </div>
      <div className="flex items-center mt-6 justify-evenly">
        <h1 onClick={goToHome} className="font-bold cursor-pointer">
          Home
        </h1>
        <h1 onClick={goToMensCategories} className="font-bold cursor-pointer">
          Men
        </h1>
        <h1 onClick={goToWomensCategories} className="font-bold cursor-pointer">
          Women
        </h1>
        <h1
          onClick={goToJewelleryCategories}
          className="font-bold cursor-pointer"
        >
          Jewellery
        </h1>
        <h1
          onClick={goToElectronicsCategories}
          className="font-bold cursor-pointer"
        >
          Electronics
        </h1>
      </div>
    </div>
  );
};

export default Header;
