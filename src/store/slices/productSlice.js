import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({

    name: "product",
    initialState: [],
    reducers: {
        addToCard(state, action) {
            const productId = action.payload;
            const isProductInCart = state.some((product) => product.id === productId.id);
            if (!isProductInCart) {
                state.push(action.payload);
                console.log(action.payload);
            } else {
                console.log("Product is alreay there");
            }

        },
        buyNow(state, action) { },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
    },

});

console.log(productSlice.actions);

// export { productSlice };
export const { addToCard, buyNow, removeUser } = productSlice.actions;

export default productSlice.reducer;

