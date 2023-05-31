import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.id);
            if (product) {
                product.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload)
            }
        }
    }
})


export const { addToCart  } = cartSlice.actions;
export default cartSlice.reducer;