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

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const productToUpdate = state.find((product) => product.id === id);
      
            if (productToUpdate) {
              productToUpdate.quantity = quantity;
              console.log(action.payload, "qty")
            }
          },
        login(state, action){
            
        },
        buyNow(state, action) {
     

         },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
    },
});

console.log(productSlice.actions);
export const { addToCard, buyNow, removeUser, updateQuantity } = productSlice.actions;

export default productSlice.reducer;

