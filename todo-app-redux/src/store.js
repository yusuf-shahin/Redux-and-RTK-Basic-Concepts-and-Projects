import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./features/item/itemSlice"
// import filtersReducer from "../features/filters/filtersSlice"

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // filters: filtersReducer,
  },
})
