import { createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({

    name: "product",
    initialState: [],
    reducers: {
        addToCard(state,action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        buyNow(state,action){},
    },

});

console.log(productSlice.actions);

// export { productSlice };
export const { addToCard, buyNow} = productSlice.actions;

export default productSlice.reducer;

