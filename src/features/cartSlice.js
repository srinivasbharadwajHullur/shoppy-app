import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state,action) => {
            const {item,quantity} = action.payload;
            const existingItem = state.cartItems.find(items => items.id === item.id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
            }
            else {
                state.cartItems.push({...item, quantity})
            }
        },
        incrementQuantities: (state,action) => {
            const itemId = action.payload;
            const itemToIncrement = state.cartItems.find(items => items.id === itemId);
            if (itemToIncrement) {
                itemToIncrement.quantity = itemToIncrement.quantity + 1
            }
        },
        decrementQuantities: (state,action) => { 
            const itemId = action.payload;
            const itemToDecrement = state.cartItems.find(items => items.id === itemId);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity = itemToDecrement.quantity - 1
            }
        },
    }
})
export const {addToCart,incrementQuantities,decrementQuantities} = cartSlice.actions;
export default cartSlice.reducer;