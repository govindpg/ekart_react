import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/WishlistSlice";
import cartSli from "./slices/cartSli";
const store =configureStore({
       reducer:{
              wishlistReducer:wishlistSlice,
              // cartReducer:cartSlice
              // cartlistReduce:cartSlice
              cartSl:cartSli
       }
})

export default store;