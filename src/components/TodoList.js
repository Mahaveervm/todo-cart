import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../features/cartSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadTodos());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading todos</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} inCart={cart.some(item => item.id === todo.id)} />
      ))}
    </div>
  );
};

export default TodoList;
