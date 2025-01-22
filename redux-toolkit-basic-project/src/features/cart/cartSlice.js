import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "carts",
  //* pass this initialState in our storage through reducer
  initialState,

  //* change our current state by reducer and we export the function through storage

  //* we easily control our cartItem by it .
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      // console.log(actions)
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
  },
})

//? console.log(cartSlice)
// actions: {}
// caseReducers: {}
// getInitialState: ƒ()
// name: "cart"
// reducer: ƒ(state, action)

export const { clearCart, removeItem } = cartSlice.actions

//! pass it to the storage
export default cartSlice.reducer
