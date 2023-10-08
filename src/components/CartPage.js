import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromWhislist
} from "../features/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { incrementQuantities, decrementQuantities } from "../features/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const whislistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const incrementItemQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
    dispatch(incrementQuantities(itemId))
  };
  const decrementItemQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
    dispatch(decrementQuantities(itemId))
  };


 

  let totalPrice = 0;
  for(let i=0;i<=whislistItems.length-1;i++) {
    totalPrice = totalPrice + whislistItems[i].quantity * whislistItems[i].price
  }

  let cartTotalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartTotalPrice += cartItems[i].quantity * cartItems[i].price;
  }


  const goToSuccessPage = () => {
    navigate("/successpage")
  }
  return (
    <div className="p-20">
      <h1>Your Order Summary</h1>
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
            </div>
          );
        })}
                <h2>Cart Items:</h2>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            {/* Render cart item information */}
            <img
              className="w-10"
              src={cartItem.image}
              alt="Cannot fetch the image"
            />
            <h1>{cartItem.title}</h1>
            <p>{cartItem.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => decrementItemQuantity(cartItem.id)}
                className="border border-gray-400 p-1 w-10 rounded"
              >
                -
              </button>
              <p className="font-bold ml-5 mr-5">{cartItem.quantity}</p>
              <button
                onClick={() => incrementItemQuantity(cartItem.id)}
                className="border border-gray-400 p-1 w-10 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="mt-2">
          <h1 className="font-bold">Total - Wishlist: {totalPrice}</h1>
          <h1 className="font-bold">Total - Cart: {cartTotalPrice}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
            <button onClick={goToSuccessPage} className="bg-green-500 text-white rounded mt-2  p-2">CheckOut</button>
      </div>
    </div>
  );
};

export default CartPage;
