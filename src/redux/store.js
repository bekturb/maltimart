import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice";
import translationSlice from "./slices/translationSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        translation:translationSlice,
    }
})

export default store;