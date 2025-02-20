import { createSlice } from "@reduxjs/toolkit"
import { cartItems } from "../../cartItems"

const initialState = {
  //@ cartItem is a array of object...
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
      // action.payload === id
      // action.payload basically help us to reach the data from component
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
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      //
      state.amount = amount
      state.total = total
    },
  },
})

//? console.log(cartSlice)

//! pass the action to the component and invoke this function as parameter of usedispatch()
export const { clearCart, removeItem, increment, decrement, calculateTotals } =
  cartSlice.actions

//! pass the reducer to the storage
export default cartSlice.reducer
