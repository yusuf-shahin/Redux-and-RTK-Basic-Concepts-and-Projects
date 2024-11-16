# How can we use Redux in vanilla javascript .

### Add CDN link in HTML

```js
<script src='https://cdn.jsdelivr.net/npm/redux@4.2.1/dist/redux.js'></script>
```

### stap one 1 - create a initial state

```js
const initialState = {
  value: 0,
}
```

### step two 2 - create a reducer function to set our all Logic

```js
const createReducer = (state = initialState, action) => {
  //@ action come from dispatch addEventListener
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    }
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    }
  } else {
    return state
  }
}
```

- here action is come from `state.dispatch()` method in addEventListener.

### step three 3 : pass the createReducer function in Redux.createStore() and store it in a "store" varible .

```js
const store = Redux.createStore(createReducer)
```

- It basically provide us **dispatch** ( _store.dispatch()_ ) method **which take a object as argument and help us to set our action type** and **getState()** ( _store.getState()_ ) method which return state to render it in our UI .

### step four 4 : subscribe the store and pass the render function to update our UI in browser .

```js
store.subscribe(render)
```

### step four 5 : take dispatch method from store and pass the type .

```js
increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" })
})

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" })
})
```

### step six 6 render function what we want to render in our UI .

```js
function render() {
  const state = store.getState()
  count.textContent = state.value.toString()
}
render()
```

### The whole code is :-

```jsx
//! CDN for Redux
//# <script src="https://cdn.jsdelivr.net/npm/redux@4.2.1/dist/redux.js"></script>

const count = document.querySelector(".num")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")

//! stap one 1 - create a initial state

//* initial state
const initialState = {
  value: 0,
}

//! step two 2 - create a reducer function to set our all Logic

//* create reducer function
const createReducer = (state = initialState, action) => {
  //@ action come from dispatch addEventListener
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    }
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    }
  } else {
    return state
  }
}

//! step three 3 :  pass the createReducer function in Redux.createStore() and store it in a "store" varible  .

const store = Redux.createStore(createReducer)
//@ It basically provide us dispatch( which take a object as argument and help us to set our action type) and our state to render it in our UI .

//!  step four 4 : subscribe the store and pass the render function to update our UI in browser .
store.subscribe(render)

//! step four 5 : take dispatch method from store and pass the type .
increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" })
})

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" })
})

//! step six 6 render function what we want to render in our UI .
function render() {
  const state = store.getState()
  count.textContent = state.value.toString()
}
render()
```

### We also add payLoad inside our _dispatch_ method obj, it help us to control our increment and decrement

```jsx
increment.addEventListener("click", () => {
  store.dispatch({ type: "increment", payLoad: 3 })
})

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement", payLoad: 3 })
})
```

- here we set that in everytime our state increase and decrease by 3

**in createReducer func**

```jsx
const createReducer = (state = initialState, action) => {
  //@ action come from dispatch addEventListener
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
    return state
  }
}
```

### We also create action identifier varible and action creator function which is return a object .

```jsx
const INCREMENT = "increment"
const DECREMENT = "decrement"

//* action creator :-
const increamentValue = (value) => {
  return { type: INCREMENT, payLoad: value }
}

const decreamentValue = (value) => {
  return { type: DECREMENT, payLoad: value }
}
```

**invoke those two function inside peremetar of dispatch**

```jsx
increment.addEventListener("click", () => {
  store.dispatch(increamentValue(2))
})

decrement.addEventListener("click", () => {
  store.dispatch(decreamentValue(2))
})
```

### Reducer function :-

- We pass our **reducer** _createReducer_ function inside our **Redux** store . So question is arrive what is the feature of reducer function?

- reducer function take two thing as a peremeter

  - 1. state
  - 2. action.

  **Here we set the state value === initialState**
  **Value of action come from dispatch**

- reducer function must be a always pure function . It is never mutate the value of any varible .
- example of impure function :-

```js
const state = {
  value: 0,
}

const impureFunc = (abc) => {
  state.value = abc * 2
}

impure(5)
console.log(state.value) // 10

impure(5)
console.log(state.value) // 20
```

- **Here inpureFunc is mutate the value of state obj and every time the value is change**

### immutibility

- Redex never mutate the value of main **state** .
- [Mutability vs Immutability in JavaScript. Click here to learn more...](https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/)

### Write a reducer function vanilla javascript .

**First we create a actionArray, Which have 5 element**

```js
const actionArray = [
  { type: "increment", payLoad: 1 },
  { type: "increment", payLoad: 1 },
  { type: "increment", payLoad: 1 },
  { type: "decrement", payLoad: 1 },
  { type: "decrement", payLoad: 1 },
]
```

**Create a defaultState obj**

```js
const defaultState = {
  value: 1,
}
```

**Create a createReducer func and pass this two peremeter**

- **state** and **action**
  - here **state** === **defaultState** obj
  - **action** === **actionArray**

```js
const createReducre = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payLoad,
    }
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payLoad,
    } else {
    return { ...state }
  }
 }
}
```

**Pass the createReducer function and defaultState as a argument of _action.reducer()_**

```js
const finalResult = actionArray.reduce(createReducre, defaultState)
console.log(finalResult) //# {value: 2}
// defaultState = 1 , increment = 3 , decrement = 2
// 1 + 3 - 2 = 2
```

- in reduce function every time our **defaultState** is calculated .

#### We also do the whole same thing in that way :-

```js
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
        value: state.value + action.payLoad,
      }
    } else {
      return { ...state }
    }
  },
  { value: 1 }
)
console.log(finalResult) //# {value: 2}
```
