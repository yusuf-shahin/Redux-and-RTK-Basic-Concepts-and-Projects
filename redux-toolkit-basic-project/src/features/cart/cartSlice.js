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
      //! payload come from
      const itemId = action.payload
      //* state is come from initial state
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increment: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount++
    },
    decrement: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      // cartItem.amount = cartItem.amount - 1
      if (cartItem.amount <= 0) return
      cartItem.amount--
    },
  },
})

//? console.log(cartSlice)
// actions: {}
// caseReducers: {}
// getInitialState: ƒ()
// name: "cart"
// reducer: ƒ(state, action)

//! pass the action to the component and invoke this function as parameter of usedispatch()
//? first store useDispatce into a varible name dispatch
//?
//? when we invoke the function inside our use
export const { clearCart, removeItem, increment, decrement } = cartSlice.actions

//! pass the reduce to the storage
export default cartSlice.reducer
