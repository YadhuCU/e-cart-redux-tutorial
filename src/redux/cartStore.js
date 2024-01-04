import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/prodcutSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const cartStore = configureStore({
  reducer: {
    productSlice,
    wishlistSlice,
    cartSlice,
  },
});

export default cartStore;
