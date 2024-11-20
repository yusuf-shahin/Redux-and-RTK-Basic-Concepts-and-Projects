import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const number = useSelector((state) => state.value)
  const dispatch = useDispatch()
  // console.log(number)

  return (
    <>
      <span
        className='decrement'
        onClick={() => dispatch({ type: "decrement", payload: 3 })}
      >
        -
      </span>
      <span className='num'>{number}</span>
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
