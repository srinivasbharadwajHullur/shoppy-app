import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromWhislist
} from "../features/wishlistSlice";
import { useNavigate } from "react-router-dom";

const WhisList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const whislistItems = useSelector((state) => state.wishlist.wishlistItems);
  const incrementItemQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  const decrementItemQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
  const removeItemFromWhislist = (itemId) => {
    dispatch(removeFromWhislist(itemId))
  }
  const goToCartPage = () => {
    navigate("/cart")
  }

  return (
    <div className="p-20">
      <h1>Your WhisList Items</h1>
      <div className="border border-gray-400 p-5 rounded-lg">
        {whislistItems.map((whislist) => {
          return (
            <div key={whislist.id}>
              <img
                className="w-10"
                src={whislist.image}
                alt="Cant able to fetch the image"
              />
              <h1>{whislist.title}</h1>
              <p>{whislist.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decrementItemQuantity(whislist.id)}
                  className="border border-gray-400 p-1 w-10 rounded"
                >
                  -
                </button>
                <p className="font-bold ml-5 mr-5">{whislist.quantity}</p>
                <button
                  onClick={() => incrementItemQuantity(whislist.id)}
                  className="border border-gray-400 p-1 w-10 rounded"
                >
                  +
                </button>
              </div>
              <button onClick={goToCartPage} className="bg-blue-500 text-white cursor-pointer p-2 rounded-md mr-2">
                Add To Cart
              </button>
              <button onClick={() => removeItemFromWhislist(whislist.id)} className="bg-red-500 text-white cursor-pointer p-2 rounded-md mr-2">
                Remove From Whislist
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhisList;
