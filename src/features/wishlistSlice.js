import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishList: (state,action) => {
            const {item,quantity} = action.payload;
            const existingItem = state.wishlistItems.find(items => items.id === item.id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
            }
            else {
                state.wishlistItems.push({...item, quantity})
            }
        },
        addItemToCart : (state,action) => {
            const {item,quantity} = action.payload;
            const existingItem = state.wishlistItems.find(items => items.id === item.id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
            }
            else {
                state.wishlistItems.push({...item, quantity})
            }
        },
        incrementQuantity: (state,action) => {
            const itemId = action.payload;
            const itemToIncrement = state.wishlistItems.find(items => items.id === itemId);
            if (itemToIncrement) {
                itemToIncrement.quantity = itemToIncrement.quantity + 1
            }
        },
        decrementQuantity: (state,action) => { 
            const itemId = action.payload;
            const itemToDecrement = state.wishlistItems.find(items => items.id === itemId);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity = itemToDecrement.quantity - 1
            }
        },
        removeFromWhislist : (state,action) => {
            const itemId = action.payload;
            state.wishlistItems = state.wishlistItems.filter(items => items.id !== itemId);
        }
    }
})
export const {addItemToCart,addToWishList,incrementQuantity,decrementQuantity,removeFromWhislist} = wishlistSlice.actions;
export default wishlistSlice.reducer;