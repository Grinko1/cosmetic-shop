import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    products: [],

  },
  reducers: {
    addToFavorite: (state, action) => {

      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.products[existingIndex].cartQuantity = 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity:1};
        state.products.push(tempProduct);
      }
    },
    removeFromFavorite: (state, action) => {

        const nextproducts = state.products.filter((product) => product.id !== action.payload.id);
        state.products = nextproducts;
      
    }

  },
});

export const { addToFavorite, removeFromFavorite, getTotals } = favoriteSlice.actions;
export default favoriteSlice.reducer;
