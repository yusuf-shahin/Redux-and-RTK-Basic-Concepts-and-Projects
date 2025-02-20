import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: "todos_app",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, { text: action.payload, id: nanoid() }]
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
