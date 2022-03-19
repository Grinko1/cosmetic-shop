import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import favoriteReducer from './favoriteRedux'








export const store = configureStore({
  reducer: {
    user: userReducer,
     cart: cartReducer,
     favorite : favoriteReducer
  },

});

