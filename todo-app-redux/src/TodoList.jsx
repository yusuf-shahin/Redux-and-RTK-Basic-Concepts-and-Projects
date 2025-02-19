import React, { useState } from "react"
import TodoInput from "./Components/TodoInput"
import TodoItems from "./Components/TodoItems"

const TodoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [list, setList] = useState([])

  const stateObj = {
    inputValue,
    setInputValue,
    list,
    setList,
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-base-200 p-4'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mb-4 text-primary'>
          Todo List
        </h1>
        <TodoInput {...stateObj} />
        <TodoItems {...stateObj} />
      </div>
    </div>
  )
}

export default TodoList
