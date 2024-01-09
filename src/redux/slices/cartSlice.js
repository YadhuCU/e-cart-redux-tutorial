import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //TODO: find the currentProduct(payload) is exist in the reducer
      //TODO: if NO ->  add new keyvalue 'quantity': 1
      //TODO: if YES -> destructure the product in state and increament the quantity

      const product = state.find((item) => item.id == action.payload.id);
      if (product) {
        const newState = state.filter((item) => item.id != product.id);
        product.quantity++;
        product.grandTotal = product.quantity * product.price;
        state = [...newState, product];
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          grandTotal: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    emptyCart: (state) => {
      return (state = []);
    },
    incrementQuantity: (state, action) => {
      const product = state.find((item) => item.id == action.payload);
      const newState = state.filter((item) => item.id != product.id);
      product.quantity++;
      product.grandTotal = product.quantity * product.price;
      state = [...newState, product];
    },
    decrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);

      --product.quantity;
      product.grandTotal = product.quantity * product.price;

      const newState = state.filter((item) => item.id != product.id);
      if (product.quantity > 0) {
        state = [...newState, product];
      } else {
        state.splice(0, state.length);
        newState.forEach((item) => state.push(item));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
