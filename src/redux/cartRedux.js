import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addProduct: (state, action) => {

      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.products[existingIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: action.payload.cartQuantity };
        state.products.push(tempProduct);
      }
    },
    removeOne: (state, action) => {
      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);

      if (state.products[existingIndex].cartQuantity > 1) {
        state.products[existingIndex].cartQuantity -= 1;
      } else if (state.products[existingIndex].cartQuantity === 1) {
        const nextproducts = state.products.filter((product) => product.id !== action.payload.id);
        state.products = nextproducts;
      }
    },
    getTotals(state) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addProduct, removeOne, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
