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
