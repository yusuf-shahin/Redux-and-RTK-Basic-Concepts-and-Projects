import { createSlice } from "@reduxjs/toolkit"

const testState = createSlice({
  name: "testState",
  initialState: {
    stateVarible: "",
  },
  reducers: {
    setState: (state, action) => {
      state.stateVarible = action.payload
    },
  },
})

export default testState.reducer
export const { setState } = testState.actions
