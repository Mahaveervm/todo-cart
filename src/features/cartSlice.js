import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos } from '../services/api';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
  const todos = await fetchTodos();
  return todos.slice(0, 10); // Limit to 10 for demo
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    todos: [],
    cart: [],
    status: 'idle',
  },
  reducers: {
    addToCart: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo && !state.cart.find(item => item.id === todo.id)) {
        state.cart.push(todo);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
