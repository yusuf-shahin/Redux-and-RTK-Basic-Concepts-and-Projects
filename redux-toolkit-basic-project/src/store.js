import { configureStore } from "@reduxjs/toolkit"
import cartReduce from "../src/features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    //* initial state are selected by useSelector(s => cart.s)
    cart: cartReduce,
  },
})
