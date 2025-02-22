import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: "todos_app",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [
        ...state.todoList,
        { text: action.payload, id: nanoid() },
      ]
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todoList.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
