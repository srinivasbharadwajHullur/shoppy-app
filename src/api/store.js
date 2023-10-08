import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchSlice";
import wishlistSlice from "../features/wishlistSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        wishlist: wishlistSlice,
        cart: cartSlice
    }
})

export default store;