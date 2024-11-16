//! CDN for Redux
//# <script src="https://cdn.jsdelivr.net/npm/redux@4.2.1/dist/redux.js"></script>

const count = document.querySelector(".num")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")

//* initial state
const initialState = {
  value: 0,
}

//* action identifier
const INCREMENT = "increment"
const DECREMENT = "decrement"

//@ create a action for increament and decreament function which is return a object

//* action creator :-
const increamentValue = (value) => {
  return { type: INCREMENT, payLoad: value }
}

const decreamentValue = (value) => {
  return { type: DECREMENT, payLoad: value }
}

//* create reducer function
const createReducer = (state = initialState, action) => {
  //@ action come from dispatch addEventListener
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payLoad,
    }
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payLoad,
    }
  } else {
    return state
  }
}

const store = Redux.createStore(createReducer)

store.subscribe(render)

increment.addEventListener("click", () => {
  store.dispatch(increamentValue(2))
})

decrement.addEventListener("click", () => {
  store.dispatch(decreamentValue(2))
})

function render() {
  const state = store.getState()
  count.textContent = state.value.toString()
}
render()
