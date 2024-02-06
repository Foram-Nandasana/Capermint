 import { configureStore } from "@reduxjs/toolkit";
//  import { productSlice } from "./slices/productSlice";
import productSlice from "./slices/productSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    product: productSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    // reducer: {
    //     product: productSlice.reducer,
    //     product: productSlice,
    // },

    reducer: persistedReducer
 });



 export default store;