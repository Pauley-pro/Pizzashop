import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {     // this handles the initial state of the cart until products are added
    products: [],     // no products shows on the page until a product is added. In other words, it'd be empty initially
    quantity: 0,      // quantity will remain at 0 except product is added
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {    // this handles the addition of new products which changes the state 
      state.products.push(action.payload);
      state.quantity += 1;    // this handles the addition of new products to the cart
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {           // this handles a reset to the cart. This restores the state to initial state
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
