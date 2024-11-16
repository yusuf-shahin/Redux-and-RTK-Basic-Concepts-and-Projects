//* create a action object

const actionArray = [
  { type: "increment", payLoad: 1 },
  { type: "increment", payLoad: 1 },
  { type: "increment", payLoad: 1 },
  { type: "decrement", payLoad: 1 },
  { type: "decrement", payLoad: 1 },
]

// const defaultState = {
//   value: 1,
// }

// const createReducre = (state, action) => {
//   //@ state === defaultState and action === actionArray

//   if (action.type === "increment") {
//     return {
//       ...state,
//       value: state.value + action.payLoad,
//     }
//   } else if (action.type === "decrement") {
//     return {
//       ...state,
//       value: state.value - action.payLoad,
//     }
//   } else {
//     return state
//   }
// }

// const finalResult = actionArray.reduce(createReducre, defaultState)

// // console.log(finalResult) //# {value: 2}

const finalResult = actionArray.reduce(
  (state, action) => {
    if (action.type === "increment") {
      return {
        ...state,
        value: state.value + action.payLoad,
      }
    } else if (action.type === "decrement") {
      return {
        ...state,
        value: state.value - action.payLoad,
      }
    } else {
      return { ...state }
    }
  },
  { value: 1 }
)

const num = document.querySelector(".num")

num.textContent = finalResult.value
