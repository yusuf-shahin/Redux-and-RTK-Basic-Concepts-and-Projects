# Simple Redux Counter project :-

- Complete this project step by step & try different different example

### store.js (file) :

- First create a **store.js** file , where we create our store of **Redux** by `createStore()` method. Inside the peremeter of `createStore()` method we pass the name of **reduce** function .
- `createStore(reducer)` store this into a varible and export it

**The Code is -**

```js
import { createStore } from "redux"
import { reducer } from "./reduce"

const store = createStore(reducer)

export default store
```

### reduce.js (file) :

- Create a **reduce.js** file where we write our code logic to control our state . In **reduce** function we get two thing as _peremeter_ : **state** and **action** to change the state value
- Here we use the **state** value default .
- Set the **action** to change the state value .

```js
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
```

- Here action is come from `useDispatch()` . Which will discuss letter .

### Provider ( main.jsx )

- main.js we **imprort** `{ Provider }` _from_ `react-redux` and `store` from `"./redux/store.js"` .
- we warp our `<App />` component by **Provider** and pass `store={store}`

**The Whole code is**

```jsx
import { Provider } from "react-redux"
import store from "./redux/store.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
```

- Now we get **reducer** function in every component .

### Counter.jsx Component :

- We get two hook from **react-redux**
- `import { useDispatch, useSelector } from "react-redux"`
- basically get our **state** and **dispatch** function from it .

```jsx
//* defaultState
const state = useSelector((state) => state)

//* pass the object for action
const dispatch = useDispatch()
```

**The Whole code is**

```jsx
import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  //* defaultState
  const state = useSelector((state) => state)

  //* pass the object for action
  const dispatch = useDispatch()
  // console.log(state.value)

  return (
    <>
      <span
        className='decrement'
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        -
      </span>
      <span className='num'>{state.value}</span>
      <span
        className='increment'
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        +
      </span>
    </>
  )
}

export default Counter
```
