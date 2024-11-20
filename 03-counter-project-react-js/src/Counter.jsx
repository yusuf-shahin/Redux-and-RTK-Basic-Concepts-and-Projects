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
        onClick={() => dispatch({ type: "decrement", payload: 3 })}
      >
        -
      </span>
      <span className='num'>{state.value}</span>
      <span
        className='increment'
        onClick={() => dispatch({ type: "increment", payload: 5 })}
      >
        +
      </span>
    </>
  )
}

export default Counter
