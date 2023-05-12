import { createSlice } from "@reduxjs/toolkit";
import productData from "../ProductData";

interface CartState {
   cart: any[],
   items: typeof productData,
   totalQuantity: number,
   totalPrice: number,
}

const initialState: CartState = {
   cart: [],
   items: productData,
   totalQuantity: 0,
   totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
     addToCart : (state,action) => {
       state.cart.push(action.payload)
     }
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;