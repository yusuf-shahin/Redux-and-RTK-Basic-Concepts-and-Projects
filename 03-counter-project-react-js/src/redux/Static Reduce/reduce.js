export const defaultState = {
  value: 3,
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + action.payload }
    case "decrement":
      return { ...state, value: state.value - action.payload }
    default:
      return { ...state }
  }
}
