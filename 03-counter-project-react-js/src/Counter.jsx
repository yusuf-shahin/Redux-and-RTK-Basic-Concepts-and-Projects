import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const number = useSelector((state) => state)
  const dispatch = useDispatch()
  // console.log(number)

  return (
    <>
      <span
        className='decrement'
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </span>
      <span className='num'>{number}</span>
      <span
        className='increment'
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </span>
    </>
  )
}

export default Counter
