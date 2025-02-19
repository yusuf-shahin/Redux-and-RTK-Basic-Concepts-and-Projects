import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = ({ name }) => {
  //* defaultState
  const state = useSelector((state) => state)

  //* pass the object for action
  const dispatch = useDispatch()
  // console.log(state.value)

  //@ dispatch function in a function

  const incrementHandeler = (num) => {
    dispatch({ type: "increment", payload: num })
  }

  const decrementHandeler = (num) => {
    dispatch({ type: "decrement", payload: num })
  }

  return (
    <>
      <span
        className='decrement'
        // onClick={() => dispatch({ type: "decrement", payload: 1 })}
        onClick={() => decrementHandeler(2)}
      >
        -
      </span>
      <span className='num'>{state.value}</span>
      <span
        className='increment'
        // onClick={() => dispatch({ type: "increment", payload: 1 })}
        onClick={() => incrementHandeler(3)}
      >
        +
      </span>
    </>
  )
}

export default Counter
