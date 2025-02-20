import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, deleteTodo } from "./features/item/itemSlice"

const ReduxTodoList = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-base-200 p-4'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mb-4 text-primary'>
          Todo List
        </h1>
        <TodoInput />
        <TodoItems />
      </div>
    </div>
  )
}

const TodoInput = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task))
      setTask("")
    }
  }

  return (
    <div className='flex gap-2 mb-4'>
      <input
        type='text'
        placeholder='Add a new task...'
        className='input input-bordered w-full'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleAddTodo}>
        Add
      </button>
    </div>
  )
}

const TodoItems = () => {
  const { todos } = useSelector((state) => state.todos)

  return (
    <div className='space-y-2'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-between bg-base-100 p-3 rounded-lg shadow-md'>
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          className='checkbox checkbox-primary'
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span
          className={
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }
        >
          {todo.text}
        </span>
      </div>
      <button
        className='btn btn-error btn-sm'
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  )
}

export default ReduxTodoList
