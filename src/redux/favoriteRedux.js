import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToFavorite: (state, action) => {

      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.products[existingIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity:1};
        state.products.push(tempProduct);
      }
    },
    removeFromFavorite: (state, action) => {

        const nextproducts = state.products.filter((product) => product.id !== action.payload.id);
        state.products = nextproducts;
      
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

export const { addToFavorite, removeFromFavorite, getTotals } = favoriteSlice.actions;
export default favoriteSlice.reducer;
