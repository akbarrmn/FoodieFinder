import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from './ProductSlices/index'

const store = configureStore({
    reducer: {
        product: ProductSlices,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store