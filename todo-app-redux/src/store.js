import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./features/item/itemSlice"
import testReducer from "./features/item/testSlice"
// import filtersReducer from "../features/filters/filtersSlice"

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    testState: testReducer,
    // filters: filtersReducer,
  },
})
